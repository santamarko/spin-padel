import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
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
              className="text-white hover:text-spin-orange transition-colors duration-300 font-bold uppercase tracking-wide"
            >
              Preços
            </Link>
            <Link
              to="/bar"
              className="text-white hover:text-spin-orange transition-colors duration-300 font-bold uppercase"
            >
              Bar
            </Link>
            <Link
              to="/equipa"
              className="text-white hover:text-spin-orange transition-colors duration-300 font-bold uppercase"
            >
              Equipa
            </Link>
            <Link
              to="/noticias"
              className="text-white hover:text-spin-orange transition-colors duration-300 font-bold uppercase"
            >
              Notícias
            </Link>
            <Link
              to="/parceiros"
              className="text-white hover:text-spin-orange transition-colors duration-300 font-bold uppercase"
            >
              Parceiros
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-spin-teal px-6 py-2.5 rounded-full font-bold hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-lg uppercase"
            >
              Contactar
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-spin-orange transition-colors p-2"
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
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-spin-teal/95 backdrop-blur-lg"
        >
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link
              to="/precos"
              className="block text-white hover:text-spin-orange transition-colors py-2 font-bold uppercase tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Preços
            </Link>
            <Link
              to="/bar"
              className="block text-white hover:text-spin-orange transition-colors py-2 font-bold uppercase"
              onClick={() => setIsOpen(false)}
            >
              Bar
            </Link>
            <Link
              to="/equipa"
              className="block text-white hover:text-spin-orange transition-colors py-2 font-bold uppercase"
              onClick={() => setIsOpen(false)}
            >
              Equipa
            </Link>
            <Link
              to="/noticias"
              className="block text-white hover:text-spin-orange transition-colors py-2 font-bold uppercase"
              onClick={() => setIsOpen(false)}
            >
              Notícias
            </Link>
            <Link
              to="/parceiros"
              className="block text-white hover:text-spin-orange transition-colors py-2 font-bold uppercase"
              onClick={() => setIsOpen(false)}
            >
              Parceiros
            </Link>
            <button className="w-full bg-white text-spin-teal px-6 py-2.5 rounded-full font-bold hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-lg uppercase">
              Contactar
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
