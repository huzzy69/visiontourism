import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const routeSteps = [
    { name: 'London Departure', details: 'Begin in England’s capital, boarding our executive minibus.' },
    { name: 'Oxford Spires', details: 'Explore historic colleges and ancient university libraries.' },
    { name: 'Manchester Northern Hub', details: 'Experience vibrant culture, music history, and northern heritage.' },
    { name: 'Lake District Lakes & Peaks', details: 'Scenic drives through England’s premier national park.' },
    { name: 'Glasgow Maritime & Arts', details: 'Crossing into Scotland’s architecture and music capital.' },
    { name: 'Edinburgh Castle Finish', details: 'Arrive at the medieval Royal Mile and famous fortress.' },
  ];

  return (
    <section className="bg-brand-blue-950 text-white py-20 relative overflow-hidden border-t border-slate-800">
      {/* Red and Navy background glow rays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Description Column (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-brand-red-500 font-bold tracking-[0.2em] text-xs uppercase block mb-1">
                Interactive Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-wide text-white">
                England to Scotland: The Ultimate Route
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4">
                Watch our private charter route unfold. Interact with the 3D map board to explore our signature overland journey connecting 6 iconic destinations across Great Britain.
              </p>
            </div>

            {/* Steps Timeline */}
            <div className="flex flex-col gap-4 border-t border-slate-800 pt-6">
              {routeSteps.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue-900 border border-brand-red-500 text-white text-xs font-bold font-serif shadow">
                      {index + 1}
                    </div>
                    {index < routeSteps.length - 1 && (
                      <div className="w-[1px] h-full bg-slate-800 mt-2" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-red-400 transition-colors duration-200 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-red-500" />
                      {step.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      {step.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-800 pt-6">
              <Link
                to="/england-scotland-4-days"
                className="flex items-center justify-center gap-2 bg-brand-red-600 hover:bg-brand-red-700 text-white font-bold px-6 py-3 rounded uppercase tracking-wider text-[10px] shadow"
              >
                <Calendar className="w-3.5 h-3.5" />
                Customize & Plan Itinerary
              </Link>
              
              <Link
                to="/book?type=custom"
                className="flex items-center justify-center gap-1 text-[10px] uppercase font-bold text-white hover:text-brand-red-400 transition-colors py-3"
              >
                Hire Minibus for Custom Tour
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Static Travel Image/Visual Placeholder (Right 7 cols) */}
          <div className="lg:col-span-7 h-[450px] relative">
            <div className="absolute inset-0 rounded overflow-hidden border border-slate-800 shadow-2xl group/image">
              {/* Background Image: Scenic UK Winding Road/Highlands */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover/image:scale-105"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop')`
                }}
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              {/* Floating Route Info Box (Glassmorphic) */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-brand-red-500 uppercase tracking-widest">
                    Signature Route Details
                  </span>
                  <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                    London to Edinburgh Overland
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    650+ miles of historic sights, national parks, and cultural hubs.
                  </p>
                </div>
                <div className="flex gap-4 border-l border-slate-800 pl-0 sm:pl-4 w-full sm:w-auto justify-between sm:justify-start">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white">4 Days</span>
                    <span className="text-[9px] text-slate-500 uppercase font-semibold">Duration</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white">6 Cities</span>
                    <span className="text-[9px] text-slate-500 uppercase font-semibold">Stops</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white">Private</span>
                    <span className="text-[9px] text-slate-500 uppercase font-semibold">Charter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
