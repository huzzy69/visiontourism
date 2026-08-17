import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { tours } from '../data/tours';
import { Clock, Star, MapPin, CheckCircle2, ChevronDown, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WalesNorthernIrelandTour: React.FC = () => {
  const tour = tours.find((t) => t.id === 'wales-northern-ireland-4-days');
  const [activeDay, setActiveDay] = useState<number | null>(1);

  if (!tour) {
    return <div className="py-24 text-center">Tour detail not found.</div>;
  }

  const toggleDay = (day: number) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const inclusions = [
    'Private executive minibus travel with climate control',
    'Professional driver-guide with local Celtic heritage expertise',
    '3 Nights accommodation in highly-rated 3/4-star hotels',
    'Daily breakfast included at hotels',
    'Titanic Belfast & Giant’s Causeway entry vouchers',
    'Ferry crossing over the Irish Sea included'
  ];

  return (
    <div className="pt-20 pb-16">
      <PageHeader
        title={tour.title}
        subtitle="A journey through historic castles, rolling Welsh valleys, and the dramatic coastline of Northern Ireland."
        bgImageUrl={tour.imageUrl}
        breadcrumbs={[{ name: 'Wales & Northern Ireland Tour' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Details (Left 2/3) */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Overview */}
            <div>
              <span className="text-brand-gold-400 font-semibold tracking-[0.2em] text-xs uppercase block mb-1">
                Signature Journey
              </span>
              <h2 className="font-serif text-3xl text-brand-green-900 font-bold mb-4">
                Tour Overview & Highlights
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {tour.longDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-brand-cream-300 py-6 my-6 bg-brand-cream-100/50 px-4 rounded-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-100 text-brand-green-900">
                    <Clock className="w-5 h-5 text-brand-green-500" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block uppercase font-medium">Duration</span>
                    <span className="text-sm font-bold text-brand-green-900">{tour.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-100 text-brand-green-900">
                    <Star className="w-5 h-5 text-brand-gold-400 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block uppercase font-medium">Rating</span>
                    <span className="text-sm font-bold text-brand-green-900">{tour.rating} / 5 ({tour.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h3 className="font-serif text-2xl text-brand-green-900 font-bold mb-6">
                Day-by-Day Itinerary
              </h3>
              <div className="flex flex-col gap-4">
                {tour.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="border border-brand-cream-300 rounded-sm overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggleDay(day.day)}
                      className="w-full flex items-center justify-between p-5 text-left bg-brand-cream-100 hover:bg-brand-cream-200/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-900 text-brand-gold-400 font-serif font-bold text-lg">
                          {day.day}
                        </div>
                        <div>
                          <span className="text-xs text-brand-gold-500 uppercase tracking-wider block font-semibold">Day {day.day}</span>
                          <h4 className="font-serif text-base sm:text-lg text-brand-green-900 font-bold leading-tight">
                            {day.title}
                          </h4>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${activeDay === day.day ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    {activeDay === day.day && (
                      <div className="p-6 border-t border-brand-cream-200">
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {day.description}
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          {day.stops.map((stop, sIdx) => (
                            <span
                              key={sIdx}
                              className="inline-flex items-center gap-1.5 bg-brand-green-100 text-brand-green-900 px-3 py-1 rounded-sm text-xs font-semibold"
                            >
                              <MapPin className="w-3.5 h-3.5 text-brand-gold-400" />
                              {stop}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Summary Card Sidebar (Right 1/3) */}
          <div className="lg:col-span-1">
            <div className="bg-brand-green-900 text-black p-6 sm:p-8 rounded-sm shadow-xl sticky top-28 border border-brand-gold-400/20">
              <span className="text-xs tracking-[0.2em] font-semibold text-brand-gold-400 uppercase block mb-2">
                Private Charter
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-serif font-bold text-brand-gold-400 uppercase tracking-wider">Enquire Now</span>
              </div>
              <p className="text-xs text-white/50 mb-6 leading-relaxed">
                Complete minibus charter and customized itinerary options are available on request.
              </p>

              {/* What's Included */}
              <div className="border-t border-white/10 pt-6 mb-8">
                <h4 className="text-xs font-bold text-brand-gold-400 uppercase tracking-widest mb-4">
                  What’s Included
                </h4>
                <ul className="flex flex-col gap-3 text-black/80">
                  {inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <Link
                  to={`/book?tour=${tour.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 hover:from-brand-gold-500 hover:to-brand-gold-600 text-brand-green-900 font-bold py-3.5 transition-all duration-300 rounded-sm text-xs uppercase tracking-wider"
                >
                  <Calendar className="w-4 h-4" />
                  Customize & Book
                </Link>
                <Link
                  to={`/contact?inquiry=${tour.id}`}
                  className="flex items-center justify-center w-full border border-white/20 hover:border-brand-gold-400 text-white font-semibold py-3.5 transition-colors duration-300 rounded-sm text-xs uppercase tracking-wider"
                >
                  Ask A Question
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
