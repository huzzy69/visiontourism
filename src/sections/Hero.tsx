import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Calendar, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { ThreeCanvas } from '../three/ThreeCanvas';
import { useScrollPosition } from '../hooks/useScrollPosition';

export const Hero: React.FC = () => {
  const scrollY = useScrollPosition();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeRoute, setActiveRoute] = useState<'england-scotland' | 'northern-ireland-wales'>('england-scotland');

  useEffect(() => {
    const progress = Math.min(Math.max(scrollY / 750, 0), 1);
    setScrollProgress(progress);
  }, [scrollY]);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white text-slate-900">
      {/* Light neutral background with subtle logo swoosh shape graphics */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a04_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Red & Blue swoosh gradient light rays */}
      <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-brand-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-brand-blue-900/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 bg-brand-red-50 border border-brand-red-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase shadow-sm w-fit text-brand-red-600"
            >
              <Compass className="w-4 h-4 text-brand-red-600" />
              <span>Official UK Travel & Rental</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-900 inline-block ml-1" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-brand-blue-900"
            >
              Explore the UK.<br />
              <span className="text-brand-red-600">
                Travel Together.
              </span><br />
              Make Memories.
            </motion.h1>

            {/* Route Selection Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="flex flex-wrap gap-2.5 my-1"
            >
              <button
                onClick={() => setActiveRoute('england-scotland')}
                className={`px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 border ${
                  activeRoute === 'england-scotland'
                    ? 'bg-brand-blue-900 border-brand-blue-900 text-white shadow-md'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-brand-blue-900'
                }`}
              >
                England to Scotland Tour
              </button>
              <button
                onClick={() => setActiveRoute('northern-ireland-wales')}
                className={`px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 border ${
                  activeRoute === 'northern-ireland-wales'
                    ? 'bg-brand-blue-900 border-brand-blue-900 text-white shadow-md'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-brand-blue-900'
                }`}
              >
                Northern Ireland to Wales Tour
              </button>
            </motion.div>

            {/* Supporting Subtitle */}
            <motion.p
              key={activeRoute}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-lg min-h-[72px]"
            >
              {activeRoute === 'england-scotland'
                ? 'Curated overland travel from London through Oxford, Manchester, the Lake District, Glasgow, and Edinburgh. Executive minibus charters with professional driver-guides.'
                : 'Discover the beauty of Northern Ireland and Wales. Cross the Irish Sea, visit Titanic Belfast, the Giant’s Causeway, Snowdonia National Park, and historic Cardiff.'}
            </motion.p>

            {/* City Stops Quick List */}
            <motion.div
              key={`stops-${activeRoute}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 text-[11px] uppercase font-bold text-slate-500 tracking-wider"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-red-600" />
              {activeRoute === 'england-scotland' ? (
                <>
                  <span className="text-brand-blue-900">London</span>
                  <span>•</span>
                  <span className="text-brand-blue-900">Oxford</span>
                  <span>•</span>
                  <span className="text-brand-blue-900">Manchester</span>
                  <span>•</span>
                  <span className="text-brand-blue-900">Lake District</span>
                  <span>•</span>
                  <span className="text-brand-blue-900">Glasgow</span>
                  <span>•</span>
                  <span className="text-brand-blue-900">Edinburgh</span>
                </>
              ) : (
                <>
                  <span className="text-brand-blue-900">Belfast</span>
                  <span>•</span>
                  <span className="text-brand-blue-900">Giant’s Causeway</span>
                  <span>•</span>
                  <span className="text-brand-blue-900">Holyhead</span>
                  <span>•</span>
                  <span className="text-brand-blue-900">Snowdonia</span>
                  <span>•</span>
                  <span className="text-brand-blue-900">Cardiff</span>
                </>
              )}
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-2"
            >
              {/* Primary CTA: Navy background, turns Red on hover */}
              <Link
                to="/book"
                className="flex items-center justify-center gap-2 bg-brand-blue-900 hover:bg-brand-red-600 text-white font-bold px-7 py-3.5 rounded shadow-md transition-all duration-300 w-full sm:w-auto uppercase tracking-wider text-xs hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-white" />
                Book Private Charter
              </Link>
              
              {/* Secondary CTA: Red border, turns Red on hover */}
              <Link
                to={activeRoute === 'england-scotland' ? '/england-scotland-4-days' : '/northern-ireland-to-wales'}
                className="flex items-center justify-center gap-2 border-2 border-brand-red-600 text-brand-red-600 hover:bg-brand-red-600 hover:text-white font-bold px-7 py-3.5 rounded transition-all duration-300 w-full sm:w-auto uppercase tracking-wider text-xs hover:-translate-y-0.5 shadow-sm"
              >
                <span>Explore Route</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Operator Accreditation */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mt-2">
              <ShieldCheck className="w-4.5 h-4.5 text-brand-blue-900" />
              <span>Licensed UK Private Hire Operator</span>
            </div>
          </div>

          {/* Right Column: 3D UK Map Canvas (7 cols) */}
          <div className="lg:col-span-7 h-[460px] lg:h-[540px] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-full h-full relative"
            >
              <ThreeCanvas scrollProgress={scrollProgress} activeRoute={activeRoute} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
