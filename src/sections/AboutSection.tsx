import React from 'react';
import { Compass, Milestone, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-20 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Visual Collages panel */}
          <div className="relative flex justify-center items-center">
            {/* Main Image */}
            <div className="w-[85%] aspect-[4/3] rounded overflow-hidden shadow-2xl border-4 border-white z-10 relative">
              <img
                src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=1000&auto=format&fit=crop"
                alt="Highlands scenery"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping secondary image */}
            <div className="absolute -bottom-6 -left-4 w-[50%] aspect-[3/4] rounded overflow-hidden shadow-2xl border-4 border-white z-20 hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1543872084-c7bd3822856f?q=80&w=600&auto=format&fit=crop"
                alt="Cotswolds street"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Accent Red/Navy swoosh box behind */}
            <div className="absolute -top-6 -right-4 w-[40%] h-[80%] bg-brand-red-600/10 rounded pointer-events-none z-0" />
          </div>

          {/* Text Story panel */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-brand-red-600 font-bold tracking-[0.2em] text-xs uppercase block mb-1">
                Heritage & Standards
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-blue-900 font-extrabold tracking-wide">
                Bespoke UK Journeys Crafted by Experts
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Vision Tourism ([visiontourism.uk]), we believe that group travel should be seamless, spacious, and enriched with local insight. From our base in London, we coordinate premium private group tours and minibus hire across Great Britain.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you are scheduling the signature 4-day overland expedition from London to Edinburgh and the Scottish Highlands, or organizing airport transfers and wedding logistics, our fleet of executive vehicles and knowledgeable drivers deliver unmatched service.
            </p>

            {/* List of Accredited Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200 pt-6 mt-2">
              <div className="flex gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-red-600 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-brand-blue-900">Safety First</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Licensed operators</span>
                </div>
              </div>
              <div className="flex gap-2.5">
                <Compass className="w-5 h-5 text-brand-red-600 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-brand-blue-900">Local Guides</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Rich storytelling</span>
                </div>
              </div>
              <div className="flex gap-2.5">
                <Milestone className="w-5 h-5 text-brand-red-600 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-brand-blue-900">Flexibility</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Bespoke itineraries</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
