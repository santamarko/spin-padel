import { motion } from 'framer-motion';

export default function BarPage() {
  const menuItems = [
    { category: 'Bebidas', items: [
      { name: 'Água 50cl', price: '€1.50' },
      { name: 'Sumos Naturais', price: '€3.50' },
      { name: 'Café', price: '€1.20' },
      { name: 'Refrigerantes', price: '€2.00' },
      { name: 'Bebidas Energéticas', price: '€2.50' },
    ]},
    { category: 'Snacks', items: [
      { name: 'Croissant', price: '€1.80' },
      { name: 'Tosta Mista', price: '€3.50' },
      { name: 'Sandes Natural', price: '€4.50' },
      { name: 'Barras Proteicas', price: '€2.50' },
      { name: 'Fruta', price: '€2.00' },
    ]},
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
            BAR SPIN PADEL
          </h1>
          <p className="text-xl text-gray-400 tracking-wide">
            Relaxe e recarregue energias após o jogo
          </p>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-spin-black/30 rounded-2xl p-12 text-center">
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              O nosso bar oferece um espaço confortável para conviver com amigos, 
              desfrutar de bebidas refrescantes e snacks deliciosos. 
              Perfeito para antes ou depois dos teus jogos de padel.
            </p>
          </div>
        </motion.div>

        {/* Menu Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-12 tracking-tight">
            MENU
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="bg-spin-black/30 rounded-2xl p-8"
              >
                <h3 className="text-3xl font-bold text-spin-orange mb-6 tracking-tight">
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="text-spin-orange font-bold text-lg">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-spin-blue/20 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🍹</div>
            <h4 className="text-white font-bold text-xl mb-2">Bebidas Frescas</h4>
            <p className="text-gray-400 text-sm">Variedade de bebidas geladas para todos os gostos</p>
          </div>
          <div className="bg-spin-orange/20 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🥪</div>
            <h4 className="text-white font-bold text-xl mb-2">Snacks Saudáveis</h4>
            <p className="text-gray-400 text-sm">Opções nutritivas para recuperar energia</p>
          </div>
          <div className="bg-spin-blue/20 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🪑</div>
            <h4 className="text-white font-bold text-xl mb-2">Ambiente Confortável</h4>
            <p className="text-gray-400 text-sm">Espaço acolhedor para relaxar e socializar</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-bold px-12 py-4 rounded-full hover:bg-spin-orange hover:text-white transition-all duration-300 shadow-2xl uppercase"
          >
            Visita-nos
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
