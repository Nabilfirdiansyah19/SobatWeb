import { useEffect, useRef, useState } from 'react';

const Stats = () => {
    // We use a ref to track if we've already animated to prevent re-animation
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounters();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60 FPS

            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 16);
        });
    };

    return (
        <section className="stats" ref={sectionRef}>
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-card" data-animate="fadeUp">
                        <div className="stat-icon">🏋️</div>
                        <div className="stat-number" data-count="150">0</div>
                        <div className="stat-label">Alat Gym Premium</div>
                    </div>
                    <div className="stat-card" data-animate="fadeUp">
                        <div className="stat-icon">📐</div>
                        <div className="stat-number" data-count="3000">0</div>
                        <div className="stat-suffix">M²</div>
                        <div className="stat-label">Luas Area Gym</div>
                    </div>
                    <div className="stat-card" data-animate="fadeUp">
                        <div className="stat-icon">👥</div>
                        <div className="stat-number" data-count="5000">0</div>
                        <div className="stat-suffix">+</div>
                        <div className="stat-label">Member Aktif</div>
                    </div>
                    <div className="stat-card" data-animate="fadeUp">
                        <div className="stat-icon">⭐</div>
                        <div className="stat-number" data-count="50">0</div>
                        <div className="stat-suffix">+</div>
                        <div className="stat-label">Trainer Profesional</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
