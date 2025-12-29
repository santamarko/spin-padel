import { motion } from 'framer-motion';

const Newsletter = () => {
  const line1Words = ['PADEL', 'AMIGOS', 'DIVERSAO', 'COMPETICAO', 'ENERGIA', 'VITORIA', 'DESAFIO', 'JOGO', 'EQUIPA', 'CHAMPIONS'];
  const line2Words = ['COMUNIDADE', 'TORNEIOS', 'ADRENALINA', 'VELOCIDADE', 'PRECISAO', 'ESTRATEGIA', 'SMASH', 'VOLLEY', 'TECNICA', 'DOMINIO'];
  const line3Words = ['PAIXAO', 'TREINO', 'EVOLUCAO', 'SPIN', 'PERFORMANCE', 'TATICA', 'FORCA', 'AGILIDADE', 'FOCO', 'EXCELENCIA'];
  
  return (
    <section className="relative py-24 px-4 bg-spin-orange overflow-hidden">
      {/* Background Text with horizontal animation - 3 lines covering full height */}
      <div className="absolute inset-0 flex flex-col justify-around overflow-hidden py-8">
        {/* Line 1 */}
        <div className="flex items-center overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ 
              duration: 120,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-white/10 leading-tight whitespace-nowrap flex"
          >
            {[...line1Words, ...line1Words, ...line1Words].map((word, i) => (
              <span key={i} className="mx-6">{word}</span>
            ))}
          </motion.div>
        </div>

        {/* Line 2 */}
        <div className="flex items-center overflow-hidden">
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{ 
              duration: 140,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-white/10 leading-tight whitespace-nowrap flex"
          >
            {[...line2Words, ...line2Words, ...line2Words].map((word, i) => (
              <span key={i} className="mx-6">{word}</span>
            ))}
          </motion.div>
        </div>

        {/* Line 3 */}
        <div className="flex items-center overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ 
              duration: 110,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-white/10 leading-tight whitespace-nowrap flex"
          >
            {[...line3Words, ...line3Words, ...line3Words].map((word, i) => (
              <span key={i} className="mx-6">{word}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-spin-black mb-6"
        >
          NÃO PERCA ISTO.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-spin-black/90 mb-10 max-w-2xl mx-auto font-medium"
        >
          Estamos a lançar novidades em breve. Regista-te para acesso prioritário, 
          ofertas exclusivas e uma bebida grátis na tua primeira reserva.
        </motion.p>

        {/* Email Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6"
        >
          <input
            type="email"
            placeholder="Insere o teu email"
            className="flex-1 px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm border-2 border-transparent focus:border-spin-black focus:outline-none text-spin-black placeholder-gray-500 font-medium"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-spin-black text-white font-bold px-8 py-4 rounded-full hover:bg-spin-teal transition-all duration-300 flex items-center justify-center gap-2"
          >
            OBTER ACESSO
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Newsletter;
