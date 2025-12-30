export const features = [
  {
    title: 'Campos de Excelência',
    description: 'Oito campos panorâmicos de última geração com superfície Mondo Premier, a melhor da indústria. Iluminação LED profissional e manutenção diária garantem a experiência de jogo perfeita.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      </svg>
    ),
    delay: 0.2,
    gradient: 'bg-white',
    isWhite: true,
    image: null
  },
  {
    title: 'Aulas & Treinos',
    description: 'Evolui o teu jogo com treinadores profissionais certificados. Do iniciante ao avançado, planos personalizados que aceleram o teu progresso.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    delay: 0.4,
    gradient: 'bg-spin-orange',
    isWhite: false,
    image: null
  },
  {
    title: 'Comunidade Ativa',
    description: 'Torneios semanais, eventos sociais e uma comunidade apaixonada pelo padel. Faz parte de algo maior, conhece jogadores e cria amizades para a vida.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    delay: 0.6,
    gradient: 'bg-spin-blue',
    isWhite: false,
    image: null
  }
];
