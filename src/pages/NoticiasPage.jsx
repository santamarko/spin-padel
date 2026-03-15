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
  const ExternalIcon = ({ type }) => {
    const icons = {
      globe: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />,
      trophy: <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-7.54 0" />,
      newspaper: <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />,
      signal: <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />,
    };
    return (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        {icons[type]}
      </svg>
    );
  };

  const externalSources = [
    {
      name: 'Premier Padel',
      description: 'Circuito profissional mundial de padel - resultados, rankings e notícias',
      url: 'https://premierpadel.com/en',
      iconType: 'globe'
    },
    {
      name: 'Federação Portuguesa de Padel',
      description: 'Notícias oficiais, calendário de torneios e rankings nacionais',
      url: 'https://www.fppadel.pt/',
      iconType: 'trophy'
    },
    {
      name: 'Padel FIP',
      description: 'Federação Internacional de Padel - notícias globais',
      url: 'https://www.padelfip.com/news/',
      iconType: 'globe'
    },
    {
      name: 'Padel 365',
      description: 'Portal português com notícias e calendário FPP',
      url: 'https://www.padel365.pt/',
      iconType: 'newspaper'
    },
    {
      name: 'Padel Addict',
      description: 'Notícias, dicas e tudo sobre o mundo do padel',
      url: 'https://www.padeladdict.com/',
      iconType: 'signal'
    },
    {
      name: 'Padel Alto',
      description: 'Cobertura completa do circuito profissional',
      url: 'https://padelalto.com/',
      iconType: 'signal'
    },
  ];

  const handleWhatsAppClick = (message) => {
    const msg = message || 'Olá! Gostaria de mais informações sobre as notícias do Spin Padel.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Torneios': 'bg-spin-orange/20 text-spin-orange',
      'Aulas': 'bg-spin-blue/20 text-spin-blue',
      'Avisos': 'bg-spin-blue/10 text-spin-light-grey',
      'Eventos': 'bg-spin-orange/20 text-spin-orange',
      'Parceiros': 'bg-spin-blue/20 text-spin-blue',
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="bg-spin-deep-blue min-h-screen py-20 px-4">
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
          className="text-center mb-16 pt-8"
        >
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
            className="bg-spin-orange text-white font-heading font-bold px-8 py-3 rounded-full hover:bg-white hover:text-spin-orange transition-all duration-300 inline-flex items-center gap-2"
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
                  <div className="w-10 h-10 text-spin-orange flex-shrink-0">
                    <ExternalIcon type={source.iconType} />
                  </div>
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
