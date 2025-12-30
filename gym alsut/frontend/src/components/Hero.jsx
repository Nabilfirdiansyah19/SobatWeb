import React from 'react';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-badge">🔥 Promo Akhir Tahun - Discount 50%</div>
                <h1 className="hero-title">
                    <span className="thin">GYM</span>
                    <span className="accent">TERBESAR</span>
                    <span className="main">& TERLENGKAP</span>
                </h1>
                <p className="hero-subtitle">
                    Transformasi tubuh Anda dimulai dari sini. Dengan peralatan terlengkap,
                    trainer profesional, dan komunitas yang supportif, capai target fitness Anda bersama IronClad.
                </p>
                <div className="hero-cta">
                    <button className="btn-primary btn-large" onClick={() => scrollToSection('pricing')}>
                        Lihat Paket Membership
                    </button>
                    <button className="btn-secondary btn-large" onClick={() => scrollToSection('contact')}>
                        Free Trial
                    </button>
                </div>
            </div>
            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-arrow">↓</div>
            </div>
        </section>
    );
};

export default Hero;
