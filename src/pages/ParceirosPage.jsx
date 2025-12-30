import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const WHATSAPP_NUMBER = '351928439668';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre parcerias com o Spin Padel.';

export default function ParceirosPage() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  // ============================================
  // PARTNERS DATA - Edit this section to add partners
  // ============================================
  // Example partner structure:
  // {
  //   name: 'Partner Name',
  //   category: 'Equipamento',    // Category type
  //   description: 'Description of the partnership benefit',
  //   benefit: '15% OFF',         // The discount or benefit
  //   logo: '/partners/logo.png', // Path to logo image
  //   url: 'https://partner.com', // Partner website (optional)
  // }

  const partners = [
    // Add partners here when available
    // Example:
    // {
    //   name: 'ProPadel Equipment',
    //   category: 'Equipamento',
    //   description: 'Desconto de 15% em todo o equipamento para clientes Spin Padel',
    //   benefit: '15% OFF',
    //   logo: null,
    //   url: null,
    // },
  ];

  // Category icons mapping
  const categoryIcons = {
    'Equipamento': '🎾',
    'Nutrição': '💊',
    'Fitness': '💪',
    'Saúde': '🏥',
    'Roupa': '👕',
    'Tecnologia': '📱',
    'Restauração': '🍽️',
    'Outros': '✨',
  };

  // ============================================
  // END OF PARTNERS DATA
  // ============================================

  const hasPartners = partners.length > 0;

  // Partner categories we're looking for
  const partnerCategories = [
    {
      name: 'Equipamento',
      description: 'Raquetes, bolas, acessórios e material de padel',
      icon: '🎾',
    },
    {
      name: 'Nutrição',
      description: 'Suplementação e nutrição desportiva',
      icon: '💊',
    },
    {
      name: 'Fitness',
      description: 'Ginásios e preparação física',
      icon: '💪',
    },
    {
      name: 'Saúde',
      description: 'Fisioterapia e recuperação desportiva',
      icon: '🏥',
    },
    {
      name: 'Roupa',
      description: 'Vestuário técnico e casual',
      icon: '👕',
    },
    {
      name: 'Restauração',
      description: 'Restaurantes e cafés parceiros',
      icon: '🍽️',
    },
  ];

  return (
    <div className="bg-spin-dark min-h-screen py-20 px-4">
      <SEO
        title="Parceiros"
        description="Torna-te parceiro do Spin Padel e alcança uma comunidade ativa e apaixonada por padel. Oportunidades de parceria disponíveis."
        keywords="parceiros padel, parcerias spin padel, patrocinadores padel"
        url="https://spinpadel.pt/parceiros"
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
            PARCEIROS
          </h1>
          <p className="text-xl text-gray-400 tracking-wide max-w-3xl mx-auto">
            {hasPartners
              ? 'Benefícios exclusivos através das nossas parcerias estratégicas'
              : 'Estamos a construir a nossa rede de parceiros'
            }
          </p>
        </motion.div>

        {hasPartners ? (
          // Show partners if we have them
          <>
            {/* Partners Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {partners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-spin-black/30 rounded-2xl p-8 hover:bg-spin-black/40 transition-all duration-300 relative overflow-hidden"
                >
                  {partner.benefit && (
                    <div className="absolute top-4 right-4 bg-spin-orange text-white px-4 py-2 rounded-full font-bold text-sm">
                      {partner.benefit}
                    </div>
                  )}

                  {/* Logo or Icon */}
                  <div className="h-20 flex items-center justify-center mb-4">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-6xl">
                        {categoryIcons[partner.category] || '✨'}
                      </span>
                    )}
                  </div>

                  <span className="inline-block bg-spin-blue/30 text-spin-blue px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase">
                    {partner.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  {partner.url && (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-spin-orange font-bold text-sm hover:text-white transition-colors uppercase inline-flex items-center gap-1"
                    >
                      Visitar
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          // Show "coming soon" state
          <>
            {/* Coming Soon Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
              <div className="bg-spin-black/30 rounded-2xl p-12 text-center">
                <div className="text-8xl mb-6">🤝</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  Em breve
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                  Estamos a estabelecer parcerias com as melhores marcas e empresas do setor.
                  Em breve teremos benefícios exclusivos para os nossos clientes.
                </p>
              </div>
            </motion.div>

            {/* Categories we're looking for */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight text-center">
                Áreas de Parceria
              </h2>
              <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
                Procuramos parceiros nas seguintes áreas para oferecer benefícios exclusivos aos nossos clientes
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnerCategories.map((category, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                    className="bg-spin-black/20 rounded-xl p-6 text-center border border-white/5"
                  >
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-white font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-500 text-sm">{category.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}

        {/* Become Partner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-spin-orange to-spin-orange/80 rounded-2xl p-12 text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Queres ser nosso parceiro?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Junta-te à nossa rede de parceiros e alcança uma comunidade ativa e apaixonada por padel.
            Oferecemos excelentes oportunidades de visibilidade e negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-spin-orange font-bold px-10 py-4 rounded-full hover:bg-spin-dark hover:text-white transition-all duration-300 shadow-2xl uppercase inline-flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactar via WhatsApp
            </motion.button>
          </div>
        </motion.div>

        {/* Benefits for Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight text-center">
            Porquê ser nosso parceiro?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-spin-black/30 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-white font-bold text-lg mb-3">Comunidade Ativa</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Acesso a uma comunidade de jogadores de padel regulares e entusiastas
              </p>
            </div>
            <div className="bg-spin-black/30 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">📣</div>
              <h4 className="text-white font-bold text-lg mb-3">Visibilidade</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Exposição da sua marca no clube, website e redes sociais
              </p>
            </div>
            <div className="bg-spin-black/30 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-white font-bold text-lg mb-3">Público Segmentado</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Comunicação direta com um público interessado em desporto e bem-estar
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">
            Para propostas de parceria, contacte-nos através de
          </p>
          <a href="mailto:bracosentusiastas@gmail.com" className="text-spin-orange font-bold text-lg hover:text-white transition-colors">
            bracosentusiastas@gmail.com
          </a>
        </motion.div>
      </div>
    </div>
  );
}
