import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const WHATSAPP_NUMBER = '351928439668';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre o Spin Padel.';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen ? 'bg-spin-deep-blue' : scrolled ? 'bg-gradient-to-b from-spin-deep-blue/95 to-transparent backdrop-blur-sm' : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300"
            >
              <img src="/SpinPadel_Monogram_Cream.svg" alt="Spin Padel" className="h-12 w-auto" />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Link
              to="/precos"
              className={`transition-colors duration-300 font-heading font-bold uppercase tracking-wide focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none rounded px-2 py-1 ${isActiveLink('/precos') ? 'text-spin-orange' : 'text-white hover:text-spin-orange'}`}
            >
              Preços
            </Link>
            <Link
              to="/equipa"
              className={`transition-colors duration-300 font-heading font-bold uppercase tracking-wide focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none rounded px-2 py-1 ${isActiveLink('/equipa') ? 'text-spin-orange' : 'text-white hover:text-spin-orange'}`}
            >
              Equipa
            </Link>
            <Link
              to="/contacto"
              className={`transition-colors duration-300 font-heading font-bold uppercase tracking-wide focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none rounded px-2 py-1 ${isActiveLink('/contacto') ? 'text-spin-orange' : 'text-white hover:text-spin-orange'}`}
            >
              Contacto
            </Link>
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-spin-teal px-6 py-2.5 rounded-full font-heading font-bold hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-lg uppercase flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Reservar
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-spin-orange transition-colors p-2 focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none rounded"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-20 bg-spin-deep-blue z-40"
          >
            <div className="flex flex-col h-full px-6 py-8">
              {/* Navigation Links */}
              <nav className="flex-1 space-y-1">
                <Link
                  to="/"
                  className={`block py-4 text-xl font-heading font-bold uppercase tracking-wide transition-all duration-200 border-l-4 pl-4 ${isActiveLink('/') ? 'border-spin-orange text-spin-orange' : 'border-transparent text-white hover:text-spin-orange hover:border-spin-orange/50'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Início
                </Link>
                <Link
                  to="/precos"
                  className={`block py-4 text-xl font-heading font-bold uppercase tracking-wide transition-all duration-200 border-l-4 pl-4 ${isActiveLink('/precos') ? 'border-spin-orange text-spin-orange' : 'border-transparent text-white hover:text-spin-orange hover:border-spin-orange/50'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Preços
                </Link>
                <Link
                  to="/equipa"
                  className={`block py-4 text-xl font-heading font-bold uppercase tracking-wide transition-all duration-200 border-l-4 pl-4 ${isActiveLink('/equipa') ? 'border-spin-orange text-spin-orange' : 'border-transparent text-white hover:text-spin-orange hover:border-spin-orange/50'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Equipa
                </Link>
                <Link
                  to="/contacto"
                  className={`block py-4 text-xl font-heading font-bold uppercase tracking-wide transition-all duration-200 border-l-4 pl-4 ${isActiveLink('/contacto') ? 'border-spin-orange text-spin-orange' : 'border-transparent text-white hover:text-spin-orange hover:border-spin-orange/50'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
              </nav>

              {/* Contact Button - Fixed at Bottom */}
              <div className="pt-6 pb-4">
                <button
                  onClick={() => { handleWhatsAppClick(); setIsOpen(false); }}
                  className="w-full bg-white text-spin-dark px-6 py-4 rounded-full font-heading font-bold hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-lg uppercase flex items-center justify-center gap-3 text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Reservar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
