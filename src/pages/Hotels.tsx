import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Calendar, Search, MapPin, Loader2, Info, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hotels: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [isSearching, setIsSearching] = useState(false);
  const [searchStatus, setSearchStatus] = useState<'idle' | 'searching' | 'completed'>('idle');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setSearchStatus('searching');
    
    // Simulate lookup delay
    setTimeout(() => {
      setIsSearching(false);
      setSearchStatus('completed');
    }, 1800);
  };

  const partners = [
    {
      city: 'London',
      hotel: 'The Resident Covent Garden',
      desc: 'Highly rated boutique hotel located in the heart of London’s West End, offering premium comfort and luxury amenities.'
    },
    {
      city: 'Edinburgh',
      hotel: 'Apex City of Edinburgh Hotel',
      desc: 'Superb 4-star lodging situated on the historic Grassmarket, boasting direct castle views and modern styling.'
    },
    {
      city: 'Belfast',
      hotel: 'The Fitzwilliam Hotel Belfast',
      desc: '5-star contemporary luxury hotel next to the Grand Opera House, featuring chic styling and impeccable service.'
    },
    {
      city: 'Cardiff',
      hotel: 'Hotel Indigo Cardiff',
      desc: 'Boutique hotel in Cardiff city center reflecting the vibrant Welsh heritage with unique themed luxury bedrooms.'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <PageHeader
        title="FIND YOUR PERFECT STAY"
        subtitle="Discover comfortable hotels for your UK journey with Vision Tourism."
        bgImageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop"
        breadcrumbs={[{ name: 'Hotels' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Search Form Panel (Left 2/3) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-white border border-brand-neutral-300 p-8 sm:p-10 rounded-sm shadow-md">
              <span className="text-brand-red-600 font-bold tracking-[0.2em] text-xs uppercase block mb-1">
                Accommodation Search
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-blue-900 font-bold mb-6">
                Search Partner Hotels
              </h2>

              {searchStatus === 'completed' ? (
                <div className="bg-brand-neutral-100 border border-brand-neutral-300 p-6 sm:p-8 rounded-sm text-center py-10 flex flex-col items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-100 text-brand-blue-900 mb-2">
                    <Info className="w-6 h-6 text-brand-blue-600" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-brand-blue-900">
                    Integration in Progress
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                    Real-time hotel booking is currently in preparation. Our travel coordinators can arrange premium partner accommodations for you directly as part of a custom charter itinerary.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full justify-center">
                    <Link
                      to="/book?type=tour"
                      className="bg-brand-blue-900 hover:bg-brand-red-600 text-white font-bold px-6 py-3 transition-colors rounded-sm text-xs uppercase tracking-wider text-center"
                    >
                      Plan Custom Journey
                    </Link>
                    <button
                      onClick={() => setSearchStatus('idle')}
                      className="border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold px-6 py-3 transition-colors rounded-sm text-xs uppercase tracking-wider text-center"
                    >
                      Modify Search Criteria
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Destination */}
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="hotel-destination" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-red-600" />
                      Destination City
                    </label>
                    <select
                      id="hotel-destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      required
                      className="bg-brand-neutral-50 border border-brand-neutral-300 focus:border-brand-red-600 p-3 rounded text-xs text-brand-blue-900 outline-none w-full cursor-pointer transition-colors"
                    >
                      <option value="">Select a Destination...</option>
                      <option value="london">London, England</option>
                      <option value="oxford">Oxford, England</option>
                      <option value="manchester">Manchester, England</option>
                      <option value="lake-district">Lake District, England</option>
                      <option value="glasgow">Glasgow, Scotland</option>
                      <option value="edinburgh">Edinburgh, Scotland</option>
                      <option value="belfast">Belfast, Northern Ireland</option>
                      <option value="cardiff">Cardiff, Wales</option>
                    </select>
                  </div>

                  {/* Check-In */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="hotel-checkin" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-red-600" />
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      id="hotel-checkin"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      required
                      className="bg-brand-neutral-50 border border-brand-neutral-300 focus:border-brand-red-600 p-3 rounded text-xs text-brand-blue-900 outline-none w-full cursor-pointer transition-colors"
                    />
                  </div>

                  {/* Check-Out */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="hotel-checkout" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-red-600" />
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      id="hotel-checkout"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      className="bg-brand-neutral-50 border border-brand-neutral-300 focus:border-brand-red-600 p-3 rounded text-xs text-brand-blue-900 outline-none w-full cursor-pointer transition-colors"
                    />
                  </div>

                  {/* Rooms / Guests */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="hotel-guests" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-brand-red-600" />
                      Rooms & Guests
                    </label>
                    <select
                      id="hotel-guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="bg-brand-neutral-50 border border-brand-neutral-300 focus:border-brand-red-600 p-3 rounded text-xs text-brand-blue-900 outline-none w-full cursor-pointer transition-colors"
                    >
                      <option value="1">1 Guest, 1 Room</option>
                      <option value="2">2 Guests, 1 Room</option>
                      <option value="3">3 Guests, 1 Room</option>
                      <option value="4">4 Guests, 2 Rooms</option>
                      <option value="group">Large Group / Multiple Rooms</option>
                    </select>
                  </div>

                  {/* Submit CTA */}
                  <div className="flex items-end">
                    <button
                      type="submit"
                      disabled={isSearching}
                      className="flex items-center justify-center gap-2 w-full bg-brand-blue-900 hover:bg-brand-red-600 text-white font-bold p-3.5 transition-colors rounded-sm text-xs uppercase tracking-wider disabled:bg-slate-400"
                    >
                      {isSearching ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Searching...</span>
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4 text-white" />
                          <span>FIND HOTELS</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Handpicked Partners Info */}
            <div className="flex flex-col gap-5">
              <h3 className="font-serif text-xl sm:text-2xl text-brand-blue-900 font-bold">
                Featured Partner Accommodations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {partners.map((p, idx) => (
                  <div key={idx} className="bg-white border border-brand-neutral-300 p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-[10px] font-bold text-brand-red-600 uppercase tracking-widest block mb-1">
                      {p.city} Partner
                    </span>
                    <h4 className="font-serif text-lg font-bold text-brand-blue-900 mb-2">
                      {p.hotel}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enquire Sidebar (Right 1/3) */}
          <div className="lg:col-span-1">
            <div className="bg-brand-blue-900 text-white p-6 sm:p-8 rounded-sm shadow-xl sticky top-28 border border-slate-800">
              <span className="text-xs tracking-[0.2em] font-semibold text-brand-red-400 uppercase block mb-2">
                Custom Booking
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-serif font-bold text-white uppercase tracking-wider">Enquire Now</span>
              </div>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Complete minibus charters and customized hotel itinerary options are prepared on request. Have our travel coordinators coordinate everything.
              </p>

              {/* What We Handle */}
              <div className="border-t border-white/10 pt-6 mb-8">
                <h4 className="text-xs font-bold text-brand-red-400 uppercase tracking-widest mb-4">
                  Vision Tourism Service
                </h4>
                <ul className="flex flex-col gap-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-red-500 mt-0.5 flex-shrink-0" />
                    <span>Booking coordination at premium 3/4-star partner hotels</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-red-500 mt-0.5 flex-shrink-0" />
                    <span>Daily breakfast and luxury group amenities arranged</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-red-500 mt-0.5 flex-shrink-0" />
                    <span>Seamless door-to-door passenger drop-off by your driver-guide</span>
                  </li>
                </ul>
              </div>

              {/* Action Link */}
              <Link
                to="/book?type=custom"
                className="flex items-center justify-center gap-2 w-full bg-brand-red-600 hover:bg-brand-red-700 text-white font-bold py-3.5 transition-colors rounded-sm text-xs uppercase tracking-wider shadow"
              >
                <Calendar className="w-4 h-4 text-white" />
                ENQUIRE NOW
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
