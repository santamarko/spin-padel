import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { features } from '../../constants';

const WHATSAPP_NUMBER = '351928439668';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de visitar as instalações do Spin Padel.';

const FeatureCard = ({ title, description, icon, delay, gradient, isWhite, image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className={`relative ${gradient} rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500`}
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
          />
          <div className={`absolute inset-0 ${isWhite ? 'bg-white/60' : 'bg-black/40'}`}></div>
        </div>
      )}

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-0 right-0 w-64 h-64 ${isWhite ? 'bg-black' : 'bg-white'} rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2`}></div>
      </div>
      
      <div className="relative z-10 p-10">
        <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <h3 className={`text-3xl md:text-4xl font-black ${isWhite ? 'text-black' : 'text-white'} mb-4 tracking-tight leading-tight uppercase`}>
          {title}
        </h3>
        <p className={`${isWhite ? 'text-black/80' : 'text-white/90'} leading-relaxed text-base font-medium`}>{description}</p>
      </div>

      {/* Hover effect overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${isWhite ? 'from-black/0 to-black/5' : 'from-white/0 to-white/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    </motion.div>
  );
};

const Features = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section className="relative py-24 px-4 bg-black">
      {/* Gradient fade do hero para esta secção */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
      
      {/* Background text effect */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="text-[12rem] md:text-[20rem] font-black text-white/[0.02] leading-none whitespace-nowrap select-none">
          SPIN PADEL
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
          </motion.div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-none">
            CONHECE. <span className="text-spin-orange">DESCOBRE.</span>
            <br />
            <span style={{ color: '#1c5ba6' }}>
              DIVERTE-TE.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Experiência completa de padel com infraestrutura de classe mundial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-black text-lg px-12 py-5 rounded-full hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-2xl uppercase tracking-wide inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Visita as Instalações
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
