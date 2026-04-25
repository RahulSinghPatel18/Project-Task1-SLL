// src/components/Loader.jsx  (या जहाँ रखना हो)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle, Send, Phone, Camera, Mic, Paperclip,
  Clock, CheckCircle2, CheckCheck, Users, Smile, Image,
  Video, FileText, Music, Globe, Wifi, Lock
} from 'lucide-react';

// WhatsApp vibe वाले icons (chat, message, media, status related)
const whatsappIcons = [
  MessageCircle, Send, Phone, Camera, Mic, Paperclip,
  Clock, CheckCircle2, CheckCheck, Users, Smile, Image,
  Video, FileText, Music, Globe, Wifi, Lock
];

function Loader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // fade out start

      setTimeout(() => {
        // random icon (current से different)
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * whatsappIcons.length);
        } while (nextIndex === currentIndex);

        setCurrentIndex(nextIndex);
        setIsVisible(true); // fade in
      }, 500); // transition duration match
    }, 1400); // change हर ~1.4 सेकंड में (smooth feel के लिए)

    return () => clearInterval(interval);
  }, [currentIndex]);

  const CurrentIcon = whatsappIcons[currentIndex];

  return (
    <div className="fixed inset-0  bg-gray-950  flex flex-col items-center justify-center z-50">
    
      <div className="relative">
        {/* Outer subtle rotating ring (WhatsApp green tint) */}
        <div className="absolute -inset-10 rounded-full border-2 border-green-500/30 border-t-teal-400/40 animate-spin-slow opacity-50" />

        {/* Main glassmorphic card (WhatsApp chat bubble feel) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`
            w-16 h-16 sm:w-24 sm:h-24
            rounded-3xl
            flex items-center justify-center
            overflow-hidden
            relative
            before:content-[''] before:absolute before:inset-0
            before:bg-gradient-to-br before:from-green-500/10 before:to-teal-500/5 before:pointer-events-none
          `}
        >
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.7, rotate: 10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="z-10"
              >
                <CurrentIcon
                  size={50}
                  className="text-green-500 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]"
                  strokeWidth={1.7}
                />
              </motion.div>
              
            )}
          </AnimatePresence>
        </motion.div>

        {/* Slow pulse ring (breathing effect) */}
        <div className="absolute inset-[-1.5rem] rounded-full bg-green-600/10 animate-pulse-slow opacity-60 pointer-events-none" />
      </div>

      
    </div>
  );
}

export default Loader;