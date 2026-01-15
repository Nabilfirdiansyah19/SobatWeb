import { MapPin, Instagram, Phone } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Contact = () => {
  return (
    <section id="location" className="py-24 bg-[#FDFCFB]">
      <div className="container mx-auto px-6 text-center">
        <MapPin className="mx-auto text-[#8D6E63] mb-6" size={40} />
        <h2 className="text-4xl font-serif text-[#5D4037] mb-4">Visit Our Studio</h2>
        <p className="text-[#8D6E63] font-medium max-w-md mx-auto mb-12">
          {businessConfig.location.name} <br />
          {businessConfig.location.address}
        </p>
        
        <div className="flex justify-center gap-6 mb-16">
          <a href={businessConfig.instagram} className="p-4 rounded-full bg-white border border-[#8D6E63]/20 text-[#8D6E63] hover:bg-[#8D6E63] hover:text-white transition-all shadow-sm">
            <Instagram size={24} />
          </a>
          <a href={`https://wa.me/${businessConfig.whatsapp}`} className="p-4 rounded-full bg-white border border-[#8D6E63]/20 text-[#8D6E63] hover:bg-[#8D6E63] hover:text-white transition-all shadow-sm">
            <Phone size={24} />
          </a>
        </div>

        <div className="w-full h-[400px] rounded-[3rem] overflow-hidden border border-[#8D6E63]/10 shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0504620023616!2d106.6214!3d-6.2573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMjYuMyJTIDEwNiwzNycyNy4wIkU!5e0!3m2!1sen!2sid!4v1700000000000"
            className="w-full h-full"
            style={{ border: 0, filter: "sepia(20%) contrast(90%)" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Contact;