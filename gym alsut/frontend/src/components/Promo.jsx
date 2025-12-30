import { useState, useEffect } from 'react';

const Promo = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set countdown end date (7 days from now)
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 7);

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const distance = endDate.getTime() - now;

            if (distance < 0) {
                return null; // Promo ended
            }

            return {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            };
        };

        const timer = setInterval(() => {
            const timeLeft = calculateTimeLeft();
            if (timeLeft) {
                setTimeLeft(timeLeft);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="promo-section">
            <div className="container">
                <div className="promo-container">
                    <div className="promo-left" data-animate="fadeLeft">
                        <div className="promo-badge">🎉 PRESALE LIMITED - 100 ORANG PERTAMA</div>
                        <div className="promo-price">
                            <sup>Rp</sup>275<span>K</span>
                        </div>
                        <div className="promo-old-price">Dari Rp 325K/bulan</div>
                        <p className="promo-desc">Hemat hingga Rp 600K untuk paket tahunan!</p>
                    </div>
                    <div className="promo-right" data-animate="fadeRight">
                        <h3>Promo Akhir Tahun</h3>
                        <div className="promo-highlight">
                            <div className="promo-months">12 <span>+</span> 12</div>
                            <div className="promo-label">BULAN</div>
                        </div>
                        <ul className="promo-benefits">
                            <li>✓ Free Personal Training (4x)</li>
                            <li>✓ Free Gym Bag & Towel</li>
                            <li>✓ Unlimited Group Classes</li>
                            <li>✓ Free Consultation</li>
                        </ul>
                        <div className="promo-timer">
                            <p>Promo berakhir dalam:</p>
                            <div className="timer" id="promoTimer">
                                <div className="time-segment">
                                    <span id="days">{String(timeLeft.days).padStart(2, '0')}</span>
                                    <span className="time-label">Days</span>
                                </div>
                                <div className="time-separator">:</div>
                                <div className="time-segment">
                                    <span id="hours">{String(timeLeft.hours).padStart(2, '0')}</span>
                                    <span className="time-label">Hours</span>
                                </div>
                                <div className="time-separator">:</div>
                                <div className="time-segment">
                                    <span id="minutes">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                    <span className="time-label">Mins</span>
                                </div>
                                <div className="time-separator">:</div>
                                <div className="time-segment">
                                    <span id="seconds">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                    <span className="time-label">Secs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;
