import { motion } from 'framer-motion';
import { MapPin, Instagram, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-5xl font-serif italic text-amber-900 mb-16"
          >
            Start Your Journey <span className="text-amber-600">With Us</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Location Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#FAF7F2] p-10 rounded-[3rem] border border-amber-100 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-600 shadow-sm">
                <MapPin size={32} />
              </div>
              <h4 className="font-bold text-amber-900 mb-2">Visit Studio</h4>
              <p className="text-amber-800/60 text-sm">Alam Sutera, Tangerang<br />Banten, Indonesia</p>
            </motion.div>

            {/* Hours Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#FAF7F2] p-10 rounded-[3rem] border border-amber-100 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-600 shadow-sm">
                <Clock size={32} />
              </div>
              <h4 className="font-bold text-amber-900 mb-2">Class Hours</h4>
              <p className="text-amber-800/60 text-sm">Mon - Sun: 08.00 - 20.00<br />(By Reservation Only)</p>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a 
              href="https://wa.me/message/NDW55DJ2T3S6I1" 
              target="_blank"
              className="px-12 py-6 bg-amber-600 text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-amber-700 transition-all shadow-xl shadow-amber-200"
            >
              <MessageCircle size={20} /> Reserve via WhatsApp
            </a>
            <a 
              href="https://www.instagram.com/fairystudioid/" 
              target="_blank"
              className="px-12 py-6 bg-white text-amber-900 border border-amber-200 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-amber-50 transition-all"
            >
              <Instagram size={20} /> @fairystudioid
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;