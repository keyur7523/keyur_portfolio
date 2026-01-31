import React, { useEffect } from 'react'
import "./style/Contact.css"
import profilePicture from '../images/profile_picture.JPG'
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaHackerrank } from "react-icons/fa";
import { HiDownload } from 'react-icons/hi';
import { FadeIn } from '../components/ui/Animations';

export default function Contact() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    return (
            <div className='my-info'>
                <div className='text'>
                    <FadeIn delay={0.1}>
                        <h1 className='contact-title'>Contact me<span className='accent'>.</span></h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className='contact-details'>
                            <a className='contact-item' href='mailto:pawaskarkeyur96@gmail.com'>
                                <span className='contact-icon-wrap'>
                                    <MdOutlineEmail className='contact-icon' />
                                </span>
                                <span className='contact-text'>pawaskarkeyur96@gmail.com</span>
                            </a>
                            <a className='contact-item' href='tel:+15596498106'>
                                <span className='contact-icon-wrap'>
                                    <CiPhone className='contact-icon' />
                                </span>
                                <span className='contact-text'>+1 (559) 649-8106</span>
                            </a>
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
                    <img src={profilePicture} alt='Profile picture' />
                </FadeIn>
            </div>
    )
}