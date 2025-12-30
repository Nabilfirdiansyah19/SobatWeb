import React from 'react';

const Features = () => {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header" data-animate="fadeUp">
                    <h2 className="section-title">Fasilitas Premium Kami</h2>
                    <p className="section-subtitle">Lengkap untuk semua kebutuhan fitness Anda</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card" data-animate="fadeUp">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3 className="feature-title">Les Mills Classes</h3>
                        <p className="feature-desc">Program kelas internasional: RPM, BODY COMBAT, BODY PUMP, MAT PILATES dengan
                            instruktur bersertifikat</p>
                    </div>

                    <div className="feature-card" data-animate="fadeUp">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <h3 className="feature-title">Muscle Recovery</h3>
                        <p className="feature-desc">Fasilitas pemulihan otot dengan teknologi terkini by PROSTASIA untuk
                            recovery optimal</p>
                    </div>

                    <div className="feature-card" data-animate="fadeUp">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <h3 className="feature-title">Hybrid Training Club</h3>
                        <p className="feature-desc">Area khusus dengan kombinasi berbagai metode latihan untuk hasil maksimal
                        </p>
                    </div>

                    <div className="feature-card" data-animate="fadeUp">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                                <path d="M12 2v10l8.66 5"></path>
                            </svg>
                        </div>
                        <h3 className="feature-title">Yoga Studio</h3>
                        <p className="feature-desc">Studio khusus yoga dengan suasana tenang dan instruktur profesional</p>
                    </div>

                    <div className="feature-card" data-animate="fadeUp">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        <h3 className="feature-title">Sauna & Steam Room</h3>
                        <p className="feature-desc">Relaksasi dan detoksifikasi dengan fasilitas sauna modern</p>
                    </div>

                    <div className="feature-card" data-animate="fadeUp">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <h3 className="feature-title">Buka Setiap Hari</h3>
                        <p className="feature-desc">06:00 - 22:00 WIB, 7 hari seminggu untuk kenyamanan jadwal Anda</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
