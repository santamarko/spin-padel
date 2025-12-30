import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsList = [
    {
      name: 'João Silva',
      role: 'Jogador Regular',
      quote: 'Os melhores campos de padel da zona! Superfície impecável e iluminação perfeita para jogos noturnos.',
      rating: 5,
      avatar: 'JS'
    },
    {
      name: 'Ana Costa',
      role: 'Aluna de Padel',
      quote: 'Comecei nas aulas de iniciação e em poucos meses já jogo com confiança. Os treinadores são fantásticos.',
      rating: 5,
      avatar: 'AC'
    },
    {
      name: 'Miguel Ferreira',
      role: 'Competidor',
      quote: 'Ambiente incrível e comunidade acolhedora. O bar é perfeito para conviver depois dos jogos.',
      rating: 5,
      avatar: 'MF'
    },
    {
      name: 'Sofia Marques',
      role: 'Jogadora Social',
      quote: 'Ótima experiência! Os campos estão sempre em perfeito estado e o atendimento é excelente.',
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Treinador',
      quote: 'Trabalhar no Spin Padel é um prazer. Infraestrutura de classe mundial para treinar.',
      rating: 5,
      avatar: 'CO'
    },
    {
      name: 'Filipa Rocha',
      role: 'Membro Premium',
      quote: 'Os melhores campos da região! Recomendo a todos os meus amigos que gostam de padel.',
      rating: 5,
      avatar: 'FR'
    },
    {
      name: 'Ricardo Santos',
      role: 'Competidor',
      quote: 'Torneios emocionantes e comunidade incrível. Voltarei sempre ao Spin Padel!',
      rating: 5,
      avatar: 'RS'
    },
    {
      name: 'Beatriz Teixeira',
      role: 'Aluna de Padel',
      quote: 'Os treinadores são muito profissionais e atenciosos. Já melhorei muito meu jogo.',
      rating: 5,
      avatar: 'BT'
    },
    {
      name: 'André Correia',
      role: 'Jogador Regular',
      quote: 'Superfície Mondo Premier é realmente a melhor da indústria. Jogo perfeito!',
      rating: 5,
      avatar: 'AC2'
    },
    {
      name: 'Mariana Dias',
      role: 'Entusiasta',
      quote: 'Ambiente descontraído e acolhedor. Já fiz muitos amigos aqui no Spin Padel!',
      rating: 5,
      avatar: 'MD'
    }
  ];

  // Sort testimonials by rating (highest first)
  const sortedTestimonials = [...testimonialsList].sort((a, b) => b.rating - a.rating);

  // Create infinite loop by duplicating the array multiple times
  const testimonials = [...sortedTestimonials, ...sortedTestimonials, ...sortedTestimonials];

  // Auto-scroll carousel with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <section className="relative py-20 px-4 bg-spin-teal">
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

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 400}px` }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="flex-shrink-0 w-96 bg-spin-black/30 rounded-2xl p-8 relative flex flex-col h-96"
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
                  <p className="text-gray-300 leading-relaxed mb-6 text-base flex-1">
                    "{testimonial.quote}"
                  </p>

                  {/* Author at Bottom Left */}
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-12 h-12 bg-spin-orange rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{testimonial.name}</div>
                      <div className="text-gray-500 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white mb-2">4.9</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white mb-2">500+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Jogadores Mensais Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white mb-2">3000+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Nº Jogos Mensais</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
