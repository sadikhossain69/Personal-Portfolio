import React from 'react';
import { BsGithub, BsLinkedin, BsFacebook, BsTwitter } from 'react-icons/bs'

const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover" href='https://github.com/sadikhossain69' target='_blank' rel="noreferrer">Github</a>
                <a className="link link-hover" href="https://www.linkedin.com/in/sadik-hossain-520848237/" target='_blank' rel="noreferrer">Linkedin</a>
                <a className="link link-hover" href="https://www.facebook.com/profile.php?id=100075373803592" target='_blank' rel="noreferrer" >Facebook</a>
                <a className="link link-hover" href="https://twitter.com/JoarderSadik" target='_blank' rel="noreferrer">Twitter</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://github.com/sadikhossain69' target='_blank' rel="noreferrer" className='text-2xl'><BsGithub /></a>
                    <a href="https://www.linkedin.com/in/sadik-hossain-520848237/" target='_blank' rel="noreferrer" className='text-2xl'><BsLinkedin /></a>
                    <a href="https://www.facebook.com/profile.php?id=100075373803592" target='_blank' rel="noreferrer" className='text-2xl'><BsFacebook /></a>
                    <a href="https://twitter.com/JoarderSadik" target='_blank' rel="noreferrer" className='text-2xl'><BsTwitter /></a>
                </div>
            </div>
            <div>
                <p>Copyright © {date} - All right reserved by Sadik</p>
            </div>
        </footer>
    );
};

export default Footer;