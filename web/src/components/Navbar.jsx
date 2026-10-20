import { useState, useEffect, useSyncExternalStore } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle';
import './style/Navbar.css'

// The full link row needs ~1200px inside the page margins; below that, use the menu. Keep in sync with Navbar.css.
const MOBILE = '(max-width: 1200px)'
const subscribe = (cb) => {
    const mq = window.matchMedia(MOBILE)
    mq.addEventListener('change', cb)
    return () => mq.removeEventListener('change', cb)
}
const useIsMobile = () => useSyncExternalStore(subscribe, () => window.matchMedia(MOBILE).matches)

// The menu grows out of the toggle and leaves along the same path
const panel = { opacity: 0, scale: 0.96, y: -8 }

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isMobile = useIsMobile()
    const menuOpen = isMenuOpen && isMobile
    const close = () => setIsMenuOpen(false)

    useEffect(() => {
        if (!menuOpen) return
        const onKey = (e) => { if (e.key === 'Escape') setIsMenuOpen(false) }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [menuOpen])

    const linkClass = ({ isActive }) => isActive ? 'active' : ''
    const links = (
        <>
            <li><NavLink to='/' className={linkClass} onClick={close}>Home</NavLink></li>
            <li><NavLink to='/projects' className={linkClass} onClick={close}>Projects</NavLink></li>
            <li><NavLink to='/about' className={linkClass} onClick={close}>About</NavLink></li>
            <li><NavLink to='/contact' className={linkClass} onClick={close}>Contact</NavLink></li>
            <li><a href='/resume.pdf' target='_blank' rel='noopener noreferrer' className='navbar-resume' onClick={close}>Resume</a></li>
        </>
    )

    return (
        <>
            {/* A real viewport scrim: a fixed child of the nav would be trapped by its backdrop-filter */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className='navbar-scrim'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={close}
                        aria-hidden='true'
                    />
                )}
            </AnimatePresence>
            <nav className='navbar'>
                <a href='#main-content' className='skip-link'>Skip to main content</a>
                <p>Keyur Pawaskar</p>
                {!isMobile && <ul className='navbar-links'>{links}</ul>}
                <button
                    type='button'
                    className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={menuOpen}
                    aria-controls='mobile-menu'
                    onClick={() => setIsMenuOpen(open => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <div className='navbar-actions'>
                    <ThemeToggle />
                </div>
                <AnimatePresence>
                    {menuOpen && (
                        <motion.ul
                            id='mobile-menu'
                            className='navbar-menu'
                            initial={panel}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={panel}
                        >
                            {links}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </>
    )
}
