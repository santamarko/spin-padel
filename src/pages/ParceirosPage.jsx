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

  // Category SVG icons
  const CategoryIcon = ({ category }) => {
    const iconPaths = {
      'Equipamento': <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />,
      'Nutrição': <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />,
      'Fitness': <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />,
      'Saúde': <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
      'Roupa': <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />,
      'Tecnologia': <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />,
      'Restauração': <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12" />,
    };
    return (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        {iconPaths[category] || <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />}
      </svg>
    );
  };

  // ============================================
  // END OF PARTNERS DATA
  // ============================================

  const hasPartners = partners.length > 0;

  // Partner categories we're looking for
  const partnerCategories = [
    { name: 'Equipamento', description: 'Raquetes, bolas, acessórios e material de padel' },
    { name: 'Nutrição', description: 'Suplementação e nutrição desportiva' },
    { name: 'Fitness', description: 'Ginásios e preparação física' },
    { name: 'Saúde', description: 'Fisioterapia e recuperação desportiva' },
    { name: 'Roupa', description: 'Vestuário técnico e casual' },
    { name: 'Restauração', description: 'Restaurantes e cafés parceiros' },
  ];

  return (
    <div className="bg-spin-deep-blue min-h-screen py-20 px-4">
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
          className="text-center mb-16 pt-8"
        >
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
                      <div className="w-16 h-16 text-spin-orange">
                        <CategoryIcon category={partner.category} />
                      </div>
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
                <div className="w-20 h-20 mx-auto mb-6 text-spin-orange">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
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
                    <div className="w-10 h-10 mx-auto mb-3 text-spin-orange">
                      <CategoryIcon category={category.name} />
                    </div>
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
              className="bg-white text-black font-heading font-bold px-10 py-4 rounded-full hover:bg-spin-dark hover:text-white transition-all duration-300 shadow-2xl uppercase inline-flex items-center gap-3"
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
              <div className="w-12 h-12 mx-auto mb-4 text-spin-orange">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h4 className="text-white font-bold text-lg mb-3">Comunidade Ativa</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Acesso a uma comunidade de jogadores de padel regulares e entusiastas
              </p>
            </div>
            <div className="bg-spin-black/30 rounded-xl p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-spin-orange">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                </svg>
              </div>
              <h4 className="text-white font-bold text-lg mb-3">Visibilidade</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Exposição da sua marca no clube, website e redes sociais
              </p>
            </div>
            <div className="bg-spin-black/30 rounded-xl p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-spin-orange">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>
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
          <p className="text-gray-400 mb-6">
            Para propostas de parceria, contacte-nos:
          </p>
          <motion.a
            href="mailto:info@spinpadel.pt"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2.5 rounded-full font-heading font-bold hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-lg uppercase inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@spinpadel.pt
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
