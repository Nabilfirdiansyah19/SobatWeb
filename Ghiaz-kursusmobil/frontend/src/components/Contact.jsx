import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
            HUBUNGI <span className="text-red-600">KAMI.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-4xl border border-slate-100">
              <Phone className="text-red-600 mb-4" size={32} />
              <h4 className="font-black uppercase italic tracking-tighter text-xl mb-2">WhatsApp Admin</h4>
              <p className="text-slate-500 font-medium mb-4 text-sm md:text-base">Konsultasi gratis & tanya jadwal lewat chat.</p>
              <a href="https://wa.link/8zk4ql" className="text-red-600 font-black italic uppercase text-xs tracking-widest">Chat Sekarang →</a>
            </div>

            <div className="bg-slate-50 p-8 rounded-4xl border border-slate-100">
              <MapPin className="text-red-600 mb-4" size={32} />
              <h4 className="font-black uppercase italic tracking-tighter text-xl mb-2">Lokasi Kami</h4>
              <p className="text-slate-500 font-medium text-sm md:text-base">Tangerang & Sekitarnya (Melayani Antar Jemput).</p>
            </div>
          </div>

          {/* Map / Google Maps Placeholder */}
          <div className="h-75 md:h-auto min-h-75 bg-slate-200 rounded-4xl overflow-hidden grayscale">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.18341648938!2d106.55686007421334!3d-6.155099395048123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8e853d2e3c1%3A0x3015760a0f05250!2sTangerang%2C%20Tangerang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;