import { motion } from 'framer-motion';
import { useVideoCarousel } from '../../hooks/useVideoCarousel';
import { siteConfig } from '../../config';

const Hero = () => {
  const videos = siteConfig.videos.hero;
  const { activeVideo, setVideoRef, handleVideoEnd } = useVideoCarousel(videos);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background com crossfade */}
      <div className="absolute inset-0 w-full h-full">
        {videos.map((video, index) => (
          <video
            key={index}
            ref={setVideoRef(index)}
            autoPlay={index === 0}
            muted
            playsInline
            preload="auto"
            onEnded={() => handleVideoEnd(index)}
            className="w-full h-full object-cover absolute inset-0 grayscale transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: activeVideo === index ? 1 : 0 }}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Overlay escuro com fade para baixo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        
        {/* Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
        >
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-spin-orange border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-spin-blue border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-spin-teal border-2 border-white"></div>
          </div>
          <span className="text-white text-sm font-semibold">
            Junta-te a mais de 500 jogadores
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
        >
          <span className="text-white block">BEM-VINDO AO</span>
          <span className="text-spin-orange block">SPIN PADEL</span>
        </motion.h1>

        {/* Subtítulo */}


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
              whileTap={{ scale: 0.95 }}
              className="relative bg-spin-orange text-white font-bold text-base md:text-lg px-10 py-4 rounded-full shadow-2xl transition-all duration-300 w-full sm:w-auto hover:bg-white hover:text-black"
            >
              RESERVAR AGORA
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white/80 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
