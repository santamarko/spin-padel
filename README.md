# Spin Padel - Landing Page

Landing page moderna e responsiva para o Spin Padel Club, desenvolvida com React, TailwindCSS e Framer Motion.

## 🚀 DEPLOY RÁPIDO (Site Online 24/7)

**Quer colocar o site online agora?**

```bash
# 1. Login no Vercel (abre o browser para autenticar)
vercel login

# 2. Fazer deploy
npm run deploy

# Ou apenas preview:
npm run deploy:preview
```

Depois do deploy, o teu site estará **online 24/7** e acessível de qualquer lugar! 🌍

**Ver guia completo:** [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🎨 Paleta de Cores

- **Azul**: `#1c5ba6`
- **Laranja**: `#ec8026`
- **Off-white**: `#ece9e4`
- **Azul-petróleo escuro**: `#0e2128`
- **Preto profundo**: `#060606`

## 🚀 Como Executar

1. **Instalar dependências:**
```bash
npm install
```

2. **Iniciar o servidor de desenvolvimento:**
```bash
npm run dev
```

3. **Build para produção:**
```bash
npm run build
```

## 📹 Adicionar o Vídeo de Background

Para adicionar o seu vídeo ao Hero Section:

1. Crie uma pasta `public/video/` na raiz do projeto
2. Coloque o seu vídeo com o nome `hero-video.mp4` (ou atualize o caminho em `src/components/Hero.jsx`)
3. Formatos recomendados: MP4 (H.264)
4. Resolução recomendada: 1920x1080 ou superior
5. Tamanho otimizado para web (comprimido)

## 📂 Estrutura do Projeto

```
Spin Padel/
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer
│   │   ├── sections/      # Hero, Features, Pricing, etc.
│   │   └── common/        # Componentes reutilizáveis
│   ├── config/            # Configurações do site
│   ├── constants/         # Dados estáticos (features, pricing, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Layout wrappers
│   ├── pages/             # Páginas da aplicação
│   ├── styles/            # Presets de animação
│   ├── utils/             # Funções auxiliares
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Entry point
│   └── index.css          # Estilos globais
├── public/
│   └── video/             # Vídeos do hero
├── ARCHITECTURE.md        # Documentação da arquitetura
├── DEPLOYMENT.md          # Guia de deploy
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json            # Config de deploy
```

**Ver documentação completa:** [ARCHITECTURE.md](./ARCHITECTURE.md)

## ✨ Funcionalidades

- ✅ Hero section com vídeo background responsivo
- ✅ Animações suaves com Framer Motion
- ✅ Design totalmente responsivo
- ✅ Paleta de cores personalizada do branding
- ✅ Cards de funcionalidades com hover effects
- ✅ CTA section com gradiente
- ✅ Performance otimizada

## 🎯 Próximos Passos

- Adicionar o vídeo de background ao Hero
- Personalizar os textos e informações de contacto
- Adicionar formulário de reserva (opcional)
- Configurar analytics (opcional)
- Adicionar favicon personalizado

## 📱 Compatibilidade

- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1919px)
- ✅ Mobile (320px - 767px)

---

Desenvolvido para **Spin Padel Club** 🎾
