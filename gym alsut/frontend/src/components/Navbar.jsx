import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileMenuOpen(false); // Close mobile menu after click
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <div className="logo" onClick={(e) => scrollToSection(e, 'home')}>
                    IRON<span>CLAD</span>
                </div>

                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="navLinks">
                    <li><a href="#home" className="nav-link" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
                    <li><a href="#pricing" className="nav-link" onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</a></li>
                    <li><a href="#features" className="nav-link" onClick={(e) => scrollToSection(e, 'features')}>Features</a></li>
                    <li><a href="#schedule" className="nav-link" onClick={(e) => scrollToSection(e, 'schedule')}>Schedule</a></li>
                    <li><a href="#trainers" className="nav-link" onClick={(e) => scrollToSection(e, 'trainers')}>Trainers</a></li>
                    <li><a href="#faq" className="nav-link" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a></li>
                </ul>

                <button className="btn-primary" onClick={(e) => scrollToSection(e, 'contact')}>Join Now</button>

                <div className="mobile-menu-toggle" id="mobileMenuToggle" onClick={toggleMobileMenu}>
                    <span style={mobileMenuOpen ? { transform: 'rotate(45deg) translateY(10px)' } : {}}></span>
                    <span style={mobileMenuOpen ? { opacity: 0 } : {}}></span>
                    <span style={mobileMenuOpen ? { transform: 'rotate(-45deg) translateY(-10px)' } : {}}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
