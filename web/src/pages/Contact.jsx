import React, { useEffect } from 'react'
import "./style/Contact.css"
import profilePicture from '../images/profile_picture.JPG'
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

export default function Contact() {
    
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    return (
            <div className='my-info'>
                <div className='text'>
                    <h1 className='contact-title'>Contact me<span className='accent'>.</span></h1>
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
                </div>
                <div className='image'>
                    <img src={profilePicture} alt='Profile picture' />
                </div>
            </div>
    )
}