import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbots';
function App() {

  return (
    <div className="bg-[#FDFDFD] min-h-screen selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />  
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;