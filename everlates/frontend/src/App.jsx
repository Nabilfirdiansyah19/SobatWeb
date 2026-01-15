import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbots';
import Preloader from './components/p';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [loading, setLoading] = useState(true);

  // Mengatur scroll ke atas saat refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FDFCFB] selection:bg-[#8D6E63] selection:text-white">
      <AnimatePresence>
        {loading ? (
          <Preloader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <Hero /> 
            <section id="about">
              <About />
            </section>
            <section id="schedule">
              <Services />
            </section>
            <section id="gallery">
              <Gallery />
            </section>
            <section id="location">
              <Contact />
            </section>
            <Footer />
            <Chatbot />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;