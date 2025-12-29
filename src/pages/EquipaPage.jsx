import { motion } from 'framer-motion';

export default function EquipaPage() {
  const team = [
    {
      name: 'Carlos Silva',
      role: 'Treinador Principal',
      specialty: 'Ex-jogador profissional com 15 anos de experiência',
      image: 'https://i.pravatar.cc/400?img=12'
    },
    {
      name: 'Ana Rodrigues',
      role: 'Treinadora',
      specialty: 'Especialista em iniciação e padel feminino',
      image: 'https://i.pravatar.cc/400?img=47'
    },
    {
      name: 'Miguel Santos',
      role: 'Treinador',
      specialty: 'Focado em técnica e competição',
      image: 'https://i.pravatar.cc/400?img=33'
    },
    {
      name: 'Sofia Costa',
      role: 'Coordenadora',
      specialty: 'Gestão de torneios e eventos',
      image: 'https://i.pravatar.cc/400?img=44'
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
            A NOSSA EQUIPA
          </h1>
          <p className="text-xl text-gray-400 tracking-wide max-w-3xl mx-auto">
            Profissionais dedicados e apaixonados por padel, prontos para elevar o teu jogo ao próximo nível
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-spin-black/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-spin-orange mb-6 tracking-tight">A NOSSA MISSÃO</h2>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              Promover o padel através de um ensino de excelência, criando uma comunidade unida 
              e proporcionando experiências memoráveis dentro e fora dos campos. 
              A nossa equipa está comprometida em desenvolver as tuas capacidades e paixão pelo desporto.
            </p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-spin-black/30 rounded-2xl overflow-hidden text-center hover:bg-spin-black/40 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{member.name}</h3>
                <p className="text-spin-orange font-bold mb-4 uppercase text-sm tracking-wide">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.specialty}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-12 tracking-tight">
            OS NOSSOS VALORES
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-spin-blue/20 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h4 className="text-white font-bold text-xl mb-3">Excelência</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Comprometidos com o ensino de alta qualidade e desenvolvimento contínuo
              </p>
            </div>
            <div className="bg-spin-orange/20 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-white font-bold text-xl mb-3">Comunidade</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Criamos um ambiente acolhedor onde todos se sentem parte da família Spin
              </p>
            </div>
            <div className="bg-spin-blue/20 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">💪</div>
              <h4 className="text-white font-bold text-xl mb-3">Paixão</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Vivemos e respiramos padel, transmitindo essa energia a cada aluno
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-bold px-12 py-4 rounded-full hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-2xl uppercase"
          >
            Conhece a Equipa
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
