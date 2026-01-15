import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Ghost, ShieldAlert, Loader2 } from "lucide-react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING X-CORE...");

  const statusMessages = [
    "INITIALIZING X-CORE...",
    "CALIBRATING SENSORS...",
    "RELEASING ENTITIES...",
    "SYNCING YOUR FEAR...",
    "SYSTEM READY."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000); // Tunggu 1 detik setelah 100% baru hilang
          return 100;
        }
        return old + 1;
      });
    }, 40);

    // Update status text based on progress
    const statusIndex = Math.min(
      Math.floor((progress / 100) * statusMessages.length),
      statusMessages.length - 1
    );
    setStatus(statusMessages[statusIndex]);

    return () => clearInterval(timer);
  }, [progress, onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], x: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 0.1 }}
          className="w-full h-full bg-orange-600/5 blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-md text-center">
        {/* Icon Ghost Tengah */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.1, 1], opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative">
            <Ghost size={80} className="text-orange-600 drop-shadow-[0_0_20px_rgba(255,95,0,0.5)]" />
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="absolute inset-0 text-white"
            >
              <Ghost size={80} />
            </motion.div>
          </div>
        </motion.div>

        {/* Warning Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 text-orange-600 mb-2">
            <ShieldAlert size={16} className="animate-pulse" />
            <span className="font-black text-[10px] tracking-[0.5em] uppercase">Security Warning</span>
          </div>
          <h2 className="text-white font-black italic text-3xl md:text-4xl uppercase tracking-tighter">
            ARE YOU <span className="text-transparent" style={{ WebkitTextStroke: '1px #FF5F00' }}>READY?</span>
          </h2>
        </motion.div>

        {/* Loading Bar */}
        <div className="relative h-[2px] w-full bg-zinc-900 overflow-hidden mb-4">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-orange-600"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text */}
        <div className="flex justify-between items-center text-zinc-600 font-black text-[9px] tracking-widest uppercase">
          <motion.span key={status} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {status}
          </motion.span>
          <span>{progress}%</span>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="absolute bottom-10 text-white text-[8px] text-center uppercase tracking-[1em] font-medium"
      >
        Indonesia's #1 Immersive Entertainment
      </motion.p>
    </motion.div>
  );
};

export default Preloader;