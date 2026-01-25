import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbots';
import Schedule from './components/Schedule';

function App() {
  return (
    <div className="bg-white text-slate-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Schedule />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;