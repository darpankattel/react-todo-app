import React from 'react'
import WebsiteName from './WebsiteName'
import NavLinkCompo from './NavLinkCompo'
import '.././css/navbar.css'

export default function Navbar() {
    let links = [{ text: "Home", link: "/", hash: "#welcome" }, { text: "About", link: "/about" }, { text: "Contact", link: "/contact" }]
    if (window.matchMedia("(max-width: 768px)").matches) {
        // if window is scrolled 200px down
        window.onscroll = function() {
            if (window.scrollY > 200) {
                let nav = document.querySelector('nav');
                nav.style.padding = '0';
                nav.querySelector('.website-name').style.display = 'none';
                nav.querySelector('.navbar-logo').style.display = 'none';
                nav.querySelector('.navbar-links').style.marginTop = '0';
                // nav.querySelector('.navbar-links').style.fontSize = '1.3rem';
            }else{
                let nav = document.querySelector('nav');
                nav.style.padding = '1rem';
                nav.querySelector('.website-name').style.display = 'block';
                nav.querySelector('.navbar-logo').style.display = 'block';
                nav.querySelector('.navbar-links').style.marginTop = '1rem';
                // nav.querySelector('.navbar-links').style.fontSize = '1rem';
            }
        }
    }
    return (
        <>
            <div className="navbar-container" id='welcome'>
                <nav className='navbar'>
                    <div className='navbar-logo'>
                        <img src='/images/logo.png' alt='logo' />
                    </div>
                    <WebsiteName />
                    <div className='navbar-links'>
                    {links.map((link, index, hash) => {
                        return (
                            <NavLinkCompo link = {link} key={index} hash={hash} />
                        )
                    })}
                    </div>
                </nav>
            </div>
        </>
    )
}
