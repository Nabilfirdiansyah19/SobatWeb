import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Deteksi scroll untuk efek glassmorphism
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fungsi Klik untuk Scroll ke Section
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Jarak agar tidak tertutup navbar yang melayang
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            setMobileMenuOpen(false); // Tutup menu mobile jika terbuka
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Pricing', id: 'pricing' },
        { name: 'Features', id: 'features' },
        { name: 'Schedule', id: 'schedule' },
        { name: 'Trainers', id: 'trainers' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="container mx-auto px-6">
                <div className={`flex justify-between items-center transition-all duration-500 px-8 py-4 ${scrolled ? 'bg-black/80 backdrop-blur-2xl border border-red-600/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : ''}`}>
                    
                    {/* Logo */}
                    <div 
                        className="flex items-center gap-2 text-2xl font-black italic tracking-tighter cursor-pointer group" 
                        onClick={(e) => scrollToSection(e, 'home')}
                    >
                        <Dumbbell className="text-red-600 group-hover:rotate-45 transition-transform" size={30} />
                        <span className="text-white">GYM</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-10 font-bold text-[10px] uppercase tracking-[0.3em] text-gray-300">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a 
                                    href={`#${link.id}`}
                                    onClick={(e) => scrollToSection(e, link.id)}
                                    className="hover:text-red-600 cursor-pointer transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Button */}
                    <button 
                        onClick={(e) => scrollToSection(e, 'pricing')}
                        className="hidden lg:block bg-red-600 text-white px-8 py-3 rounded-full font-black text-[10px] tracking-widest hover:scale-105 transition-all shadow-lg shadow-red-600/20"
                    >
                        GET STARTED
                    </button>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black z-[-1] flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <a 
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className="text-4xl font-black italic uppercase text-white hover:text-red-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button 
                            onClick={(e) => scrollToSection(e, 'pricing')}
                            className="mt-4 bg-red-600 text-white px-10 py-4 rounded-full font-black text-sm tracking-widest"
                        >
                            JOIN NOW
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;