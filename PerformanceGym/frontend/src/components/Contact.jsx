import { MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
    const waLink = "https://wa.me/6281234567890?text=Halo%20IronClad%2C%20saya%20ingin%20tanya%20membership";

    return (
        <section className="py-24 bg-[#0d0d0d]" id="contact">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black italic uppercase">Lokasi & Kontak</h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Maps Column */}
                    <div className="h-[450px] rounded-[50px] overflow-hidden border border-white/10 shadow-2xl relative group">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.302568471234!2d106.634!3d-6.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMTIuMCJTIDEwNiwzOCcwMi40IkU!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
                            width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                            allowFullScreen loading="lazy"
                        ></iframe>
                        <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-white/10 flex items-center gap-2">
                            <MapPin size={14} className="text-primary" /> Tangerang, Indonesia
                        </div>
                    </div>

                    {/* Contact Info Column */}
                    <div className="flex flex-col justify-between p-12 bg-white/5 border border-white/10 rounded-[50px]">
                        <div>
                            <h3 className="text-3xl font-black italic mb-6">SIAP MULAI LATIHAN?</h3>
                            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                                Tim kami siap membantu menjawab pertanyaan Anda melalui WhatsApp. 
                                Anda juga bisa langsung datang ke lokasi kami untuk trial gratis.
                            </p>
                            
                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-primary/10 rounded-[22px] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                        <Clock size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Jam Operasional</p>
                                        <p className="text-white font-bold text-lg">Setiap Hari: 06:00 - 22:00 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <a href={waLink} target="_blank" rel="noreferrer" 
                                className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-5 rounded-full font-black text-center flex items-center justify-center gap-3 transition-all hover:scale-[1.02]">
                                <MessageCircle size={24} fill="currentColor" /> WHATSAPP KAMI
                            </a>
                            <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                                className="px-10 bg-white/5 hover:bg-white/10 text-white py-5 rounded-full font-black text-center flex items-center justify-center gap-3 border border-white/10 transition-all">
                                <ExternalLink size={20} /> MAPS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;