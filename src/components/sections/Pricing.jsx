import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '351928439668';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de fazer uma reserva no Spin Padel.';

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      question: 'O que está incluído na reserva do campo?',
      answer: 'Todas as reservas incluem bolas de padel, acesso a balneários com duches, cacifos e estacionamento gratuito. Os campos têm iluminação LED de alta qualidade para jogos noturnos.'
    },
    {
      question: 'Qual a diferença entre horário Peak e Off-Peak?',
      answer: 'O horário Off-Peak é das 07h00 às 17h00, com preços mais baixos e menor lotação - ideal para treinos matinais tranquilos. O horário Peak é das 17h00 às 23h00, mais procurado por quem joga após o trabalho.'
    },
    {
      question: 'Como faço a reserva?',
      answer: 'As reservas são feitas via WhatsApp para o número +351 928 439 668. Basta indicar a data, hora pretendida e número de jogadores. Receberá confirmação em menos de 1 hora.'
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
      answer: 'Precisa apenas de trazer a sua raquete de padel e roupa desportiva. Fornecemos as bolas. Se não tiver raquete, contacte-nos pois podemos ter disponível para empréstimo.'
    },
    {
      question: 'Existe desconto para reservas regulares?',
      answer: 'Sim, oferecemos condições especiais para grupos que reservam regularmente. Entre em contacto via WhatsApp para saber mais sobre os nossos pacotes.'
    },
    {
      question: 'As aulas são para todos os níveis?',
      answer: 'Sim, temos aulas para iniciantes, intermédios e avançados. Os nossos treinadores adaptam o conteúdo ao seu nível e objetivos.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pricingData = [
    {
      duration: '1h',
      players: [
        { count: '4 jogadores', peak: '€62', offPeak: '€45' },
        { count: '3 jogadores', peak: '€80', offPeak: '€55' },
        { count: '2 jogadores', peak: '€112', offPeak: '€75' },
        { count: '1 jogador', peak: '€215', offPeak: '€150' }
      ]
    },
    {
      duration: '1h30',
      players: [
        { count: '4 jogadores', peak: '€93', offPeak: '€61' },
        { count: '3 jogadores', peak: '€120', offPeak: '€74' },
        { count: '2 jogadores', peak: '€168', offPeak: '€101' },
        { count: '1 jogador', peak: '€323', offPeak: '€203' }
      ]
    },
    {
      duration: '2x 1h',
      players: [
        { count: '4 jogadores', peak: '€118', offPeak: '€77' },
        { count: '3 jogadores', peak: '€152', offPeak: '€94' },
        { count: '2 jogadores', peak: '€213', offPeak: '€128' },
        { count: '1 jogador', peak: '€409', offPeak: '€255' }
      ]
    },
    {
      duration: '2x 1h30',
      players: [
        { count: '4 jogadores', peak: '€177', offPeak: '€103' },
        { count: '3 jogadores', peak: '€228', offPeak: '€126' },
        { count: '2 jogadores', peak: '€319', offPeak: '€172' },
        { count: '1 jogador', peak: '€613', offPeak: '€344' }
      ]
    }
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section id="precos" className="py-20 px-4 bg-spin-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/SpinPadel_Monogram_positive.png" alt="Logótipo Spin Padel Club" className="h-24 md:h-32 w-auto" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            PREÇÁRIO
          </h2>
          <p className="text-2xl md:text-3xl text-white font-light mb-8 tracking-wide">2026</p>
        </motion.div>

        {/* Court Rentals Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            RESERVAS DE CAMPOS
          </h3>
          <p className="text-sm text-gray-400 mb-12">Inclui: Balneários • Duches • Estacionamento gratuito</p>
        </motion.div>

        {/* Court Rental Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8"
        >
          {/* Off-Peak Card */}
          <div className="bg-spin-blue rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-4 h-4 bg-spin-blue border-2 border-white rounded"></div>
              <h4 className="text-2xl font-bold text-white uppercase">Off-Peak</h4>
            </div>
            <p className="text-gray-200 text-sm mb-6">07h00 - 17h00</p>
            <div className="text-6xl font-black text-white mb-2">€30</div>
            <p className="text-white/70 text-lg">1h30 de jogo</p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/60 text-xs">Horário da manhã e início da tarde</p>
            </div>
          </div>

          {/* Peak Card */}
          <div className="bg-spin-orange rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-4 h-4 bg-spin-orange border-2 border-white rounded"></div>
              <h4 className="text-2xl font-bold text-white uppercase">Peak</h4>
            </div>
            <p className="text-gray-100 text-sm mb-6">17h00 - 23h00</p>
            <div className="text-6xl font-black text-white mb-2">€46</div>
            <p className="text-white/70 text-lg">1h30 de jogo</p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/60 text-xs">Horário de fim de tarde e noite</p>
            </div>
          </div>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancelamento gratuito até 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Confirmação imediata</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Pagamento no local</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-bold px-12 py-4 rounded-full hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-2xl uppercase inline-flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Reservar Agora
          </motion.button>
          <p className="text-gray-500 text-sm mt-3">Resposta em menos de 1 hora</p>
        </motion.div>

        {/* Divider */}
        <div className="my-20 border-t border-white/20"></div>

        {/* Classes Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            AULAS
          </h3>
          <p className="text-lg text-gray-400 mb-8 tracking-wide">Preços por sessão com instrutor</p>
          
          {/* Legend */}
          <div className="flex items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-spin-blue rounded"></div>
              <span className="font-medium tracking-wide">Off-Peak</span>
              <span className="text-gray-400 text-sm tracking-wide">07h00 - 17h00</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-spin-orange rounded"></div>
              <span className="font-medium tracking-wide">Peak</span>
              <span className="text-gray-400 text-sm tracking-wide">17h00 - 23h00</span>
            </div>
          </div>
        </motion.div>

        {/* Mobile Pricing Cards */}
        <div className="lg:hidden space-y-6">
          {pricingData.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * rowIndex }}
              className="bg-spin-black/30 rounded-2xl p-6"
            >
              <h4 className="text-2xl font-black text-white mb-4 text-center">{row.duration}</h4>
              <div className="grid grid-cols-2 gap-3">
                {row.players.map((player, playerIndex) => (
                  <div key={playerIndex} className="space-y-2">
                    <div className="text-center text-gray-400 text-xs font-medium uppercase tracking-wide">
                      {player.count}
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="bg-spin-orange rounded-lg p-3 text-center">
                        <div className="text-white font-bold text-lg">{player.peak}</div>
                        <div className="text-white/60 text-xs">Peak</div>
                      </div>
                      <div className="bg-spin-blue rounded-lg p-3 text-center">
                        <div className="text-white font-bold text-lg">{player.offPeak}</div>
                        <div className="text-white/60 text-xs">Off-Peak</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div>
            {/* Table Header */}
            <div className="grid grid-cols-9 gap-4 mb-4">
              <div className="col-span-1"></div>
              {['4 jogadores', '3 jogadores', '2 jogadores', '1 jogador'].map((players, index) => (
                <div key={index} className="col-span-2 text-center">
                  <div className="bg-spin-black/30 rounded-lg py-3 px-2">
                    <h3 className="text-white font-bold text-lg">{players}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Rows */}
            {pricingData.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * rowIndex }}
                className="grid grid-cols-9 gap-4 mb-4"
              >
                {/* Duration */}
                <div className="col-span-1 flex items-center justify-center">
                  <div className="text-white font-bold text-xl">{row.duration}</div>
                </div>

                {/* Pricing Cells */}
                {row.players.map((player, playerIndex) => (
                  <div key={playerIndex} className="col-span-2 grid grid-cols-2 gap-2">
                    {/* Peak */}
                    <div className="bg-spin-orange rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="text-white font-bold text-2xl">{player.peak}</div>
                      <div className="text-white/70 text-xs mt-1">Peak</div>
                    </div>
                    {/* Off-Peak */}
                    <div className="bg-spin-blue rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="text-white font-bold text-2xl">{player.offPeak}</div>
                      <div className="text-white/70 text-xs mt-1">Off-Peak</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-bold px-12 py-4 rounded-full hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-2xl uppercase inline-flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Marcar Aula
          </motion.button>
          <p className="text-gray-500 text-sm mt-3">Fale connosco para mais informações</p>
        </motion.div>

        {/* Divider */}
        <div className="my-20 border-t border-white/20"></div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight text-center">
            PERGUNTAS FREQUENTES
          </h3>
          <p className="text-gray-400 text-center mb-12">
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
                className="bg-spin-black/30 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:ring-2 focus-visible:ring-spin-orange focus-visible:outline-none"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-white font-semibold text-lg pr-4">{faq.question}</span>
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

          {/* More Questions CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10"
          >
            <p className="text-gray-400 mb-4">Ainda tens dúvidas?</p>
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-spin-orange font-bold hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale connosco no WhatsApp
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
