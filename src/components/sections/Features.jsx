import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { features } from '../../constants';

const FeatureItem = ({ title, description, icon, delay, gradient, isWhite, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center group`}
    >
      {/* Icon/Visual Side */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`${gradient} rounded-3xl p-12 md:p-16 flex items-center justify-center w-full md:w-1/2 lg:w-2/5 aspect-square md:aspect-auto md:min-h-[350px] shadow-2xl`}
      >
        <div className={`w-32 h-32 md:w-40 md:h-40 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${isWhite ? 'text-black' : 'text-white'}`}>
          {icon}
        </div>
      </motion.div>

      {/* Content Side */}
      <div className="flex-1 space-y-4">
        <motion.h3
          initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 20 : -20 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 20 : -20 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black from-40% to-spin-teal to-100%">
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
            EXPERIMENTA. <span className="text-spin-orange">APRENDE.</span>
            <br />
            <span style={{ color: '#1c5ba6' }}>
              DIVERTE-TE.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light whitespace-nowrap">Experiencia completa de padel num clube com infraestrutura de excelencia</p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
