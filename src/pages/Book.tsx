import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { tours } from '../data/tours';
import { vehicles } from '../data/vehicles';
import { Shield, Check } from 'lucide-react';

export const Book: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialTour = searchParams.get('tour') || '';
  const initialType = searchParams.get('type') || 'tour';

  const [bookingType, setBookingType] = useState<string>(initialType);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    passengers: '1-4',
    selectedTourId: initialTour,
    selectedVehicleId: '',
    pickupLocation: '',
    dropoffLocation: '',
    additionalRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialTour) {
      setBookingType('tour');
      setFormData((prev) => ({ ...prev, selectedTourId: initialTour }));
    }
  }, [initialTour]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-20 pb-16">
      <PageHeader
        title="Book Your Journey"
        subtitle="Request custom tour scheduling, reserve private group minibuses, or schedule executive airport transfers."
        bgImageUrl="https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=1600&auto=format&fit=crop"
        breadcrumbs={[{ name: 'Book Now' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Booking Form (Left 2/3) */}
          <div className="lg:col-span-2 bg-white border border-brand-cream-300 p-8 sm:p-12 rounded-sm shadow-md h-fit">
            {isSuccess ? (
              <div className="bg-brand-green-900 text-white p-8 rounded-sm text-center border border-brand-gold-400/20 max-w-lg mx-auto py-12 flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold-400 text-brand-green-900 mb-6">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-brand-gold-400 mb-2">
                  Booking Request Sent!
                </h4>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Your reservation inquiry has been successfully transmitted. Our dispatchers will calculate distances, review guides availability, and compile a bespoke itinerary quote within 12 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-2.5 rounded-sm transition-colors text-xs uppercase tracking-wider"
                >
                  Create Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Switcher */}
                <div className="flex border-b border-brand-cream-300 pb-4 mb-2">
                  <button
                    type="button"
                    onClick={() => { setBookingType('tour'); }}
                    className={`flex-1 text-center py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                      bookingType === 'tour'
                        ? 'border-brand-gold-400 text-brand-green-900'
                        : 'border-transparent text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Guided Tours
                  </button>
                  <button
                    type="button"
                    onClick={() => { setBookingType('minibus'); }}
                    className={`flex-1 text-center py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                      bookingType === 'minibus'
                        ? 'border-brand-gold-400 text-brand-green-900'
                        : 'border-transparent text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Minibus & Coach Hire
                  </button>
                </div>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Lead Passenger Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +44 7987 654321"
                      className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Target Travel Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors cursor-pointer"
                    />
                  </div>
                </div>

                {/* Conditional Fields based on bookingType */}
                {bookingType === 'tour' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="selectedTourId" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Select Guided Tour
                      </label>
                      <select
                        id="selectedTourId"
                        name="selectedTourId"
                        value={formData.selectedTourId}
                        onChange={handleChange}
                        className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">-- Choose a Tour Package --</option>
                        {tours.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="passengers" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Number of Passengers
                      </label>
                      <select
                        id="passengers"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors appearance-none cursor-pointer"
                      >
                        <option>1-4 Passengers</option>
                        <option>5-8 Passengers</option>
                        <option>9-16 Passengers</option>
                        <option>17+ Passengers (Multiple Minibuses)</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="selectedVehicleId" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                          Select Vehicle Preference
                        </label>
                        <select
                          id="selectedVehicleId"
                          name="selectedVehicleId"
                          value={formData.selectedVehicleId}
                          onChange={handleChange}
                          className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">-- Choose a Fleet Class --</option>
                          {vehicles.map((v) => (
                            <option key={v.id} value={v.id}>
                              {v.name} (Cap: {v.capacity})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="passengers" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                          Group Size Count
                        </label>
                        <select
                          id="passengers"
                          name="passengers"
                          value={formData.passengers}
                          onChange={handleChange}
                          className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors appearance-none cursor-pointer"
                        >
                          <option>1-8 Passengers</option>
                          <option>9-16 Passengers</option>
                          <option>17-29 Passengers</option>
                          <option>30-49 Passengers</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="pickupLocation" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                          Pickup Address / Airport code
                        </label>
                        <input
                          type="text"
                          id="pickupLocation"
                          name="pickupLocation"
                          required
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          placeholder="e.g. Heathrow T2, London"
                          className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors"
                        />
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <label htmlFor="dropoffLocation" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                          Drop-off Destination / Address
                        </label>
                        <input
                          type="text"
                          id="dropoffLocation"
                          name="dropoffLocation"
                          required
                          value={formData.dropoffLocation}
                          onChange={handleChange}
                          placeholder="e.g. Central Edinburgh Hotel"
                          className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="flex flex-col gap-2">
                  <label htmlFor="additionalRequests" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Additional Itinerary Requests or Route Details
                  </label>
                  <textarea
                    id="additionalRequests"
                    name="additionalRequests"
                    rows={4}
                    value={formData.additionalRequests}
                    onChange={handleChange}
                    placeholder="Specify flight numbers, special luggage (e.g. golf clubs/wheelchairs), baby seats required, or detour requests..."
                    className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 bg-brand-green-900 hover:bg-brand-green-600 text-white font-bold py-4 rounded-sm transition-colors duration-300 text-xs uppercase tracking-widest mt-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    'Transmitting Request...'
                  ) : (
                    <>
                      Submit Reservation Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Guarantee Panel Sidebar (Right 1/3) */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div className="bg-brand-cream-200 border border-brand-cream-300 p-8 rounded-sm">
              <h3 className="font-serif text-lg text-brand-green-900 font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-gold-400" />
                Operator Guarantees
              </h3>
              <ul className="flex flex-col gap-4 text-xs text-slate-600 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-brand-gold-400 font-bold mt-0.5">•</span>
                  <span><strong>Licensed Operators:</strong> Fully accredited under London Private Hire regulations.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-gold-400 font-bold mt-0.5">•</span>
                  <span><strong>Transparent Planning:</strong> Custom itinerary quotes compile all fuel, toll charges, passenger insurance, and driver accommodation.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-gold-400 font-bold mt-0.5">•</span>
                  <span><strong>Bespoke Customization:</strong> Tailor stops, break periods, and route speed with your dedicated tour driver.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-brand-cream-300 p-8 rounded-sm text-center">
              <h3 className="font-serif text-base text-brand-green-900 font-bold mb-2">
                Need Help Booking?
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                Not sure which minibus fits your luggage capacity or what route fits your timeline? Speak directly with a booking coordinator.
              </p>
              <a
                href="tel:+442012345678"
                className="inline-block text-brand-green-900 hover:text-brand-gold-400 text-sm font-bold transition-colors"
              >
                +44 (0) 20 1234 5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
