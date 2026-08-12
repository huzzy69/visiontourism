import React from 'react';
import { ThreeCanvas } from '../three/ThreeCanvas';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const routeSteps = [
    { name: 'London Departure', details: 'Begin in the historic capital, boarding our executive minibus.' },
    { name: 'The Cotswolds', details: 'Winding through honey-stone villages and rolling green hills.' },
    { name: 'Lake District National Park', details: 'Taking in England’s premier lakes and mountain peaks.' },
    { name: 'Edinburgh Royal Mile', details: 'Crossing the border into Scotland’s majestic medieval capital.' },
    { name: 'Scottish Highlands', details: 'Deep into rugged glens, Loch Ness, and dramatic mountains.' },
  ];

  return (
    <section className="bg-brand-dark-900 text-white py-20 relative overflow-hidden border-t border-brand-green-800/20">
      {/* Background ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green-800/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold-400/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Description Column (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-brand-gold-400 font-semibold tracking-[0.2em] text-xs uppercase block mb-1">
                Interactive Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
                England to Scotland: A Grand Overland Route
              </h2>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mt-4">
                Watch the route unfold. Click and rotate the 3D map board on the right to examine our signature journey connecting the cultural highlights of Great Britain.
              </p>
            </div>

            {/* Steps Timeline */}
            <div className="flex flex-col gap-5 border-t border-white/10 pt-6">
              {routeSteps.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-green-900 border border-brand-gold-400/40 text-brand-gold-400 text-xs font-bold font-serif">
                      {index + 1}
                    </div>
                    {index < routeSteps.length - 1 && (
                      <div className="w-[1px] h-full bg-white/15 mt-2" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-brand-gold-400 transition-colors duration-200">
                      {step.name}
                    </h4>
                    <p className="text-[11px] text-white/50 leading-relaxed mt-1">
                      {step.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 border-t border-white/10 pt-6">
              <Link
                to="/england-scotland-4-days"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 hover:from-brand-gold-500 hover:to-brand-gold-600 text-brand-green-900 font-bold px-6 py-3 rounded-sm uppercase tracking-wider text-[10px]"
              >
                <Calendar className="w-3.5 h-3.5" />
                Customize & Plan Itinerary
              </Link>
              
              <Link
                to="/book?type=custom"
                className="flex items-center justify-center gap-1 text-[10px] uppercase font-bold text-white hover:text-brand-gold-400 transition-colors py-3"
              >
                Hire Minibus for Custom Tour
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 3D WebGL Map Column (Right 7 cols) */}
          <div className="lg:col-span-7 h-[450px] relative">
            <div className="absolute inset-0 bg-brand-dark-950/40 border border-brand-gold-400/10 rounded-sm overflow-hidden shadow-2xl flex flex-col justify-between">
              <ThreeCanvas />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
