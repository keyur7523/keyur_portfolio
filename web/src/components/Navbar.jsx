import { useState } from 'react'
import './style/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { GrContact } from "react-icons/gr";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleToggle() {
        setIsMenuOpen(prev => !prev)
    }

    function handleLinkClick() {
        setIsMenuOpen(false)
    }

    return (
        <nav className='navbar'>
            <p>Keyur Pawaskar</p>
            <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Home</NavLink></li>
                <li><NavLink to='/projects' className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Projects</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>About</NavLink></li>
                <li className='navbar-contact-mobile'>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <button
                type='button'
                className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`}
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={handleToggle}
            >
                <span />
                <span />
                <span />
            </button>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'active contact-icon' : 'contact-icon'} aria-label='Contact'>
                <GrContact />
            </NavLink>
        </nav>
    )
}