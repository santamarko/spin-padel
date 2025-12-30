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
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/SpinPadel_Monogram_positive.png" alt="Spin Padel" className="h-24 md:h-32 w-auto" />
          </div>
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
            Entra em contacto connosco!
          </p>
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-spin-orange font-bold px-12 py-4 rounded-full hover:bg-spin-dark hover:text-white transition-all duration-300 shadow-2xl uppercase inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Candidatar-me
          </motion.button>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">
            Para candidaturas, envia o teu CV para{' '}
            <a href="mailto:bracosentusiastas@gmail.com" className="text-spin-orange hover:text-white transition-colors">
              bracosentusiastas@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
