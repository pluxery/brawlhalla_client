import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-5 row align-items-end'>
            <div className="footer col">
                <div className="contain">
                    <div className="col">
                        <h1>Social</h1>
                        <ul>
                            <li>VK</li>
                            <li>Youtube</li>
                            <li>Steam</li>
                            <li>Telegram</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Products</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Resources</h1>
                        <ul>
                            <li>Webmail</li>
                            <li>Redeem code</li>
                            <li>WHOIS lookup</li>
                            <li>Site map</li>
                            <li>Web templates</li>
                            <li>Email templates</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Support</h1>
                        <ul>
                            <li>Contact us</li>
                            <li>Web chat</li>
                            <li>Open ticket</li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>

    );
};

export default Footer;