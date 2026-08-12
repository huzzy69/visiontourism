import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { tours } from '../data/tours';
import { Clock, Tag, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OneDayTrips: React.FC = () => {
  // Filter for 1-day tours
  const oneDayTours = tours.filter((tour) => tour.type === '1-day');

  return (
    <div className="pt-20 pb-16">
      <PageHeader
        title="1-Day Sightseeing Trips"
        subtitle="Unforgettable short-duration day trips departing from London. Explore England's most famous historic sites in luxury."
        bgImageUrl="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=1600&auto=format&fit=crop"
        breadcrumbs={[{ name: '1-Day Trips' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold-400 font-semibold tracking-[0.2em] text-xs uppercase">
            Day Excursions
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-green-900 font-bold mt-2">
            Curated Short Getaways
          </h2>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            Our day trips are designed for guests seeking to explore iconic historic attractions and gorgeous English countryside outside London, returning on the same evening.
          </p>
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {oneDayTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-sm overflow-hidden border border-brand-cream-300 hover:border-brand-gold-400/40 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  src={tour.imageUrl}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex items-center gap-1.5 bg-brand-gold-400 text-brand-green-900 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{tour.rating}</span>
                  </div>
                  <div className="text-white text-right">
                    <span className="text-xs text-white/70 block uppercase tracking-wider">From</span>
                    <span className="text-2xl font-bold font-serif text-brand-gold-400">£{tour.priceFrom}</span>
                  </div>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand-gold-400" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-brand-gold-400" />
                    Day Trip
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-brand-green-900 font-bold group-hover:text-brand-gold-400 transition-colors duration-300 mb-4">
                  {tour.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {tour.description}
                </p>

                {/* Highlights Summary */}
                <div className="border-t border-brand-cream-200 pt-5 mb-6">
                  <h4 className="text-xs font-bold text-brand-green-900 uppercase tracking-widest mb-3">
                    Trip Highlights
                  </h4>
                  <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
                    {tour.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-400 mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Link */}
                <Link
                  to={`/book?tour=${tour.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-brand-green-900 hover:bg-brand-green-600 text-white font-bold py-3.5 transition-all duration-300 rounded-sm text-xs uppercase tracking-wider mt-auto"
                >
                  Request Booking Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
