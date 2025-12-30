import React from 'react';

const Trainers = () => {
    return (
        <section className="trainers" id="trainers">
            <div className="container">
                <div className="section-header" data-animate="fadeUp">
                    <h2 className="section-title">Meet Our Trainers</h2>
                    <p className="section-subtitle">Tim profesional yang siap membantu perjalanan fitness Anda</p>
                </div>
                <div className="trainers-grid">
                    <div className="trainer-card" data-animate="fadeUp">
                        <div className="trainer-image">
                            <div className="trainer-placeholder">👨‍🏫</div>
                        </div>
                        <h3 className="trainer-name">Ahmad Rifai</h3>
                        <p className="trainer-specialty">Strength & Conditioning</p>
                        <p className="trainer-bio">10+ tahun pengalaman, spesialis powerlifting & bodybuilding</p>
                        <div className="trainer-certs">
                            <span>ISSA Certified</span>
                            <span>NSCA-CPT</span>
                        </div>
                    </div>

                    <div className="trainer-card" data-animate="fadeUp">
                        <div className="trainer-image">
                            <div className="trainer-placeholder">👩‍🏫</div>
                        </div>
                        <h3 className="trainer-name">Sarah Wijaya</h3>
                        <p className="trainer-specialty">Yoga & Pilates</p>
                        <p className="trainer-bio">Certified yoga instructor dengan fokus pada mind-body connection</p>
                        <div className="trainer-certs">
                            <span>RYT-500</span>
                            <span>Pilates Pro</span>
                        </div>
                    </div>

                    <div className="trainer-card" data-animate="fadeUp">
                        <div className="trainer-image">
                            <div className="trainer-placeholder">👨‍🏫</div>
                        </div>
                        <h3 className="trainer-name">David Kusuma</h3>
                        <p className="trainer-specialty">HIIT & Functional Training</p>
                        <p className="trainer-bio">Expert dalam high-intensity training dan athletic performance</p>
                        <div className="trainer-certs">
                            <span>CrossFit L2</span>
                            <span>TRX Certified</span>
                        </div>
                    </div>

                    <div className="trainer-card" data-animate="fadeUp">
                        <div className="trainer-image">
                            <div className="trainer-placeholder">👩‍🏫</div>
                        </div>
                        <h3 className="trainer-name">Michelle Tan</h3>
                        <p className="trainer-specialty">Nutrition & Weight Loss</p>
                        <p className="trainer-bio">Certified nutritionist membantu transformasi tubuh dari dalam</p>
                        <div className="trainer-certs">
                            <span>Nutrition Pro</span>
                            <span>ACE Certified</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trainers;
