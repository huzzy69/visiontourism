import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      author: 'Marcus Vance',
      origin: 'Corporate Group Travel, USA',
      text: 'The 16-seater Mercedes Sprinter was spotless and incredibly comfortable for our 4-day trip from London to Edinburgh. Our driver was incredibly knowledgeable, pointing out historical details that made the trip memorable.',
      rating: 5,
      trip: 'England to Scotland in 4 Days Tour',
    },
    {
      author: 'Evelyn & Family',
      origin: 'Private Hire, Australia',
      text: 'Booking a private tour through Cotswold villages was the highlight of our UK vacation. Maps Tours tailored the stops, allowing us to spend extra time taking photos at Castle Combe. Outstanding service!',
      rating: 5,
      trip: 'Oxford & Cotswolds Village Excursion',
    },
    {
      author: 'David Sterling',
      origin: 'Event Coordinator, UK',
      text: 'Used their coach rental services for wedding guest transport. Absolute professionalism, punctuality, and clear communications. They simplified the entire coordinate logistics. Highly recommend mapstours.co.uk.',
      rating: 5,
      trip: 'Private Event Transportation',
    },
  ];

  return (
    <section className="bg-brand-cream-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold-400 font-semibold tracking-[0.2em] text-xs uppercase block mb-1">
            Guest Feedback
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-green-900 font-bold">
            What Our Travelers Say
          </h2>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            We are dedicated to providing excellent hospitality. Read reviews from guest groups, corporate teams, and families.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-cream-300 p-8 rounded-sm shadow-sm relative flex flex-col justify-between group hover:shadow-xl hover:border-brand-gold-400/20 transition-all duration-300"
            >
              {/* Quote Mark */}
              <Quote className="w-10 h-10 text-brand-cream-300 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-6 text-brand-gold-400">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed mb-6 relative z-10">
                  "{r.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-brand-cream-200 pt-5 flex flex-col">
                <span className="font-serif text-sm font-bold text-brand-green-900">
                  {r.author}
                </span>
                <span className="text-[10px] text-brand-gold-500 font-medium uppercase mt-0.5">
                  {r.origin}
                </span>
                <span className="text-[9px] text-slate-400 mt-2 block font-medium">
                  Trip: {r.trip}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
