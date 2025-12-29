import { motion } from 'framer-motion';

const Pricing = () => {
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
            <img src="/SpinPadel_Monogram_positive.png" alt="Spin Padel" className="h-24 md:h-32 w-auto" />
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
          <p className="text-lg text-gray-400 mb-12 tracking-wide">Aluguer de campo por hora</p>
        </motion.div>

        {/* Court Rental Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
        >
          {/* Off-Peak Card */}
          <div className="bg-spin-blue rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-4 h-4 bg-spin-blue border-2 border-white rounded"></div>
              <h4 className="text-2xl font-bold text-white uppercase">Off-Peak</h4>
            </div>
            <p className="text-gray-300 text-sm mb-6">07h00 - 17h00</p>
            <div className="text-6xl font-black text-white mb-2">€30</div>
            <p className="text-white/70 text-lg">por hora</p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white text-sm">Ideal para treinos matinais</p>
            </div>
          </div>

          {/* Peak Card */}
          <div className="bg-spin-orange rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-4 h-4 bg-spin-orange border-2 border-white rounded"></div>
              <h4 className="text-2xl font-bold text-white uppercase">Peak</h4>
            </div>
            <p className="text-gray-100 text-sm mb-6">17h00 - 23h00</p>
            <div className="text-6xl font-black text-white mb-2">€45</div>
            <p className="text-white/70 text-lg">por hora</p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white text-sm">Horário premium</p>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-bold px-12 py-4 rounded-full hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-2xl uppercase"
          >
            Reservar Agora
          </motion.button>
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

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[900px]">
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-bold px-12 py-4 rounded-full hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-2xl uppercase"
          >
            Reservar Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
