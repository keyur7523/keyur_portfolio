import React, { useEffect } from 'react'
import "./style/Contact.css"
import profilePicture from '../images/profile_medium.jpg'
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FaHackerrank } from "react-icons/fa";
import { HiDownload } from 'react-icons/hi';
import { FadeIn } from '../components/ui/Animations';

export default function Contact() {

    useEffect(() => {
        document.title = 'Contact | Keyur Pawaskar'
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        return () => { document.title = 'Keyur Pawaskar | Software Engineer' }
    }, [])

    return (
            <div className='my-info'>
                <div className='text'>
                    <FadeIn delay={0.1}>
                        <h1 className='contact-title'>Contact me<span className='accent'>.</span></h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className='contact-details'>
                            <a className='contact-item' href='mailto:codekeyur7523@gmail.com'>
                                <span className='contact-icon-wrap'>
                                    <MdOutlineEmail className='contact-icon' />
                                </span>
                                <span className='contact-text'>codekeyur7523@gmail.com</span>
                            </a>
                            <a className='contact-item' href='tel:+15596498106'>
                                <span className='contact-icon-wrap'>
                                    <CiPhone className='contact-icon' />
                                </span>
                                <span className='contact-text'>+1 (559) 649-8106</span>
                            </a>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.25}>
                        <div className='contact-status'>
                            <p>Fresno, CA &middot; Open to relocation &amp; remote</p>
                            <p>Open to Software / AI Engineer roles &middot; authorized to work in the US</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className='contact-socials'>
                            <h2>Connect With Me</h2>
                            <div className='social-links'>
                                <a href='https://www.linkedin.com/in/keyur-pawaskar-7b05b6169/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                                    <FaLinkedinIn />
                                </a>
                                <a href='https://github.com/keyur7523' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                                    <FaGithub />
                                </a>
                                <a href='https://www.instagram.com/keyur_pawaskar/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                                    <FaInstagram />
                                </a>
                                <a href='https://www.hackerrank.com/profile/keyur_pawaskar' target='_blank' rel='noopener noreferrer' aria-label='HackerRank'>
                                    <FaHackerrank />
                                </a>
                                <a href='https://x.com/keyur_pawa13430' target='_blank' rel='noopener noreferrer' aria-label='X'>
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <a
                            href='/resume.pdf'
                            download
                            className='resume-download'
                        >
                            <HiDownload />
                            Download Resume
                        </a>
                    </FadeIn>
                </div>
                <FadeIn delay={0.2} className='image'>
                    <img src={profilePicture} alt='Keyur Pawaskar' width='480' height='480' />
                </FadeIn>
            </div>
    )
}