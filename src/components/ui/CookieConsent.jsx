import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COOKIE_CONSENT_KEY = 'spin-padel-cookie-consent';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Delay showing banner for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (e) {
        // Invalid stored data, show banner again
        setShowBanner(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(necessaryOnly));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-spin-black border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
            {!showPreferences ? (
              // Main Banner
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-3xl">
                    <span role="img" aria-label="Cookie">🍪</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">
                      Utilizamos cookies
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      Utilizamos cookies para melhorar a sua experiência no nosso site.
                      Os cookies necessários são essenciais para o funcionamento do site.
                      Pode aceitar todos os cookies ou personalizar as suas preferências.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <motion.button
                        onClick={handleAcceptAll}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-spin-orange text-white font-bold px-6 py-2.5 rounded-full hover:bg-spin-orange/90 transition-colors text-sm"
                      >
                        Aceitar Todos
                      </motion.button>
                      <motion.button
                        onClick={handleAcceptNecessary}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gray-700 text-white font-medium px-6 py-2.5 rounded-full hover:bg-gray-600 transition-colors text-sm"
                      >
                        Apenas Necessários
                      </motion.button>
                      <motion.button
                        onClick={() => setShowPreferences(true)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-gray-400 hover:text-white font-medium px-4 py-2.5 transition-colors text-sm underline"
                      >
                        Personalizar
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Preferences Panel
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-lg">
                    Preferências de Cookies
                  </h3>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Voltar"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">Cookies Necessários</span>
                        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
                          Sempre ativos
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">
                        Essenciais para o funcionamento básico do site.
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex-1">
                      <span className="text-white font-medium">Cookies de Análise</span>
                      <p className="text-gray-400 text-sm mt-1">
                        Ajudam-nos a entender como os visitantes usam o site.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.analytics ? 'bg-spin-orange justify-end' : 'bg-gray-600 justify-start'
                      } px-1`}
                      role="switch"
                      aria-checked={preferences.analytics}
                    >
                      <motion.div
                        layout
                        className="w-4 h-4 bg-white rounded-full"
                      />
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex-1">
                      <span className="text-white font-medium">Cookies de Marketing</span>
                      <p className="text-gray-400 text-sm mt-1">
                        Usados para mostrar anúncios relevantes.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.marketing ? 'bg-spin-orange justify-end' : 'bg-gray-600 justify-start'
                      } px-1`}
                      role="switch"
                      aria-checked={preferences.marketing}
                    >
                      <motion.div
                        layout
                        className="w-4 h-4 bg-white rounded-full"
                      />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <motion.button
                    onClick={handleSavePreferences}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-spin-orange text-white font-bold px-6 py-2.5 rounded-full hover:bg-spin-orange/90 transition-colors text-sm"
                  >
                    Guardar Preferências
                  </motion.button>
                  <motion.button
                    onClick={handleAcceptAll}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gray-700 text-white font-medium px-6 py-2.5 rounded-full hover:bg-gray-600 transition-colors text-sm"
                  >
                    Aceitar Todos
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
