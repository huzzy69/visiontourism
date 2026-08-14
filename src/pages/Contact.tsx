import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-20 pb-16">
      <PageHeader
        title="Contact Our UK Office"
        subtitle="Get in touch with our travel advisors to plan your next private hire itinerary or book tours across the UK."
        bgImageUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop"
        breadcrumbs={[{ name: 'Contact' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column - Contact Coordinates */}
          <div className="lg:col-span-1 flex flex-col gap-8 bg-brand-cream-200 p-8 rounded-sm border border-brand-cream-300">
            <div>
              <span className="text-brand-gold-500 font-semibold tracking-wider text-xs uppercase block mb-1">
                Direct Channels
              </span>
              <h3 className="font-serif text-2xl text-brand-green-900 font-bold mb-4">
                Reach Us Directly
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Have questions about vehicle hire capacity, custom day trip planning, or itinerary options? Our advisors are ready to assist.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href="tel:+447432655145"
                className="flex items-start gap-4 hover:text-brand-gold-500 transition-colors group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-brand-green-900 text-brand-gold-400 group-hover:bg-brand-green-600 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase font-medium">Call Main Office</span>
                  <span className="text-sm font-bold text-brand-green-900">07432 655145</span>
                </div>
              </a>

              <a
                href="mailto:info@visiontourism.co.uk"
                className="flex items-start gap-4 hover:text-brand-gold-500 transition-colors group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-brand-green-900 text-brand-gold-400 group-hover:bg-brand-green-600 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase font-medium">Email Operations</span>
                  <span className="text-sm font-bold text-brand-green-900">[visiontourism.uk]</span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-brand-green-900 text-brand-gold-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase font-medium">London HQ</span>
                  <span className="text-sm font-bold text-brand-green-900">
                    HQ Office,<br />London,
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-brand-green-900 text-brand-gold-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase font-medium">Business Hours</span>
                  <span className="text-sm font-bold text-brand-green-900">
                    Mon - Sun: 8:00 AM - 8:00 PM GMT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking and Inquiry Form */}
          <div className="lg:col-span-2 bg-white border border-brand-cream-300 p-8 sm:p-12 rounded-sm shadow-md">
            <span className="text-brand-gold-400 font-semibold tracking-[0.2em] text-xs uppercase block mb-1">
              Contact Form
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-green-900 font-bold mb-6">
              Send an Inquiry
            </h3>

            {isSuccess ? (
              <div className="bg-brand-green-900 text-white p-8 rounded-sm text-center border border-brand-gold-400/20 max-w-lg mx-auto py-12 flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold-400 text-brand-green-900 mb-6">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-brand-gold-400 mb-2">
                  Inquiry Received!
                </h4>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Thank you for contacting Vision Tourism. A private tour consultant will review your request and get back to you within 2-4 business hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-2.5 rounded-sm transition-colors text-xs uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Smith"
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
                      placeholder="e.g. john@example.com"
                      className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +44 7123 456789"
                      className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm transition-colors appearance-none cursor-pointer"
                    >
                      <option>General Inquiry</option>
                      <option>Minibus Rental Quote</option>
                      <option>1-Day Tour booking</option>
                      <option>England to Scotland Tour booking</option>
                      <option>Custom Tour Request</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your group size, travel dates, or special transport requirements..."
                    className="border border-brand-cream-300 focus:border-brand-gold-400 bg-brand-cream-100/50 p-3 outline-none text-sm resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 bg-brand-green-900 hover:bg-brand-green-600 text-white font-bold py-4 rounded-sm transition-colors duration-300 text-xs uppercase tracking-widest mt-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    'Transmitting Message...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
