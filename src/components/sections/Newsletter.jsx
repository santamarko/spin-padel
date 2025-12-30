import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '351928439668';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre o Spin Padel.';

const Newsletter = () => {
  const line1Words = ['PADEL', 'AMIGOS', 'DIVERSAO', 'COMPETICAO', 'ENERGIA', 'VITORIA', 'DESAFIO', 'JOGO', 'EQUIPA', 'CHAMPIONS'];
  const line2Words = ['COMUNIDADE', 'TORNEIOS', 'ADRENALINA', 'VELOCIDADE', 'PRECISAO', 'ESTRATEGIA', 'SMASH', 'VOLLEY', 'TECNICA', 'DOMINIO'];
  const line3Words = ['PAIXAO', 'TREINO', 'EVOLUCAO', 'SPIN', 'PERFORMANCE', 'TATICA', 'FORCA', 'AGILIDADE', 'FOCO', 'EXCELENCIA'];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

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
          PRONTO PARA JOGAR?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-spin-black/90 mb-10 max-w-2xl mx-auto font-medium"
        >
          Junta-te à comunidade Spin Padel. Reserva o teu campo,
          marca aulas ou simplesmente vem conhecer as nossas instalações.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-spin-black text-white font-bold px-8 py-4 rounded-full hover:bg-spin-teal transition-all duration-300 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            FALAR CONNOSCO
          </motion.button>
          <a
            href="mailto:bracosentusiastas@gmail.com"
            className="text-spin-black font-bold hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            bracosentusiastas@gmail.com
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-spin-black/70 text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Resposta rápida</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Sem compromisso</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Primeira visita grátis</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
