import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Promo from './components/Promo';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Schedule from './components/Schedule';
import Trainers from './components/Trainers';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import './styles.css';

function App() {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Promo />
      <Pricing onSelectPlan={handleSelectPlan} />
      <Gallery />
      <Features />
      <Schedule />
      <Trainers />
      <FAQ />
      <Contact selectedPlan={selectedPlan} />
      <Footer />
    </>
  );
}

export default App;
