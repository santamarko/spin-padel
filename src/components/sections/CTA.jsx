import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-spin-teal to-spin-black overflow-hidden">
      {/* Pattern de fundo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-spin-blue rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-spin-orange rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Pronto para Começar?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-spin-offwhite mb-10 max-w-2xl mx-auto"
        >
          Faz parte da comunidade Spin Padel e eleva o teu jogo para o próximo nível.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-spin-orange text-white font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:bg-opacity-90 transition-all duration-300"
        >
          Reserva o Teu Campo Agora
        </motion.button>

      </div>
    </section>
  );
};

export default CTA;
