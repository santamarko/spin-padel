import { motion } from 'framer-motion';

export default function ParceirosPage() {
  const partners = [
    {
      name: 'ProPadel Equipment',
      category: 'Equipamento',
      description: 'Desconto de 15% em todo o equipamento para sócios Spin Padel',
      benefit: '15% OFF',
      icon: '🎾'
    },
    {
      name: 'SportNutrition',
      category: 'Nutrição',
      description: 'Suplementação e nutrição desportiva com condições especiais',
      benefit: '20% OFF',
      icon: '💊'
    },
    {
      name: 'FitZone Gym',
      category: 'Fitness',
      description: 'Acesso a treinos complementares e planos de preparação física',
      benefit: '25% OFF',
      icon: '💪'
    },
    {
      name: 'SportPhysio',
      category: 'Saúde',
      description: 'Fisioterapia e tratamentos de recuperação desportiva',
      benefit: '10% OFF',
      icon: '🏥'
    },
    {
      name: 'PadelStyle',
      category: 'Roupa',
      description: 'Vestuário técnico e casual para padel com descontos exclusivos',
      benefit: '15% OFF',
      icon: '👕'
    },
    {
      name: 'TechPadel',
      category: 'Tecnologia',
      description: 'Apps de análise de jogo e treino com subscrição especial',
      benefit: '30% OFF',
      icon: '📱'
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
            PARCEIROS
          </h1>
          <p className="text-xl text-gray-400 tracking-wide max-w-3xl mx-auto">
            Benefícios exclusivos através das nossas parcerias estratégicas
          </p>
        </motion.div>

        {/* Benefits Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-spin-orange to-spin-orange/80 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              VANTAGENS PARA SÓCIOS
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Como membro da família Spin Padel, tens acesso a descontos e condições exclusivas 
              nos melhores estabelecimentos e marcas do setor desportivo. Poupa enquanto melhoras o teu jogo!
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-2">6+</div>
                <div className="text-white font-bold">Parceiros Ativos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-2">30%</div>
                <div className="text-white font-bold">Desconto Máximo</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-2">€500+</div>
                <div className="text-white font-bold">Poupança Anual</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-spin-black/30 rounded-2xl p-8 hover:bg-spin-black/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-spin-orange text-white px-4 py-2 rounded-full font-bold text-sm">
                {partner.benefit}
              </div>
              <div className="text-6xl mb-4">{partner.icon}</div>
              <span className="inline-block bg-spin-blue/30 text-spin-blue px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase">
                {partner.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {partner.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {partner.description}
              </p>
              <button className="text-spin-orange font-bold text-sm hover:text-white transition-colors uppercase">
                Saber mais →
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Become Partner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-spin-black/30 rounded-2xl p-12 text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Interessado em ser nosso parceiro?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Junta-te à nossa rede de parceiros e alcança uma comunidade ativa e apaixonada por padel. 
            Oferecemos excelentes oportunidades de visibilidade e negócio.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-bold px-12 py-4 rounded-full hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-2xl uppercase"
          >
            Tornar-se Parceiro
          </motion.button>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">
            Dúvidas sobre as parcerias?
          </p>
          <a href="#" className="text-spin-orange font-bold text-lg hover:text-white transition-colors">
            parceiros@spinpadel.pt
          </a>
        </motion.div>
      </div>
    </div>
  );
}
