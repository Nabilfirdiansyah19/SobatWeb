// import React from 'react';
import { useState, useEffect } from 'react';
const Pricing = ({ onSelectPlan }) => {
    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="section-header" data-animate="fadeUp">
                    <h2 className="section-title">Pilih Paket Membership Anda</h2>
                    <p className="section-subtitle">Investasi terbaik untuk kesehatan dan kebugaran Anda</p>
                </div>
                <div className="pricing-grid">
                    <div className="price-card" data-animate="fadeUp">
                        <div className="price-header">
                            <div className="price-name">STARTER</div>
                            <div className="price-amount">
                                <sup>Rp</sup>350<span>K</span>
                                <sub>/bulan</sub>
                            </div>
                            <div className="price-desc">Perfect untuk pemula</div>
                        </div>
                        <ul className="price-features">
                            <li>Akses Gym Floor</li>
                            <li>Locker & Shower</li>
                            <li>Free Wi-Fi</li>
                            <li>1x Free Consultation</li>
                            <li>Parking Area</li>
                        </ul>
                        <button className="btn-select" onClick={() => onSelectPlan('starter')}>Pilih Paket</button>
                    </div>

                    <div className="price-card featured" data-animate="fadeUp">
                        <div className="featured-badge">⭐ MOST POPULAR</div>
                        <div className="price-header">
                            <div className="price-name">PERFORMER</div>
                            <div className="price-amount">
                                <sup>Rp</sup>650<span>K</span>
                                <sub>/bulan</sub>
                            </div>
                            <div className="price-desc">Untuk yang serius berlatih</div>
                        </div>
                        <ul className="price-features">
                            <li>Semua fitur Starter</li>
                            <li>Unlimited Group Classes</li>
                            <li>Sauna & Steam Room</li>
                            <li>2x Guest Pass/bulan</li>
                            <li>Nutritional Guidance App</li>
                            <li>Free Gym Bag</li>
                        </ul>
                        <button className="btn-select" onClick={() => onSelectPlan('performer')}>Pilih Paket</button>
                    </div>

                    <div className="price-card" data-animate="fadeUp">
                        <div className="price-header">
                            <div className="price-name">ATHLETE</div>
                            <div className="price-amount">
                                <sup>Rp</sup>1.2<span>JT</span>
                                <sub>/bulan</sub>
                            </div>
                            <div className="price-desc">Ultimate performance package</div>
                        </div>
                        <ul className="price-features">
                            <li>Semua fitur Performer</li>
                            <li>4x Personal Training/bulan</li>
                            <li>Unlimited Guest Pass</li>
                            <li>Towel Service</li>
                            <li>Priority Booking</li>
                            <li>Free Supplements</li>
                            <li>Body Composition Analysis</li>
                        </ul>
                        <button className="btn-select" onClick={() => onSelectPlan('athlete')}>Pilih Paket</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
