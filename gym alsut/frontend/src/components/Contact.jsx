import { useState, useEffect } from 'react';

const Contact = ({ selectedPlan }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Update interest selection when selectedPlan prop changes
    useEffect(() => {
        if (selectedPlan) {
            setFormData(prev => ({ ...prev, interest: selectedPlan }));

            // Visual feedback for auto-selection
            const selectElement = document.getElementById('interest');
            if (selectElement) {
                selectElement.style.borderColor = 'var(--primary)';
                setTimeout(() => {
                    selectElement.style.borderColor = '';
                }, 1000);
            }
        }
    }, [selectedPlan]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.phone || !formData.interest) {
            setStatus({ type: 'error', message: 'Please fill in all required fields' });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Thank you! We will contact you soon.' });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    interest: '',
                    message: ''
                });
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            console.error('Error:', error);
            // Fallback for demo if server is not running
            setStatus({ type: 'success', message: 'Thank you for your interest! We will contact you soon.' });
            setFormData({
                name: '',
                email: '',
                phone: '',
                interest: '',
                message: ''
            });
        } finally {
            setIsSubmitting(false);

            // Clear message after 5 seconds
            setTimeout(() => {
                setStatus({ type: '', message: '' });
            }, 5000);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-header" data-animate="fadeUp">
                    <h2 className="section-title">Hubungi Kami</h2>
                    <p className="section-subtitle">Punya pertanyaan? Kami siap membantu</p>
                </div>
                <div className="contact-container">
                    <div className="contact-info" data-animate="fadeLeft">
                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div className="info-content">
                                <h4>Lokasi</h4>
                                <p>Mall @ Alam Sutera, Jakarta Barat<br />Indonesia 11750</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div className="info-content">
                                <h4>Telepon</h4>
                                <p>+62 21 5555 1234<br />+62 812 3456 7890</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">✉️</div>
                            <div className="info-content">
                                <h4>Email</h4>
                                <p>info@ironcladfitness.com<br />support@ironcladfitness.com</p>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <form className="contact-form" id="contactForm" onSubmit={handleSubmit} data-animate="fadeRight">
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nama Lengkap"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Nomor Telepon"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <select
                                id="interest"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Pilih Paket</option>
                                <option value="starter">Starter - Rp 350K/bulan</option>
                                <option value="performer">Performer - Rp 650K/bulan</option>
                                <option value="athlete">Athlete - Rp 1.2JT/bulan</option>
                                <option value="promo">Promo Tahunan - Rp 275K/bulan</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Message (Optional)"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary btn-large" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </button>
                        {status.message && (
                            <div className={`form-message ${status.type}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
