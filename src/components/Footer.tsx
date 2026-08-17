import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-950 border-t border-slate-800 text-slate-300 relative overflow-hidden">
      {/* Red & Blue swoosh accent gradient backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Info Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="inline-block">
              <Logo variant="dark" size="lg" />
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              Official UK travel and private minibus hire platform. Providing executive group road trips, corporate charter transport, and guided tours from England to Scotland.
            </p>

            <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-slate-900/80 p-3 rounded border border-slate-800 w-fit">
              <ShieldCheck className="w-4.5 h-4.5 text-brand-red-500 flex-shrink-0" />
              <span>Licensed Private Hire Operator</span>
            </div>
          </div>

          {/* Tours Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-white border-l-2 border-brand-red-600 pl-3">
              Guided UK Tours
            </h3>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm">
              <li>
                <Link to="/england-scotland-4-days" className="hover:text-brand-red-400 transition-colors">
                  England to Scotland (4-Days)
                </Link>
              </li>
              <li>
                <Link to="/famous-sights" className="hover:text-brand-red-400 transition-colors">
                  Famous UK Landmarks
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-brand-red-400 transition-colors">
                  Custom Group Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Minibus Hire Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-white border-l-2 border-brand-red-600 pl-3">
              Private Hire & Rentals
            </h3>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm">
              <li>
                <Link to="/book?type=minibus" className="hover:text-brand-red-400 transition-colors">
                  Executive Minibus Hire with Driver
                </Link>
              </li>
              <li>
                <Link to="/book?type=airport" className="hover:text-brand-red-400 transition-colors">
                  Airport Transfers (Heathrow / Gatwick)
                </Link>
              </li>
              <li>
                <Link to="/book?type=corporate" className="hover:text-brand-red-400 transition-colors">
                  Corporate Event Logistics
                </Link>
              </li>
              <li>
                <Link to="/book?type=wedding" className="hover:text-brand-red-400 transition-colors">
                  Wedding Guest Transport
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-white border-l-2 border-brand-red-600 pl-3">
              Headquarters
            </h3>
            <ul className="flex flex-col gap-4 text-xs sm:text-sm">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-red-500 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+447432655145" className="hover:text-brand-red-400 transition-colors font-bold text-white">
                    +44 07432 655145
                  </a>
                  <a href="tel:+447401045450" className="hover:text-brand-red-400 transition-colors font-bold text-white">
                    +44 07401 045450
                  </a>
                  <span className="text-[10px] text-slate-400">24/7 Active</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-red-500 flex-shrink-0" />
                <a href="mailto:info@visiontourism.org" className="hover:text-brand-red-400 transition-colors">
                  info@visiontourism.org
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-red-500 flex-shrink-0" />
                <span className="leading-relaxed text-slate-300">
                  HQ Office,<br />London,
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Sub Footer */}
      <div className="bg-slate-950 border-t border-slate-800/80 py-6 text-xs text-slate-400 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Vision Tourism (info@visiontourism.org). All rights reserved.</p>
          <div className="flex gap-6 text-slate-400">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Hire</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
