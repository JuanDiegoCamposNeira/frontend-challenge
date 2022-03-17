// React specifics
import React from "react";

// Styles
import './Footer.css';


export default function Footer() {

    const navLinks = ['About', 'Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Ads info', 'Blog', 'Status', 'Carrers', 'Brand Resources', 'Advertsing', 'Marketing', 'Twitter for Business', 'Developers', 'Directory', 'Settings'];

    return (
        <>
            <ul>
                {navLinks.map( link => <li key={link}><a href="">{link}</a></li> )}
            </ul>
            <p className="twitter-copyrights"> © 2022 Twitter, Inc. </p>
        </>
    );

}