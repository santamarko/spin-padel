import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '351928439668';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de fazer uma reserva no Spin Padel.';

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      question: 'O que está incluído na reserva do campo?',
      answer: 'Os campos têm iluminação LED de alta qualidade para jogos noturnos. Em caso de necessidade, o cliente pode comprar packs de bolas, grips ou outros acessórios à prática desportiva.'
    },
    {
      question: 'Qual a diferença entre horário Peak e Off-Peak?',
      answer: 'O horário Off-Peak é das 07h00 às 17h00, com preços mais baixos e menor lotação - ideal para treinos matinais tranquilos. O horário Peak é das 17h00 às 23h00, mais procurado por quem joga após o trabalho.'
    },
    {
      question: 'Como faço a reserva?',
      answer: 'As reservas podem ser feitas pela plataforma Playtomic ou via WhatsApp para o número +351 928 439 668. Na plataforma, pode fazer a reserva diretamente. Por WhatsApp, basta indicar a data, hora pretendida e número de jogadores.'
    },
    {
      question: 'Posso cancelar a minha reserva?',
      answer: 'Sim, pode cancelar gratuitamente até 24 horas antes da reserva. Cancelamentos com menos de 24 horas podem estar sujeitos a taxa.'
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'O pagamento é feito no local, após o jogo. Aceitamos dinheiro, Multibanco e MB Way.'
    },
    {
      question: 'Preciso de trazer equipamento próprio?',
      answer: 'Precisa de trazer a sua raquete de padel e roupa desportiva. Se não tiver raquete, oferecemos aluguer de raquetes por €3. Vendemos bolas, grips e outro material desportivo na nossa loja.'
    },
    {
      question: 'É possível fazer marcação de um jogo regular semanal?',
      answer: 'Sim, é possível fazer marcações regulares semanais. Entre em contacto connosco via WhatsApp para marcar o seu jogo recorrente.'
    },
    {
      question: 'As aulas são para todos os níveis?',
      answer: 'Sim, temos aulas para iniciantes, intermédios e avançados. Os nossos treinadores adaptam o conteúdo ao seu nível e objetivos.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const classesData = [
    {
      duration: '1h',
      players: [
        { peak: '€62', offPeak: '€50' },
        { peak: '€80', offPeak: '€60' },
        { peak: '€112', offPeak: '€75' },
        { peak: '€215', offPeak: '€170' }
      ]
    },
    {
      duration: '1h30',
      players: [
        { peak: '€93', offPeak: '€75' },
        { peak: '€120', offPeak: '€90' },
        { peak: '€168', offPeak: '€110' },
        { peak: '€325', offPeak: '€255' }
      ]
    },
    {
      duration: '2x 1h',
      players: [
        { peak: '€112', offPeak: '€90' },
        { peak: '€144', offPeak: '€108' },
        { peak: '€202', offPeak: '€135' },
        { peak: '€387', offPeak: '€306' }
      ]
    },
    {
      duration: '2x 1h30',
      players: [
        { peak: '€167', offPeak: '€135' },
        { peak: '€216', offPeak: '€162' },
        { peak: '€302', offPeak: '€198' },
        { peak: '€585', offPeak: '€459' }
      ]
    }
  ];

  const courtRentals = [
    { duration: '1h', peak: '€32', offPeak: '€24' },
    { duration: '1h30', peak: '€46', offPeak: '€34' },
    { duration: '2h', peak: '€60', offPeak: '€40' },
  ];

  const playerHeaders = ['4 jogadores', '3 jogadores', '2 jogadores', '1 jogador'];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section id="precos" className="relative py-24 px-4 bg-gradient-to-b from-spin-deep-blue from-60% to-spin-teal to-100%">
      {/* Background text effect — matches Features section pattern */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="text-[12rem] md:text-[20rem] font-black text-white/[0.02] leading-none whitespace-nowrap select-none">
          SPIN PADEL
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ===== PAGE HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-3 tracking-tight text-center">
            PREÇÁRIO
          </h1>
          <p className="text-lg text-white/70 tracking-widest text-center">2026</p>
        </motion.div>

        {/* ===== ALUGUERES SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight">
            ALUGUER DE <span className="text-spin-blue">CAMPOS</span>
          </h2>

          {/* Peak / Off-Peak legend */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-spin-orange rounded-full"></div>
              <span><strong className="text-white">Peak</strong> 17h00 - 23h00</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-spin-blue rounded-full"></div>
              <span><strong className="text-white">Off-Peak</strong> 07h00 - 17h00</span>
            </div>
          </div>
        </motion.div>

        {/* Court Rental Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {courtRentals.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-spin-black/30 backdrop-blur rounded-2xl p-8 text-center transition-transform"
            >
              <div className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">{row.duration}</div>
              <div className="flex items-center justify-center gap-4">
                <div>
                  <div className="text-4xl font-black text-spin-orange">{row.peak}</div>
                  <div className="text-xs text-gray-500 mt-1">Peak</div>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <div className="text-4xl font-black text-spin-blue">{row.offPeak}</div>
                  <div className="text-xs text-gray-500 mt-1">Off-Peak</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Racket Rental — small card block matching court rental cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xs mx-auto mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-spin-black/30 backdrop-blur rounded-2xl px-6 py-4 text-center transition-transform"
          >
            <div className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Aluguer de raquete</div>
            <div className="text-2xl font-black text-white">€3</div>
          </motion.div>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-10"
        >
          {['Cancelamento gratuito até 24h', 'Confirmação imediata', 'Pagamento no local'].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-spin-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA — matches Hero button pattern */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-32"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white rounded-full translate-x-1 translate-y-1"></div>
            <motion.button
              onClick={handleWhatsAppClick}
              whileTap={{ scale: 0.95 }}
              className="relative bg-spin-orange text-white font-heading font-bold px-12 py-4 rounded-full shadow-2xl transition-all duration-300 uppercase inline-flex items-center gap-3 hover:bg-white hover:text-spin-orange focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Reservar Agora
            </motion.button>
          </div>
          <p className="text-gray-500 text-sm mt-3">Resposta em menos de 1 hora</p>
        </motion.div>

        {/* ===== AULAS SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-4 tracking-tight">
            AULAS DE <span className="text-spin-orange">PADEL</span>
          </h2>
          <p className="text-xl text-gray-400 mb-6">
            Mensalidade por jogador
          </p>

          {/* Peak / Off-Peak legend */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-spin-orange rounded-full"></div>
              <span><strong className="text-white">Peak</strong> 17h00 - 23h00</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-spin-blue rounded-full"></div>
              <span><strong className="text-white">Off-Peak</strong> 07h00 - 17h00</span>
            </div>
          </div>
        </motion.div>

        {/* Adultos Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white text-center">Adultos</h3>
        </motion.div>

        {/* Classes Pricing Cards — card-based layout replacing 9-column table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {classesData.map((row, rowIdx) => (
            <motion.div
              key={rowIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: rowIdx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-spin-black/30 backdrop-blur rounded-2xl p-6 transition-transform"
            >
              <h4 className="text-2xl font-black text-white mb-5 text-center">{row.duration}</h4>
              <div className="grid grid-cols-2 gap-4">
                {row.players.map((player, pIdx) => (
                  <div key={pIdx} className="text-center">
                    <div className="text-gray-400 text-xs mb-2">{playerHeaders[pIdx]}</div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-spin-orange font-bold">{player.peak}</span>
                      <span className="text-gray-600">/</span>
                      <span className="text-spin-blue font-bold">{player.offPeak}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Juvenil + Packs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {/* Juvenil */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-spin-black/30 backdrop-blur rounded-2xl p-8 transition-transform"
          >
            <h4 className="text-2xl font-heading font-bold text-white text-center mb-1">Juvenil</h4>
            <p className="text-gray-500 text-sm text-center mb-6">Até aos 15 anos, 4-6 alunos por aula</p>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/5 rounded-xl px-6 py-4">
                <span className="text-white font-medium">1x semana</span>
                <span className="text-spin-orange font-black text-2xl">€45</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-xl px-6 py-4">
                <span className="text-white font-medium">2x semana</span>
                <span className="text-spin-orange font-black text-2xl">€85</span>
              </div>
            </div>

            <p className="text-gray-500 text-xs text-center mt-5">
              Seg. a Sex. 16h - 19h &nbsp;|&nbsp; Sábado 9h - 13h
            </p>
          </motion.div>

          {/* Packs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-spin-black/30 backdrop-blur rounded-2xl p-8 transition-transform"
          >
            <h4 className="text-2xl font-heading font-bold text-white text-center mb-1">Packs</h4>
            <p className="text-gray-500 text-sm text-center mb-6">5 aulas de 1h</p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-white font-medium text-sm mb-4">1 pessoa</div>
                <div className="space-y-2">
                  <div className="bg-spin-black/30 backdrop-blur rounded-xl py-3">
                    <div className="text-spin-orange font-bold text-xl">€220</div>
                    <div className="text-gray-500 text-[10px]">Peak</div>
                  </div>
                  <div className="bg-spin-black/30 backdrop-blur rounded-xl py-3">
                    <div className="text-spin-blue font-bold text-xl">€180</div>
                    <div className="text-gray-500 text-[10px]">Off-Peak</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-white font-medium text-sm mb-4">2 pessoas</div>
                <div className="space-y-2">
                  <div className="bg-spin-black/30 backdrop-blur rounded-xl py-3">
                    <div className="text-spin-orange font-bold text-xl">€170</div>
                    <div className="text-gray-500 text-[10px]">Peak</div>
                  </div>
                  <div className="bg-spin-black/30 backdrop-blur rounded-xl py-3">
                    <div className="text-spin-blue font-bold text-xl">€100</div>
                    <div className="text-gray-500 text-[10px]">Off-Peak</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Aulas Avulso + Experimental + Pro Game */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {/* Aulas Avulso */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-spin-black/30 backdrop-blur rounded-2xl p-6 text-center transition-transform"
          >
            <h4 className="text-white font-bold text-lg mb-1">Aulas Avulso</h4>
            <p className="text-gray-500 text-xs mb-4">1h de aula</p>
            <div className="flex items-center justify-center gap-4">
              <div>
                <div className="text-2xl font-black text-spin-orange">€60</div>
                <div className="text-xs text-gray-500">Peak</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-2xl font-black text-spin-blue">€40</div>
                <div className="text-xs text-gray-500">Off-Peak</div>
              </div>
            </div>
          </motion.div>

          {/* Aula Experimental */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-spin-black/30 backdrop-blur rounded-2xl p-6 text-center transition-transform"
          >
            <h4 className="text-white font-bold text-lg mb-1">Aula Experimental</h4>
            <p className="text-gray-500 text-xs mb-4">1h de aula</p>
            <div className="text-3xl font-black text-white">€20</div>
          </motion.div>

          {/* Pro Game */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-spin-black/30 backdrop-blur rounded-2xl p-6 text-center transition-transform"
          >
            <h4 className="text-white font-bold text-lg mb-1">Pro Game</h4>
            <p className="text-gray-500 text-xs mb-4">1h30</p>
            <div className="text-3xl font-black text-white">€20</div>
            <p className="text-gray-500 text-xs mt-3">1 treinador + 3 jogadores + bolas novas</p>
          </motion.div>
        </div>

        {/* CTA — matches Hero button pattern */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-32"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white rounded-full translate-x-1 translate-y-1"></div>
            <motion.button
              onClick={handleWhatsAppClick}
              whileTap={{ scale: 0.95 }}
              className="relative bg-spin-orange text-white font-heading font-bold px-12 py-4 rounded-full shadow-2xl transition-all duration-300 uppercase inline-flex items-center gap-3 hover:bg-white hover:text-spin-orange focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Marcar Aula
            </motion.button>
          </div>
        </motion.div>

        {/* ===== FAQ SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4 tracking-tight text-center">
            PERGUNTAS <span className="text-spin-orange">FREQUENTES</span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12">
            Tudo o que precisa de saber sobre reservas e aulas
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-spin-black/30 backdrop-blur rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-white font-bold text-lg pr-4">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-spin-orange"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* More Questions CTA — matches Hero button pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white rounded-full translate-x-1 translate-y-1"></div>
              <motion.button
                onClick={handleWhatsAppClick}
                whileTap={{ scale: 0.95 }}
                className="relative bg-spin-orange text-white font-heading font-bold px-12 py-4 rounded-full shadow-2xl transition-all duration-300 uppercase inline-flex items-center gap-3 hover:bg-white hover:text-spin-orange focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Fale Connosco
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
