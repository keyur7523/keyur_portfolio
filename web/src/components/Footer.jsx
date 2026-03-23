import React from "react";
import './style/Footer.css'
import { NavLink } from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FaHackerrank } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <div className='footer-1'>
                <ul className='footer-nav-links'>
                    <li><NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to='/projects' className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink></li>
                    <li><NavLink to='/about' className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
                    <li><NavLink to='/contact' className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
                </ul>
                <div className='footer-social'>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/keyur-pawaskar-7b05b6169/' aria-label='LinkedIn'><FaLinkedinIn /></a>
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/keyur7523' aria-label='GitHub'><FaGithub /></a>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/keyur_pawaskar/' aria-label='Instagram'><FaInstagram /></a>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.hackerrank.com/profile/keyur_pawaskar' aria-label='Hackerrank'><FaHackerrank /></a>
                    <a target='_blank' rel='noopener noreferrer' href='https://x.com/keyur_pawa13430' aria-label='X'><FaXTwitter /></a>
                </div>
            </div>
            <div className='footer-2'>
                <div className='footer-interaction'>
                    <h2 className='footer-cta-title'>Interested in working together<span className='accent'>?</span></h2>
                    <div className='footer-cta-buttons'>
                        <NavLink
                            to='/contact'
                            className='footer-interaction-contact'
                            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                        >
                            Get In Touch
                        </NavLink>
                        <NavLink
                            to='/projects'
                            className='footer-interaction-projects'
                            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                        >
                            Browse Projects
                        </NavLink>
                    </div>
                </div>
                <div className='copyright'>
                    <p>&copy; {new Date().getFullYear()} Keyur Pawaskar. All rights reserved.</p>
                    <p>Built with React.</p>
                </div>
            </div>
        </>
    )
}