import { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "Apakah ada biaya pendaftaran?",
            answer: "Tidak ada biaya tersembunyi di IronClad Fitness. Harga yang tertera sudah termasuk semua. Kami percaya pada transparansi pricing agar Anda bisa fokus pada goal fitness tanpa khawatir biaya tambahan."
        },
        {
            question: "Bisakah saya freeze membership?",
            answer: "Ya, Anda bisa freeze membership hingga 3 bulan per tahun. Cukup beritahu kami minimal 7 hari sebelumnya, dan kami akan pause billing Anda. Perfect untuk liburan atau perjalanan bisnis."
        },
        {
            question: "Bagaimana kebijakan pembatalan?",
            answer: "Anda bisa batalkan membership kapan saja dengan pemberitahuan 30 hari. Tanpa kontrak jangka panjang, tanpa penalti. Kami ingin Anda tetap karena suka, bukan karena terikat kontrak."
        },
        {
            question: "Apakah tersedia day pass?",
            answer: "Ya! Day pass tersedia dengan harga Rp 100K. Cara yang bagus untuk mencoba fasilitas kami sebelum berkomitmen untuk membership. Hubungi kami untuk jadwalkan kunjungan."
        },
        {
            question: "Apa jam operasional gym?",
            answer: "Kami buka setiap hari dari jam 06:00 - 22:00 WIB. Jam yang panjang memastikan Anda bisa workout kapan saja sesuai jadwal, baik pagi atau malam hari."
        },
        {
            question: "Apakah ada trial gratis?",
            answer: "Ya! Kami menawarkan 1 hari free trial untuk member baru. Anda bisa mencoba semua fasilitas dan kelas grup kami. Daftar sekarang untuk klaim free trial Anda!"
        }
    ];

    return (
        <section className="faq" id="faq">
            <div className="container-small">
                <div className="section-header" data-animate="fadeUp">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-subtitle">Pertanyaan yang sering diajukan</p>
                </div>
                <div className="faq-list">
                    {faqItems.map((item, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} data-animate="fadeUp">
                            <button className="faq-question" onClick={() => toggleFAQ(index)}>
                                <span>{item.question}</span>
                                <span className="faq-icon">+</span>
                            </button>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
