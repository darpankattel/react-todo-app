import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  
import '.././css/navlink.css';

export default function NavLinkCompo({link, hash}) {
    // console.log(link.link);
    // console.log(link.hash);
    return (
        <>
            <NavLink to={{
                pathname: link.link,
                hash: link.hash,
            }} className={({ isActive }) =>
            [isActive ? "nav-link nav-link-active" : "nav-link"]} >{link.text}</NavLink>
            {/* <a href={link.link} className='nav-link'>{link.text}</a> */}
        </>
    )
}
