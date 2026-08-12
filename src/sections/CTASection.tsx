import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-brand-green-900 text-white py-20 relative overflow-hidden border-t border-brand-gold-400/20">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-white/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center gap-6">
        <span className="text-brand-gold-400 font-semibold tracking-[0.25em] text-xs uppercase">
          Plan Your Adventure
        </span>
        
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide leading-tight">
          Ready to Travel the UK in Luxury?
        </h2>
        
        <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl">
          Reserve an executive minibus with a dedicated local driver, book a scheduled day excursion, or request a custom multi-day itinerary.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <Link
            to="/book"
            className="flex items-center justify-center gap-2 bg-brand-gold-400 hover:bg-brand-gold-500 text-brand-green-900 font-bold px-8 py-3.5 rounded-sm transition-all duration-300 w-full sm:w-56 uppercase tracking-wider text-xs shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </Link>
          
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 border border-white/20 hover:border-brand-gold-400 hover:bg-white/5 text-white font-semibold px-8 py-3.5 rounded-sm transition-colors duration-300 w-full sm:w-56 uppercase tracking-wider text-xs"
          >
            <Phone className="w-4 h-4 text-brand-gold-400" />
            Contact Advisor
          </Link>
        </div>
      </div>
    </section>
  );
};
