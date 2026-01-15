import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbots';
import Preloader from './components/Preloader';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Contact />
            <Footer />
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default App;