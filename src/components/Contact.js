import React from 'react';
import '.././css/contact.css';

export default function Contact() {
    return (
        <>
            <main className='contact-main'>
                <div className='contact-container-header'>
                    <h1>Contact</h1>
                </div>
                <div className='contact-container-body'>
                    <div className='contact-container-body-left'>
                        <div className='contact-container-body-left-header'>
                            <h2>Contact Me</h2>

                        </div>
                        <div className='contact-container-body-left-body'>
                            <p>
                                <span>Email:</span>
                                <span>
                                    <a href='mailto:darpankattel1@gmail.com'>darpankattel1@gmail.com</a>
                                </span>
                            </p>
                            <p>
                                <span>Phone:</span>
                                <span>
                                    <a href='tel:+9779825953757'>+977 9825953757</a>
                                </span>
                            </p>
                            <p>
                                <span>Address: </span>
                                <span>
                                    Currently @ Bishal Chowk, Dharan, Nepal.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='contact-container-body-right'>
                        <div className='contact-container-body-right-header'>
                            <h2>Social Media</h2>
                        </div>
                        <div className='contact-container-body-right-body'>
                            <a href='https://github.com/darpankattel/' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                            <a href='https://www.facebook.com/darpan.kattel' target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook-square"></i></a>
                            <a href="https://www.instagram.com/katteldarpan/" target='_blank' rel='noopener noreferrer'><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
