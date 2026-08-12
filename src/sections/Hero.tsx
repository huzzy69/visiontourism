import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-brand-green-950">
      {/* Background Image backdrop with high-end overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[12000ms] scale-105 hover:scale-100 opacity-35"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop')`,
        }}
      />
      
      {/* Cinematic dark gradients to mask contents and header */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-900 via-brand-green-900/40 to-brand-green-900/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-950/70 via-transparent to-brand-dark-900" />
      
      {/* Accent light ray */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-gold-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 mt-16">
        
        {/* Animated Subtitle Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 bg-brand-gold-400/10 text-brand-gold-400 border border-brand-gold-400/25 px-4.5 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase shadow-sm"
        >
          <Compass className="w-4 h-4 text-brand-gold-400 animate-spin-slow" />
          <span>Premium UK Group Tours & Rentals</span>
        </motion.div>

        {/* Big Cinematic Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-wide leading-[1.1] max-w-4xl"
        >
          Explore the UK.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-400 to-brand-gold-300">
            Travel Together.
          </span><br />
          Make Memories.
        </motion.h1>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="text-white/90 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-2xl mt-2 leading-relaxed"
        >
          Luxury minibus charters and private group road trips from England to Scotland. Crafted itineraries, professional driver-guides, and unmatched British hospitality.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto"
        >
          <Link
            to="/book"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 hover:from-brand-gold-500 hover:to-brand-gold-600 text-brand-green-900 font-bold px-8 py-4 rounded-sm shadow-xl hover:shadow-brand-gold-400/20 transition-all duration-300 w-full sm:w-64 uppercase tracking-wider text-xs hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            Book Private Charter
          </Link>
          
          <Link
            to="/england-scotland-4-days"
            className="flex items-center justify-center border border-white/20 hover:border-brand-gold-400 text-white bg-white/5 hover:bg-white/10 font-bold px-8 py-4 rounded-sm transition-all duration-300 w-full sm:w-64 uppercase tracking-wider text-xs hover:-translate-y-0.5"
          >
            Explore 4-Day Tour
          </Link>
        </motion.div>
      </div>

      {/* Elegant Bottom Curve Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-dark-900 to-transparent pointer-events-none" />
    </section>
  );
};
