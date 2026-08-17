import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

interface NavLinkItem {
  name: string;
  path: string;
  dropdown?: { name: string; path: string }[];
}

const ToursDropdown: React.FC<{ link: NavLinkItem }> = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const isSubPageActive = link.dropdown?.some((item) => location.pathname === item.path);
  const isActive = isOpen || isSubPageActive;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={`text-xs sm:text-sm font-bold tracking-wide transition-colors duration-200 py-1.5 uppercase flex items-center gap-1 focus:outline-none ${
          isActive ? 'text-brand-red-600' : 'text-brand-blue-900 hover:text-brand-red-600'
        }`}
      >
        <span>{link.name}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-red-600' : 'text-brand-blue-900'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            role="menu"
            className="absolute left-0 mt-2.5 w-64 bg-white border border-slate-200 shadow-xl rounded py-2 z-50 focus:outline-none"
          >
            {link.dropdown?.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="block px-5 py-2.5 text-xs sm:text-sm font-semibold text-brand-blue-900 hover:text-brand-red-600 hover:bg-slate-50 transition-colors duration-150 uppercase tracking-wide border-b border-slate-50 last:border-0"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileToursAccordion: React.FC<{ link: NavLinkItem; onCloseMenu: () => void }> = ({ link, onCloseMenu }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const isSubPageActive = link.dropdown?.some((item) => location.pathname === item.path);

  return (
    <div className="flex flex-col border-b border-slate-100 py-1">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center justify-between w-full text-base font-bold tracking-wide py-2 uppercase text-left transition-colors focus:outline-none ${
          expanded || isSubPageActive ? 'text-brand-red-600' : 'text-brand-blue-900 hover:text-brand-red-600'
        }`}
      >
        <span>{link.name}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${expanded ? 'rotate-180 text-brand-red-600' : 'text-brand-blue-900'}`} />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden flex flex-col pl-4 gap-2 bg-slate-50/50 rounded-sm py-1.5 mt-1"
          >
            {link.dropdown?.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onCloseMenu}
                  className={`text-sm font-semibold tracking-wide py-2 uppercase transition-colors ${
                    isActive ? 'text-brand-red-600' : 'text-brand-blue-900 hover:text-brand-red-600'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks: NavLinkItem[] = [
    { name: 'Home', path: '/' },
    {
      name: 'Tours',
      path: '#',
      dropdown: [
        { name: 'England to Scotland Tour', path: '/england-scotland-4-days' },
        { name: 'Northern Ireland to Wales', path: '/northern-ireland-to-wales' },
        { name: 'One Day Trips', path: '/book?tour=stonehenge-bath-1-day' },
      ],
    },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Famous Sights', path: '/famous-sights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-sm py-3.5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Prominent Official Brand Logo */}
            <Link to="/" className="flex items-center group">
              <Logo size="md" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return <ToursDropdown key={link.name} link={link} />;
                }
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-xs sm:text-sm font-bold tracking-wide transition-colors duration-200 relative py-1.5 uppercase ${isActive
                        ? 'text-brand-red-600'
                        : 'text-brand-blue-900 hover:text-brand-red-600'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {/* Active Red Underline */}
                        {isActive && (
                          <motion.span
                            layoutId="activeNavUnderline"
                            className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-red-600 rounded-full"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden xl:flex items-center gap-5">
              <div className="flex flex-col items-end">
                <a
                  href="tel:+447432655145"
                  className="flex items-center gap-2 text-brand-blue-900 hover:text-brand-red-600 text-xs font-bold transition-colors py-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-red-600" />
                  <span>+44 07432 655145</span>
                </a>
                <a
                  href="tel:+447401045450"
                  className="flex items-center gap-2 text-brand-blue-900 hover:text-brand-red-600 text-xs font-bold transition-colors py-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-red-600" />
                  <span>+44 07401 045450</span>
                </a>
              </div>

              {/* Primary CTA: Navy background, turns Red on hover */}
              <Link
                to="/book"
                className="flex items-center gap-2 bg-brand-blue-900 hover:bg-brand-red-600 text-white font-bold px-5 py-2.5 rounded shadow-sm transition-all duration-300 text-xs tracking-wider uppercase hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-white" />
                Book Now
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="xl:hidden flex items-center gap-3">
              <Link
                to="/book"
                className="bg-brand-blue-900 hover:bg-brand-red-600 text-white font-bold p-2.5 rounded shadow-sm transition-colors"
                aria-label="Book Now"
              >
                <Calendar className="w-5 h-5" />
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-blue-900 hover:text-brand-red-600 p-2 focus:outline-none transition-colors"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-0 pt-20 pb-8 z-30 bg-white border-b border-slate-200 shadow-2xl xl:hidden flex flex-col px-6"
          >
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <MobileToursAccordion
                      key={link.name}
                      link={link}
                      onCloseMenu={() => setIsOpen(false)}
                    />
                  );
                }
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-bold tracking-wide py-2 border-b border-slate-100 uppercase transition-colors ${isActive ? 'text-brand-red-600' : 'text-brand-blue-900 hover:text-brand-red-600'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}

              <div className="flex flex-col gap-2.5 border-b border-slate-100 py-3 mt-2">
                <a
                  href="tel:+447432655145"
                  className="flex items-center gap-3 text-brand-blue-900 font-bold text-sm"
                >
                  <Phone className="w-5 h-5 text-brand-red-600" />
                  <span>+44 07432 655145</span>
                </a>
                <a
                  href="tel:+447401045450"
                  className="flex items-center gap-3 text-brand-blue-900 font-bold text-sm"
                >
                  <Phone className="w-5 h-5 text-brand-red-600" />
                  <span>+44 07401 045450</span>
                </a>
              </div>

              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-brand-blue-900 hover:bg-brand-red-600 text-white font-bold py-3.5 rounded transition-all text-sm uppercase tracking-wider mt-2 shadow"
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
