import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-brand-blue-950 text-white py-20 relative overflow-hidden border-t border-slate-800">
      {/* Background swoosh radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12)_0%,transparent_60%)] pointer-events-none" />

      {/* Decorative vertical grid lines */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-slate-800/40 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-slate-800/40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center gap-6">
        <span className="text-brand-red-500 font-bold tracking-[0.25em] text-xs uppercase">
          Plan Your Adventure
        </span>
        
        <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-wide leading-tight text-white">
          Ready to Travel the UK in Luxury?
        </h2>
        
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
          Reserve an executive minibus with a dedicated local driver, book a scheduled day excursion, or request a custom multi-day itinerary.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          {/* Primary CTA: Red */}
          <Link
            to="/book"
            className="flex items-center justify-center gap-2 bg-brand-red-600 hover:bg-brand-red-700 text-white font-bold px-8 py-4 rounded transition-all duration-300 w-full sm:w-56 uppercase tracking-wider text-xs shadow-lg hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </Link>
          
          {/* Secondary CTA: White Outline */}
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-brand-blue-950 text-white font-bold px-8 py-4 rounded transition-colors duration-300 w-full sm:w-56 uppercase tracking-wider text-xs hover:-translate-y-0.5 shadow-sm"
          >
            <Phone className="w-4 h-4" />
            Contact Advisor
          </Link>
        </div>
      </div>
    </section>
  );
};
