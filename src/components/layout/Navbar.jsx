import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const WHATSAPP_NUMBER = '351928439668';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre o Spin Padel.';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

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

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent" role="navigation" aria-label="Navegação principal">
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
              className={`transition-colors duration-300 font-bold uppercase tracking-wide focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none rounded px-2 py-1 ${isActiveLink('/precos') ? 'text-spin-orange' : 'text-white hover:text-spin-orange'}`}
            >
              Preços
            </Link>
            <Link
              to="/equipa"
              className={`transition-colors duration-300 font-bold uppercase focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none rounded px-2 py-1 ${isActiveLink('/equipa') ? 'text-spin-orange' : 'text-white hover:text-spin-orange'}`}
            >
              Equipa
            </Link>
            <Link
              to="/noticias"
              className={`transition-colors duration-300 font-bold uppercase focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none rounded px-2 py-1 ${isActiveLink('/noticias') ? 'text-spin-orange' : 'text-white hover:text-spin-orange'}`}
            >
              Notícias
            </Link>
            <Link
              to="/parceiros"
              className={`transition-colors duration-300 font-bold uppercase focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none rounded px-2 py-1 ${isActiveLink('/parceiros') ? 'text-spin-orange' : 'text-white hover:text-spin-orange'}`}
            >
              Parceiros
            </Link>
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-spin-teal px-6 py-2.5 rounded-full font-bold hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-lg uppercase flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactar
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-spin-teal/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link
                to="/"
                className={`block py-3 px-4 rounded-lg font-bold uppercase tracking-wide transition-colors ${isActiveLink('/') ? 'bg-spin-orange/20 text-spin-orange' : 'text-white hover:bg-white/10'}`}
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/precos"
                className={`block py-3 px-4 rounded-lg font-bold uppercase tracking-wide transition-colors ${isActiveLink('/precos') ? 'bg-spin-orange/20 text-spin-orange' : 'text-white hover:bg-white/10'}`}
                onClick={() => setIsOpen(false)}
              >
                Preços
              </Link>
              <Link
                to="/equipa"
                className={`block py-3 px-4 rounded-lg font-bold uppercase transition-colors ${isActiveLink('/equipa') ? 'bg-spin-orange/20 text-spin-orange' : 'text-white hover:bg-white/10'}`}
                onClick={() => setIsOpen(false)}
              >
                Equipa
              </Link>
              <Link
                to="/noticias"
                className={`block py-3 px-4 rounded-lg font-bold uppercase transition-colors ${isActiveLink('/noticias') ? 'bg-spin-orange/20 text-spin-orange' : 'text-white hover:bg-white/10'}`}
                onClick={() => setIsOpen(false)}
              >
                Notícias
              </Link>
              <Link
                to="/parceiros"
                className={`block py-3 px-4 rounded-lg font-bold uppercase transition-colors ${isActiveLink('/parceiros') ? 'bg-spin-orange/20 text-spin-orange' : 'text-white hover:bg-white/10'}`}
                onClick={() => setIsOpen(false)}
              >
                Parceiros
              </Link>
              <div className="pt-4">
                <button
                  onClick={() => { handleWhatsAppClick(); setIsOpen(false); }}
                  className="w-full bg-white text-spin-teal px-6 py-3 rounded-full font-bold hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-lg uppercase flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contactar
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
