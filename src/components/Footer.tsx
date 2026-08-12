import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-900 border-t border-brand-green-800/20 text-white/75 relative overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green-800/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <svg className="w-10 h-10 text-brand-gold-400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3" strokeDasharray="3 3" />
                <polygon points="50,15 56,44 50,50" fill="currentColor" />
                <polygon points="50,15 44,44 50,50" fill="rgba(197,168,128,0.7)" />
                <circle cx="50" cy="50" r="5" fill="#092E20" stroke="currentColor" strokeWidth="2" />
              </svg>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-widest text-white leading-none uppercase">
                  Maps Tours
                </span>
                <span className="text-[9px] tracking-[0.25em] text-brand-gold-400 uppercase font-medium leading-none mt-1">
                  & Rental
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Premium UK travel operators providing bespoke group private road trips, executive minibus hire, and guided sightseeing journeys from England to Scotland.
            </p>
            <div className="flex items-center gap-2.5 text-xs text-white/50 bg-white/5 p-3 rounded border border-white/5 w-fit">
              <ShieldCheck className="w-4.5 h-4.5 text-brand-gold-400 flex-shrink-0" />
              <span>Licensed Private Hire Operator</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-base tracking-widest text-white uppercase font-semibold border-l-2 border-brand-gold-400 pl-3">
              Our Tours
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link to="/1-day-trips" className="hover:text-brand-gold-400 transition-colors duration-200">
                  1-Day Sightseeing Trips
                </Link>
              </li>
              <li>
                <Link to="/england-scotland-4-days" className="hover:text-brand-gold-400 transition-colors duration-200">
                  England to Scotland (4-Days)
                </Link>
              </li>
              <li>
                <Link to="/famous-sights" className="hover:text-brand-gold-400 transition-colors duration-200">
                  Famous UK Destinations
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-brand-gold-400 transition-colors duration-200">
                  Tailored Private Group Trips
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-base tracking-widest text-white uppercase font-semibold border-l-2 border-brand-gold-400 pl-3">
              Rentals & Hire
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link to="/book?type=minibus" className="hover:text-brand-gold-400 transition-colors duration-200">
                  Minibus Hire with Driver
                </Link>
              </li>
              <li>
                <Link to="/book?type=airport" className="hover:text-brand-gold-400 transition-colors duration-200">
                  Executive Airport Transfers
                </Link>
              </li>
              <li>
                <Link to="/book?type=corporate" className="hover:text-brand-gold-400 transition-colors duration-200">
                  Corporate Event Chauffeur
                </Link>
              </li>
              <li>
                <Link to="/book?type=wedding" className="hover:text-brand-gold-400 transition-colors duration-200">
                  Wedding Guest Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-base tracking-widest text-white uppercase font-semibold border-l-2 border-brand-gold-400 pl-3">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-gold-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+442012345678" className="hover:text-brand-gold-400 transition-colors font-medium">
                    +44 (0) 20 1234 5678
                  </a>
                  <span className="text-xs text-white/40">Mon - Sun, 8am - 8pm GMT</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-gold-400 flex-shrink-0" />
                <a href="mailto:info@mapstours.co.uk" className="hover:text-brand-gold-400 transition-colors py-0.5">
                  info@mapstours.co.uk
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-gold-400 flex-shrink-0" />
                <span className="leading-relaxed text-white/60">
                  London HQ Office,<br />
                  Westminster, London, SW1A 1AA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub Footer Rights & Legal */}
      <div className="bg-brand-dark-950/80 border-t border-white/5 relative z-10 py-6 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40">
            &copy; {currentYear} Maps Tours and Rental (mapstours.co.uk). All rights reserved.
          </p>
          <div className="flex gap-6 text-white/40">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Hire</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
