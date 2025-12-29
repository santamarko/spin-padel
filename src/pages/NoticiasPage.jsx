import { motion } from 'framer-motion';

export default function NoticiasPage() {
  const news = [
    {
      date: '15 Nov 2025',
      title: 'Torneio de Natal Spin Padel',
      category: 'Torneios',
      excerpt: 'Inscrições abertas para o maior torneio do ano! Participe e ganhe prémios incríveis.',
      image: '🏆'
    },
    {
      date: '08 Nov 2025',
      title: 'Novas Aulas de Iniciação',
      category: 'Aulas',
      excerpt: 'Começamos novos grupos de iniciação em Dezembro. Vagas limitadas!',
      image: '🎓'
    },
    {
      date: '01 Nov 2025',
      title: 'Renovação do Campo 3',
      category: 'Instalações',
      excerpt: 'Campo 3 renovado com nova superfície premium para melhor experiência de jogo.',
      image: '⚡'
    },
    {
      date: '25 Out 2025',
      title: 'Parceria com ProPadel',
      category: 'Parceiros',
      excerpt: 'Nova parceria traz descontos exclusivos em equipamento para sócios Spin.',
      image: '🤝'
    },
    {
      date: '18 Out 2025',
      title: 'Resultados do Open Spin',
      category: 'Resultados',
      excerpt: 'Parabéns aos vencedores do Open Spin! Confira todos os resultados.',
      image: '🥇'
    },
    {
      date: '10 Out 2025',
      title: 'Novos Horários de Inverno',
      category: 'Avisos',
      excerpt: 'A partir de Novembro, novos horários disponíveis para melhor servir nossos jogadores.',
      image: '⏰'
    },
  ];

  return (
    <div className="bg-spin-dark min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/SpinPadel_Monogram_positive.png" alt="Spin Padel" className="h-24 md:h-32 w-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            NOTÍCIAS
          </h1>
          <p className="text-xl text-gray-400 tracking-wide">
            Fica a par de tudo o que acontece no Spin Padel
          </p>
        </motion.div>

        {/* Featured News */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-spin-orange to-spin-orange/80 rounded-2xl p-12 text-center">
            <div className="text-7xl mb-4">🏆</div>
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
              DESTAQUE
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Torneio de Natal Spin Padel
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              O maior evento do ano está a chegar! Inscrições abertas até 30 de Novembro. 
              Participa e concorre a prémios no valor de €5.000!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-spin-orange font-bold px-8 py-3 rounded-full hover:bg-spin-teal hover:text-white transition-all duration-300 shadow-lg uppercase"
            >
              Inscrever-me
            </motion.button>
          </div>
        </motion.div>

        {/* News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-spin-black/30 rounded-2xl overflow-hidden hover:bg-spin-black/40 transition-all duration-300 cursor-pointer"
            >
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">{item.image}</div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm">{item.date}</span>
                  <span className="bg-spin-orange/20 text-spin-orange px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <button className="text-spin-orange font-bold text-sm hover:text-white transition-colors uppercase">
                  Ler mais →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-spin-teal mb-4 tracking-tight">
            Não percas nenhuma novidade
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscreve a nossa newsletter e recebe todas as atualizações, eventos e ofertas exclusivas diretamente no teu email
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="O seu email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-spin-orange transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-spin-orange text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-spin-orange transition-all duration-300 shadow-lg uppercase"
            >
              Subscrever
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
