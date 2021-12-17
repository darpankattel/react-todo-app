import React from 'react'
import '.././css/about.css'

export default function About() {
    return (
        <>
            <main className='about-main'>
                <div className='about-app'>
                    <h1>About App</h1>
                    <div className='about-text'>
                        <p>
                            The web application is a simple todo list application, where you can add, edit and delete todo items. This application is developed using React. With the help of React Router, this application is able to navigate between different pages.
                        </p>

                        <div className='about-image'>
                            <img src='/images/logo.png' alt='logo' />
                        </div>
                    </div>
                </div>
                <div className='about-developer'>
                    <h1>About Developer</h1>
                    <div className='about-text'>
                        <div className='about-text-p'>
                            I am <a href="https://darpankattel.com.np" target="_blank" rel='noopener noreferrer'>Darpan Kattel</a>, a student of Computer Engineering from IOE Purwanchal Campus. I am, generally, a self-taught developer and I am currently working on this simple and first project in React.
                            <br />
                            <br />
                            What do I know?
                            <br />
                            <ul>
                                <li>
                                    <strong>Python</strong> : Flask, Django, Tkinter, etc..
                                </li>
                                <li>
                                    <strong>JavaScript</strong> : React.
                                </li>
                                <li>
                                    HTML, CSS, Bootstrap, etc..
                                </li>
                                <li>
                                    PHP, MySQL, etc..
                                </li>
                                <li>
                                    C, C++, Java, C#(.Net Framework), etc..
                                </li>
                            </ul>
                        </div>
                        <div className='about-image about-image-developer'>
                            <img src='/images/darpan_new.jpg' alt='logo' />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
