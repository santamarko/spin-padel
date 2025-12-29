# Spin Padel - Architecture Documentation

**Version:** 2.0
**Last Updated:** 2025-12-29
**Project:** Spin Padel Club Website

---

## Table of Contents

1. [Overview](#overview)
2. [Folder Structure](#folder-structure)
3. [Architecture Principles](#architecture-principles)
4. [Component Organization](#component-organization)
5. [Data Flow](#data-flow)
6. [Import Patterns](#import-patterns)
7. [Adding New Features](#adding-new-features)
8. [Best Practices](#best-practices)

---

## Overview

The Spin Padel website follows a **scalable, modular architecture** designed for maintainability and growth. The codebase is organized into clear, logical layers that separate concerns and promote code reusability.

### Key Improvements

- **Centralized Data Management:** All static content is stored in `/constants`
- **Reusable Hooks:** Custom hooks extracted for shared logic
- **Configuration Files:** Site settings and routes are configurable
- **Component Organization:** Components categorized by purpose (layout, sections, common)
- **Clean Imports:** Barrel exports for simplified import statements
- **Layout Abstraction:** MainLayout wrapper eliminates repetition

---

## Folder Structure

```
Spin Padel/
├── public/
│   ├── video/                    # Video assets
│   │   ├── hero-video-1.mp4
│   │   └── hero-video-2.mp4
│   └── Spin Padel Logos/         # Logo files
│
├── src/
│   ├── assets/                   # Static assets
│   │   ├── images/              # Image files
│   │   └── icons/               # Icon components/files
│   │
│   ├── components/              # UI Components
│   │   ├── common/              # Reusable generic components
│   │   │   └── (buttons, cards, inputs, etc.)
│   │   │
│   │   ├── layout/              # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── index.js         # Barrel export
│   │   │
│   │   └── sections/            # Page section components
│   │       ├── Hero.jsx
│   │       ├── Features.jsx
│   │       ├── CTA.jsx
│   │       ├── Pricing.jsx
│   │       ├── Newsletter.jsx
│   │       ├── SocialFeed.jsx
│   │       └── index.js         # Barrel export
│   │
│   ├── config/                  # Configuration files
│   │   ├── site.config.js       # Site metadata, contact, social links
│   │   ├── routes.config.js     # Route definitions
│   │   └── index.js             # Barrel export
│   │
│   ├── constants/               # Static data
│   │   ├── features.js          # Features content
│   │   ├── pricing.js           # Pricing plans
│   │   ├── team.js              # Team members data
│   │   ├── partners.js          # Partners/sponsors data
│   │   └── index.js             # Barrel export
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useVideoCarousel.js  # Video carousel logic
│   │
│   ├── layouts/                 # Page layout wrappers
│   │   └── MainLayout.jsx       # Navbar + content + Footer wrapper
│   │
│   ├── pages/                   # Route-level page components
│   │   ├── Home.jsx
│   │   ├── PricingPage.jsx
│   │   ├── BarPage.jsx
│   │   ├── EquipaPage.jsx
│   │   ├── NoticiasPage.jsx
│   │   └── ParceirosPage.jsx
│   │
│   ├── styles/                  # Style utilities
│   │   └── animations.js        # Framer Motion animation presets
│   │
│   ├── utils/                   # Helper functions
│   │   └── helpers.js           # Utility functions (formatting, validation, etc.)
│   │
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles
│
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── CLAUDE.md                    # Project instructions for Claude
└── ARCHITECTURE.md              # This file
```

---

## Architecture Principles

### 1. Separation of Concerns

**Components** handle UI rendering only. Business logic and data are extracted into:
- **Constants:** Static content and data
- **Hooks:** Reusable stateful logic
- **Utils:** Pure utility functions

### 2. Single Responsibility

Each file has one clear purpose:
- Components render UI
- Hooks manage state/side effects
- Constants store data
- Utils provide transformations

### 3. DRY (Don't Repeat Yourself)

- Shared data is centralized in `/constants`
- Repeated logic is extracted to `/hooks`
- Common UI patterns go in `/components/common`
- Animation presets defined in `/styles/animations.js`

### 4. Scalability

The structure supports growth:
- New page sections → `/components/sections`
- New reusable components → `/components/common`
- New data types → `/constants`
- New hooks → `/hooks`

### 5. Maintainability

- Clear naming conventions
- Logical folder hierarchy
- Barrel exports for clean imports
- Configuration over hardcoding

---

## Component Organization

### Layout Components (`/components/layout`)

**Purpose:** Structural components that define page layout

**Files:**
- `Navbar.jsx` - Site navigation
- `Footer.jsx` - Site footer

**When to add here:** Components that appear on every page and define structure

---

### Section Components (`/components/sections`)

**Purpose:** Major page sections with specific functionality

**Files:**
- `Hero.jsx` - Homepage hero with video carousel
- `Features.jsx` - Feature cards display
- `Pricing.jsx` - Pricing tables
- `CTA.jsx` - Call-to-action sections
- `Newsletter.jsx` - Newsletter signup
- `SocialFeed.jsx` - Social media feed

**When to add here:** Large, standalone sections that appear on specific pages

---

### Common Components (`/components/common`)

**Purpose:** Reusable UI components (future use)

**Examples:**
- Buttons (PrimaryButton, SecondaryButton)
- Form inputs (TextField, TextArea)
- Cards (Card, IconCard)
- Modals (Modal, Dialog)
- Loading indicators

**When to add here:** Small, reusable UI elements used across multiple sections

---

## Data Flow

### 1. Static Content Flow

```
constants/*.js → Component imports → Component renders
```

**Example:**
```jsx
// constants/features.js
export const features = [...]

// components/sections/Features.jsx
import { features } from '../../constants';

const Features = () => {
  return features.map(feature => <FeatureCard {...feature} />)
}
```

### 2. Configuration Flow

```
config/*.js → Component imports → Component uses config
```

**Example:**
```jsx
// config/site.config.js
export const siteConfig = { videos: { hero: [...] } }

// components/sections/Hero.jsx
import { siteConfig } from '../../config';

const videos = siteConfig.videos.hero;
```

### 3. Custom Hook Flow

```
hooks/*.js → Component imports → Component uses hook
```

**Example:**
```jsx
// hooks/useVideoCarousel.js
export const useVideoCarousel = (videos) => { ... }

// components/sections/Hero.jsx
import { useVideoCarousel } from '../../hooks/useVideoCarousel';

const { activeVideo, handleVideoEnd } = useVideoCarousel(videos);
```

### 4. Layout Flow

```
App.jsx → MainLayout → Pages → Sections
```

**Structure:**
```jsx
<App>
  <MainLayout>  {/* Includes Navbar & Footer */}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Home renders Hero, Features, etc. */}
    </Routes>
  </MainLayout>
</App>
```

---

## Import Patterns

### Barrel Exports

Each major folder has an `index.js` that exports all contents:

```js
// components/sections/index.js
export { default as Hero } from './Hero';
export { default as Features } from './Features';
export { default as Pricing } from './Pricing';
// ... etc
```

### Clean Imports

**Before reorganization:**
```jsx
import Hero from '../components/Hero';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';
```

**After reorganization:**
```jsx
import { Hero, Features, Newsletter } from '../components/sections';
```

### Import Best Practices

1. **Group imports by type:**
   ```jsx
   // External libraries
   import { motion } from 'framer-motion';
   import { useState } from 'react';

   // Internal - Hooks
   import { useVideoCarousel } from '../../hooks/useVideoCarousel';

   // Internal - Components
   import { Navbar, Footer } from '../components/layout';

   // Internal - Data/Config
   import { features } from '../../constants';
   import { siteConfig } from '../../config';
   ```

2. **Use named imports for barrel exports:**
   ```jsx
   import { Hero, Features } from '../components/sections';
   ```

3. **Use default imports for single components:**
   ```jsx
   import MainLayout from './layouts/MainLayout';
   ```

---

## Adding New Features

### Adding a New Page

1. **Create page component** in `/src/pages/`:
   ```jsx
   // pages/ContactPage.jsx
   import { Newsletter } from '../components/sections';

   export default function ContactPage() {
     return (
       <div>
         <h1>Contact Us</h1>
         <Newsletter />
       </div>
     );
   }
   ```

2. **Add route** in `App.jsx`:
   ```jsx
   import ContactPage from './pages/ContactPage';

   // In Routes:
   <Route path="/contacto" element={<ContactPage />} />
   ```

3. **Add to routes config** (optional):
   ```js
   // config/routes.config.js
   {
     path: '/contacto',
     name: 'Contact',
     label: 'Contacto',
     showInNav: true
   }
   ```

4. **Update Navbar** to include link

---

### Adding a New Section Component

1. **Create component** in `/src/components/sections/`:
   ```jsx
   // components/sections/Testimonials.jsx
   import { motion } from 'framer-motion';

   const Testimonials = () => {
     return (
       <section className="py-20">
         {/* Component content */}
       </section>
     );
   };

   export default Testimonials;
   ```

2. **Add to barrel export:**
   ```js
   // components/sections/index.js
   export { default as Testimonials } from './Testimonials';
   ```

3. **Use in pages:**
   ```jsx
   import { Testimonials } from '../components/sections';

   <Testimonials />
   ```

---

### Adding New Static Data

1. **Create constant file** in `/src/constants/`:
   ```js
   // constants/testimonials.js
   export const testimonials = [
     {
       name: 'João Silva',
       quote: 'Excelente clube!',
       rating: 5
     }
   ];
   ```

2. **Add to barrel export:**
   ```js
   // constants/index.js
   export { testimonials } from './testimonials';
   ```

3. **Import and use:**
   ```jsx
   import { testimonials } from '../../constants';

   testimonials.map(t => <TestimonialCard {...t} />)
   ```

---

### Adding a Custom Hook

1. **Create hook** in `/src/hooks/`:
   ```js
   // hooks/useScrollDirection.js
   import { useState, useEffect } from 'react';

   export const useScrollDirection = () => {
     const [direction, setDirection] = useState('up');
     // ... hook logic
     return direction;
   };
   ```

2. **Use in components:**
   ```jsx
   import { useScrollDirection } from '../../hooks/useScrollDirection';

   const Navbar = () => {
     const direction = useScrollDirection();
     // ...
   };
   ```

---

### Adding Utility Functions

1. **Add to** `/src/utils/helpers.js`:
   ```js
   export const calculateDiscount = (price, discount) => {
     return price * (1 - discount / 100);
   };
   ```

2. **Import and use:**
   ```jsx
   import { calculateDiscount } from '../../utils/helpers';

   const finalPrice = calculateDiscount(100, 20);
   ```

---

## Best Practices

### File Naming

- **Components:** PascalCase (`Hero.jsx`, `MainLayout.jsx`)
- **Hooks:** camelCase with "use" prefix (`useVideoCarousel.js`)
- **Utils:** camelCase (`helpers.js`)
- **Constants:** camelCase (`features.js`, `pricing.js`)
- **Config:** kebab-case with .config suffix (`site.config.js`)

### Component Structure

```jsx
// 1. Imports
import { motion } from 'framer-motion';
import { useState } from 'react';
import { features } from '../../constants';

// 2. Component definition
const ComponentName = () => {
  // 3. Hooks
  const [state, setState] = useState(null);

  // 4. Event handlers
  const handleClick = () => { ... };

  // 5. Render
  return (
    <motion.div>
      {/* JSX */}
    </motion.div>
  );
};

// 6. Export
export default ComponentName;
```

### State Management

- **Local state:** Use `useState` for component-specific state
- **Shared logic:** Extract to custom hooks in `/hooks`
- **Static data:** Store in `/constants`, not in state
- **Configuration:** Store in `/config`, not in components

### Styling

- **Use Tailwind classes:** Prefer utility classes over custom CSS
- **Use design system colors:** `bg-spin-orange`, `text-spin-blue`, etc.
- **Animations:** Import presets from `/styles/animations.js`
- **Responsive:** Mobile-first with Tailwind breakpoints

### Performance

- **Lazy load pages:** Consider using `React.lazy()` for routes
- **Optimize images:** Compress before adding to `/assets/images`
- **Memoize expensive calculations:** Use `useMemo` when needed
- **Virtualize long lists:** For lists with 50+ items

---

## Migration Guide

### From Old Structure to New

**Components:**
- `src/components/Hero.jsx` → `src/components/sections/Hero.jsx`
- `src/components/Navbar.jsx` → `src/components/layout/Navbar.jsx`

**Imports:**
- Old: `import Hero from '../components/Hero'`
- New: `import { Hero } from '../components/sections'`

**Data Extraction:**
- Data arrays in components → `/constants/*.js`
- Video paths hardcoded → `/config/site.config.js`

**Logic Extraction:**
- Video carousel logic → `/hooks/useVideoCarousel.js`
- Helper functions → `/utils/helpers.js`

---

## Troubleshooting

### Build Errors

**Import path errors:**
- Verify file locations match new structure
- Check barrel exports in `index.js` files
- Ensure correct relative paths (`../../`)

**Missing dependencies:**
- Run `npm install` to ensure all packages are installed

### Component Not Found

1. Check if component is exported in barrel file (`index.js`)
2. Verify import path is correct
3. Check component filename matches export name

### Style Issues

1. Verify Tailwind custom classes in `tailwind.config.js`
2. Restart dev server after config changes
3. Check class names for typos

---

## Future Enhancements

### Recommended Additions

1. **Common Components Library:**
   - Button components (Primary, Secondary, Outline)
   - Form components (Input, Select, TextArea)
   - Modal components
   - Loading states

2. **Enhanced Data Management:**
   - Consider Context API for global state
   - Add API integration layer in `/services`
   - Implement data fetching hooks

3. **Testing:**
   - Add `/tests` directory
   - Component tests with React Testing Library
   - E2E tests with Playwright/Cypress

4. **Optimization:**
   - Image optimization pipeline
   - Code splitting by route
   - Progressive Web App (PWA) features

5. **Developer Experience:**
   - Storybook for component documentation
   - ESLint and Prettier configuration
   - Pre-commit hooks with Husky

---

## Resources

- **CLAUDE.md:** Project-specific development guidelines
- **Tailwind Config:** `tailwind.config.js` for design system
- **Vite Docs:** https://vitejs.dev/
- **Framer Motion:** https://www.framer.com/motion/
- **React Router:** https://reactrouter.com/

---

**Questions or Suggestions?**
Update this document as the architecture evolves to keep it accurate and useful for the team.

---

**End of Architecture Documentation**
