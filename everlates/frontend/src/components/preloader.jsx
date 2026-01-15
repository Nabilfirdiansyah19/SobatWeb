import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Preparing your space...");

  const statusMessages = [
    "Preparing your space...",
    "Aligning body & mind...",
    "Setting up reformers...",
    "Almost ready...",
    "Welcome to Everlates"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); 
          return 100;
        }
        return old + 1;
      });
    }, 30);

    const statusIndex = Math.min(
      Math.floor((progress / 100) * statusMessages.length),
      statusMessages.length - 1
    );
    setStatus(statusMessages[statusIndex]);

    return () => clearInterval(timer);
  }, [progress, onComplete]);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] bg-[#FDFCFB] flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      <div className="w-full max-w-xs text-center">
        {/* Logo/Brand Animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-[#5D4037] font-serif italic text-4xl tracking-tighter mb-2">
            Ever<span className="text-[#8D6E63] font-normal">lates</span>
          </h2>
          <div className="h-[1px] w-12 bg-[#8D6E63]/30 mx-auto" />
        </motion.div>

        {/* Circular Progress (Minimalist) */}
        <div className="relative w-20 h-20 mx-auto mb-8 flex items-center justify-center">
          <svg className="w-full h-full rotate-[-90deg]">
            <circle
              cx="40"
              cy="40"
              r="38"
              stroke="#D7CCC8"
              strokeWidth="2"
              fill="transparent"
              className="opacity-20"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="38"
              stroke="#8D6E63"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="240"
              animate={{ strokeDashoffset: 240 - (240 * progress) / 100 }}
              transition={{ ease: "linear" }}
            />
          </svg>
          <span className="absolute text-[10px] font-medium text-[#8D6E63] tracking-widest">
            {progress}%
          </span>
        </div>

        {/* Status Text */}
        <div className="overflow-hidden h-5">
          <motion.p 
            key={status}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="text-[#8D6E63] text-[10px] uppercase tracking-[0.3em] font-medium"
          >
            {status}
          </motion.p>
        </div>
      </div>

      {/* Aesthetic Background Decoration */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#D7CCC8]/20 rounded-full blur-[100px] -z-10"
      />
    </motion.div>
  );
};

export default Preloader;