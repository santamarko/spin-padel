import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'Jogador Regular',
      quote: 'Os melhores campos de padel da zona! Superfície impecável e iluminação perfeita para jogos noturnos. Já trouxe todos os meus amigos.',
      rating: 5,
      avatar: 'JS'
    },
    {
      name: 'Ana Costa',
      role: 'Aluna de Padel',
      quote: 'Comecei nas aulas de iniciação e em poucos meses já jogo com confiança. Os treinadores são fantásticos e super atenciosos.',
      rating: 5,
      avatar: 'AC'
    },
    {
      name: 'Miguel Ferreira',
      role: 'Competidor',
      quote: 'Ambiente incrível e comunidade acolhedora. O bar é perfeito para conviver depois dos jogos. Recomendo a 100%!',
      rating: 5,
      avatar: 'MF'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 px-4 bg-spin-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            O QUE DIZEM OS NOSSOS JOGADORES
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A opinião de quem joga connosco é o nosso maior orgulho
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-spin-black/30 rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-spin-orange/20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-spin-orange rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-spin-orange mb-2">500+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Jogadores Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-spin-orange mb-2">4.9</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-spin-orange mb-2">98%</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-spin-orange mb-2">3000+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Jogos Realizados</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
