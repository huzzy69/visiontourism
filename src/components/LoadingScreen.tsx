import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShouldRender(false), 800);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(true);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-green-900 text-white"
        >
          {/* Ambient light glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.15)_0%,transparent_60%)]" />

          <div className="relative flex flex-col items-center">
            {/* Elegant Brand Logo mark (Procedural SVG) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-8 flex items-center justify-center"
            >
              <svg className="w-16 h-16 text-brand-gold-400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Compass ring */}
                <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                {/* Dial points */}
                <polygon points="50,15 57,43 50,50" fill="currentColor" />
                <polygon points="50,15 43,43 50,50" fill="rgba(197,168,128,0.7)" />
                <polygon points="50,85 43,57 50,50" fill="currentColor" opacity="0.8" />
                <polygon points="50,85 57,57 50,50" fill="rgba(197,168,128,0.7)" opacity="0.8" />
                <polygon points="85,50 57,43 50,50" fill="currentColor" opacity="0.9" />
                <polygon points="85,50 57,57 50,50" fill="rgba(197,168,128,0.7)" opacity="0.9" />
                <polygon points="15,50 43,57 50,50" fill="currentColor" opacity="0.7" />
                <polygon points="15,50 43,43 50,50" fill="rgba(197,168,128,0.7)" opacity="0.7" />
                {/* Center node */}
                <circle cx="50" cy="50" r="4" fill="#092E20" stroke="currentColor" strokeWidth="2" />
              </svg>
            </motion.div>

            {/* Typography */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-serif text-3xl md:text-4xl tracking-widest text-brand-gold-400 uppercase text-center"
            >
              Maps Tours
            </motion.h1>
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xs md:text-sm tracking-[0.25em] uppercase text-white mt-2"
            >
              & Rental • United Kingdom
            </motion.p>

            {/* Progress line indicator */}
            <div className="w-48 h-[1px] bg-white/10 mt-8 overflow-hidden relative rounded-full">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'easeInOut',
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-brand-gold-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
