import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const WHATSAPP_NUMBER = '351928439668';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre a equipa do Spin Padel.';

export default function EquipaPage() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  // ============================================
  // TEAM DATA - Edit this section to update team members
  // Add image path like: '/team/name.jpg' and place images in public/team/
  // ============================================

  const team = [
    {
      name: 'Gonçalo Bettencourt',
      role: 'Diretor Desportivo',
      image: null,
    },
    {
      name: 'Rodrigo Mendes',
      role: 'Marketing & Comunicação',
      image: null,
    },
    {
      name: 'Em breve',
      role: 'Treinador',
      image: null,
      placeholder: true,
    },
    {
      name: 'Em breve',
      role: 'Treinador',
      image: null,
      placeholder: true,
    },
    {
      name: 'Em breve',
      role: 'Rececionista',
      image: null,
      placeholder: true,
    },
    {
      name: 'Em breve',
      role: 'Rececionista',
      image: null,
      placeholder: true,
    },
    {
      name: 'Em breve',
      role: 'Rececionista',
      image: null,
      placeholder: true,
    },
  ];

  // ============================================
  // END OF TEAM DATA
  // ============================================

  const TeamCard = ({ member, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: member.placeholder ? 1 : 1.03 }}
      className={`rounded-xl overflow-hidden text-center transition-all duration-300 bg-spin-black/30 hover:bg-spin-black/40 ${member.placeholder ? 'opacity-50' : ''}`}
    >
      {/* Photo or Placeholder */}
      <div className="aspect-square flex items-center justify-center bg-spin-black/50">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center p-4">
            <svg className={`w-12 h-12 mx-auto ${member.placeholder ? 'text-gray-600' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className={`text-sm font-bold mb-1 tracking-tight ${member.placeholder ? 'text-gray-500' : 'text-white'}`}>
          {member.name}
        </h3>
        <p className="text-spin-orange font-bold uppercase text-xs tracking-wide">
          {member.role}
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-spin-dark min-h-screen py-20 px-4">
      <SEO
        title="Equipa"
        description="Conhece a equipa de profissionais do Spin Padel. Uma equipa dedicada e apaixonada por padel, pronta para te receber."
        keywords="equipa padel, treinadores padel, spin padel equipa"
        url="https://spinpadel.pt/equipa"
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            A NOSSA EQUIPA
          </h1>
          <p className="text-xl text-gray-400 tracking-wide max-w-3xl mx-auto">
            Profissionais dedicados e apaixonados por padel
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
              Promover o padel através de um serviço de excelência, criando uma comunidade unida
              e proporcionando experiências memoráveis dentro e fora dos campos.
              A nossa equipa está comprometida em fazer do Spin Padel a tua casa no padel.
            </p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {team.map((member, idx) => (
              <TeamCard
                key={idx}
                member={member}
                delay={0.3 + idx * 0.05}
              />
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-12 tracking-tight">
            OS NOSSOS VALORES
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-spin-black/30 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h4 className="text-white font-bold text-xl mb-3">Excelência</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Comprometidos com um serviço de alta qualidade em todas as interações
              </p>
            </div>
            <div className="bg-spin-black/30 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-white font-bold text-xl mb-3">Comunidade</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Criamos um ambiente acolhedor onde todos se sentem parte da família Spin
              </p>
            </div>
            <div className="bg-spin-black/30 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">💪</div>
              <h4 className="text-white font-bold text-xl mb-3">Paixão</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Vivemos e respiramos padel, transmitindo essa energia a cada cliente
              </p>
            </div>
          </div>
        </motion.div>

        {/* Join the Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-spin-orange to-spin-orange/80 rounded-2xl p-12 text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Queres fazer parte da equipa?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Estamos sempre à procura de pessoas apaixonadas por padel e pelo atendimento ao cliente.
            Envia-nos o teu CV!
          </p>
          <motion.a
            href="mailto:gestao@spinpadel.pt"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-bold px-12 py-4 rounded-full hover:bg-spin-dark hover:text-white transition-all duration-300 shadow-2xl uppercase inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            gestao@spinpadel.pt
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
