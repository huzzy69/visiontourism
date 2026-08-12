import React from 'react';
import { vehicles } from '../data/vehicles';
import { Users, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VehicleShowcase: React.FC = () => {
  return (
    <section className="bg-brand-cream-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold-400 font-semibold tracking-[0.2em] text-xs uppercase block mb-1">
            Executive Fleet
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-green-900 font-bold">
            Minibus & Coach Hire Fleet
          </h2>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            Travel in premium comfort with our modern, executive vehicles. Fully maintained, detailed, and piloted by professional, licensed guides.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {vehicles.map((v) => (
            <div
              key={v.id}
              className="bg-white border border-brand-cream-300 rounded-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-brand-gold-400/20 transition-all duration-300 group"
            >
              {/* Image box */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={v.imageUrl}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-green-900 text-brand-gold-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border border-brand-gold-400/25">
                  {v.type}
                </div>
              </div>

              {/* Detail box */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl sm:text-2xl text-brand-green-900 font-bold mb-2.5">
                  {v.name}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {v.description}
                </p>

                {/* Logistics Badges */}
                <div className="flex gap-4 border-t border-b border-brand-cream-200 py-4 mb-6 bg-brand-cream-100/50 px-3 rounded-sm text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4.5 h-4.5 text-brand-gold-400" />
                    <span>Up to {v.capacity} Seats</span>
                  </div>
                  <div className="flex items-center gap-1.5 border-l border-brand-cream-300 pl-4">
                    <Briefcase className="w-4.5 h-4.5 text-brand-gold-400" />
                    <span>{v.luggageCapacity} Large Bags</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Key Amenities
                  </h4>
                  <ul className="flex flex-col gap-2 text-xs text-slate-600">
                    {v.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hire Action */}
                <Link
                  to={`/book?type=minibus&vehicle=${v.id}`}
                  className="flex items-center justify-center gap-2 w-full border border-brand-green-900 hover:border-transparent bg-transparent hover:bg-brand-green-600 hover:text-white text-brand-green-900 font-bold py-3.5 rounded-sm transition-all duration-300 text-xs uppercase tracking-wider mt-auto"
                >
                  Request Rental Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
