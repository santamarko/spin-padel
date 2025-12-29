import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { features } from '../../constants';

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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-black text-lg px-12 py-5 rounded-full hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-2xl uppercase tracking-wide"
          >
            Visita as Instalações →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
