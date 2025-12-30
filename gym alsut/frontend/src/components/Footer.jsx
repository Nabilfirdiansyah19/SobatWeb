import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">IRON<span>CLAD</span></div>
                        <p>Transform your body, elevate your mind, achieve your goals.</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#schedule">Schedule</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Hours</h4>
                            <ul>
                                <li>Mon - Fri: 06:00 - 22:00</li>
                                <li>Sat - Sun: 06:00 - 22:00</li>
                                <li>Public Holidays: 08:00 - 20:00</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 IronClad Fitness. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
