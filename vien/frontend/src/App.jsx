import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BackgroundJourney from './components/BackgroundJourney';
import MaterialSoul from './components/MaterialSoul';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbots';
import PreLoader from './components/PreLoader';
import CustomCursor from './components/CustomCursor';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // tunggu PreLoader selesai
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
   <div>
      <AnimatePresence>
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <CustomCursor /> 
      <main className="bg-[#FDFBF7]">
        <BackgroundJourney />
        <Navbar />
        <Hero />
        <About />
        <Process />
        <MaterialSoul />
        <Gallery />
        <Contact />
        <Footer />
        <Chatbot isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;