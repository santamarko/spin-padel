import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useVideoCarousel } from '../../hooks/useVideoCarousel';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { siteConfig } from '../../config';

const WHATSAPP_NUMBER = '351928439668';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de fazer uma reserva no Spin Padel.';

const Hero = () => {
  const videos = siteConfig.videos.hero;
  const { activeVideo, setVideoRef, handleVideoEnd } = useVideoCarousel(videos);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background com crossfade - on mobile, only load first video with metadata preload */}
      <div className="absolute inset-0 w-full h-full">
        {videos.map((video, index) => {
          // On mobile, only render the first video to save bandwidth
          if (isMobile && index > 0) return null;
          return (
            <video
              key={index}
              ref={setVideoRef(index)}
              autoPlay={index === 0 && !prefersReducedMotion}
              muted
              playsInline
              loop={isMobile}
              preload={isMobile ? 'metadata' : 'auto'}
              poster="/video/hero-poster.jpg"
              onEnded={!isMobile ? () => handleVideoEnd(index) : undefined}
              className="w-full h-full object-cover absolute inset-0 grayscale transition-opacity duration-[1500ms] ease-in-out"
              style={{ opacity: activeVideo === index || (isMobile && index === 0) ? 1 : 0 }}
            >
              <source src={video} type="video/mp4" />
            </video>
          );
        })}
      </div>

      {/* Overlay escuro com fade para baixo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-tight mb-4"
        >
          <span className="text-white block">BEM-VINDO AO</span>
          <span className="text-spin-orange block">SPIN PADEL</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-light"
        >
          O teu clube de padel em Fitares. Campos de excelência, aulas para todos os níveis e uma comunidade apaixonada pelo jogo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full translate-x-1 translate-y-1"></div>
            <motion.button
              onClick={handleWhatsAppClick}
              whileTap={{ scale: 0.95 }}
              className="relative bg-spin-orange text-white font-heading font-bold text-base md:text-lg px-10 py-4 rounded-full shadow-2xl transition-all duration-300 w-full sm:w-auto hover:bg-white hover:text-black inline-flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              RESERVAR AGORA
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={prefersReducedMotion ? {} : { duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white/80 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
