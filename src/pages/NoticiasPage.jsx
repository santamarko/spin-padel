import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const WHATSAPP_NUMBER = '351928439668';

export default function NoticiasPage() {
  // Club announcements - easily editable
  const clubNews = [
    {
      id: 1,
      date: '30 Dez 2024',
      title: 'Boas Festas da Equipa Spin Padel',
      category: 'Avisos',
      excerpt: 'A equipa Spin Padel deseja a todos os nossos jogadores e amigos um excelente Ano Novo! Que 2025 seja cheio de bons jogos e muita diversão nos campos.',
      featured: true
    },
    {
      id: 2,
      date: '15 Dez 2024',
      title: 'Horários Especiais de Natal e Ano Novo',
      category: 'Avisos',
      excerpt: 'Informamos que durante o período de 24 de Dezembro a 1 de Janeiro teremos horários especiais. Consulte-nos via WhatsApp para mais informações.',
      featured: false
    },
    {
      id: 3,
      date: '01 Dez 2024',
      title: 'Novos Grupos de Aulas em Janeiro',
      category: 'Aulas',
      excerpt: 'Estamos a formar novos grupos de iniciação e intermédio para Janeiro de 2025. Vagas limitadas - inscreva-se já!',
      featured: false
    },
    {
      id: 4,
      date: '20 Nov 2024',
      title: 'Torneio de Natal Spin Padel',
      category: 'Torneios',
      excerpt: 'Inscrições abertas para o nosso tradicional Torneio de Natal. Categorias masculina, feminina e mista. Prémios para os vencedores!',
      featured: false
    },
  ];

  // External padel news sources
  const externalSources = [
    {
      name: 'Premier Padel',
      description: 'Circuito profissional mundial de padel - resultados, rankings e notícias',
      url: 'https://premierpadel.com/en',
      icon: '🌍'
    },
    {
      name: 'Federação Portuguesa de Padel',
      description: 'Notícias oficiais, calendário de torneios e rankings nacionais',
      url: 'https://www.fppadel.pt/',
      icon: '🇵🇹'
    },
    {
      name: 'Padel FIP',
      description: 'Federação Internacional de Padel - notícias globais',
      url: 'https://www.padelfip.com/news/',
      icon: '🏆'
    },
    {
      name: 'Padel 365',
      description: 'Portal português com notícias e calendário FPP',
      url: 'https://www.padel365.pt/',
      icon: '📰'
    },
    {
      name: 'Padel Addict',
      description: 'Notícias, dicas e tudo sobre o mundo do padel',
      url: 'https://www.padeladdict.com/',
      icon: '🎾'
    },
    {
      name: 'Padel Alto',
      description: 'Cobertura completa do circuito profissional',
      url: 'https://padelalto.com/',
      icon: '📺'
    },
  ];

  const handleWhatsAppClick = (message) => {
    const msg = message || 'Olá! Gostaria de mais informações sobre as notícias do Spin Padel.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Torneios': 'bg-spin-orange/20 text-spin-orange',
      'Aulas': 'bg-green-500/20 text-green-400',
      'Avisos': 'bg-spin-blue/20 text-spin-blue',
      'Eventos': 'bg-purple-500/20 text-purple-400',
      'Parceiros': 'bg-yellow-500/20 text-yellow-400',
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="bg-spin-dark min-h-screen py-20 px-4">
      <SEO
        title="Notícias"
        description="Fica a par das últimas novidades, eventos e torneios do Spin Padel. Acompanha todas as notícias do mundo do padel."
        keywords="notícias padel, eventos padel, torneios padel, spin padel novidades"
        url="https://spinpadel.pt/noticias"
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
            NOTÍCIAS
          </h1>
          <p className="text-xl text-gray-400 tracking-wide">
            Novidades do clube e do mundo do padel
          </p>
        </motion.div>

        {/* Featured News */}
        {clubNews.filter(n => n.featured).map((news) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-spin-orange to-spin-orange/80 rounded-2xl p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-bold">
                  DESTAQUE
                </span>
                <span className="text-white/80 text-sm">{news.date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                {news.title}
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-3xl">
                {news.excerpt}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Club News Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">
            NOTÍCIAS DO CLUBE
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubNews.filter(n => !n.featured).map((news, idx) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="bg-spin-black/30 rounded-2xl p-6 hover:bg-spin-black/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">{news.date}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getCategoryColor(news.category)}`}>
                    {news.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight leading-tight">
                  {news.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {news.excerpt}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA for Club News */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-spin-black/30 rounded-2xl p-8 text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Queres saber mais sobre eventos e torneios?
          </h3>
          <p className="text-gray-400 mb-6">
            Entra em contacto connosco para receberes informações sobre as próximas atividades
          </p>
          <motion.button
            onClick={() => handleWhatsAppClick('Olá! Gostaria de receber informações sobre eventos e torneios do Spin Padel.')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-spin-orange text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-spin-orange transition-all duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contactar via WhatsApp
          </motion.button>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12"></div>

        {/* External News Sources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            NOTÍCIAS DO MUNDO DO PADEL
          </h2>
          <p className="text-gray-400 mb-8">
            Acompanha as últimas novidades do circuito profissional e do padel em Portugal
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalSources.map((source, idx) => (
              <motion.a
                key={idx}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-spin-black/30 rounded-2xl p-6 hover:bg-spin-black/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{source.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-spin-orange transition-colors flex items-center gap-2">
                      {source.name}
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {source.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-gray-500 text-sm">
            As notícias externas são da responsabilidade dos respetivos sites.
            O Spin Padel não se responsabiliza pelo conteúdo de sites externos.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
