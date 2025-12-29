# CLAUDE.md - Spin Padel Club Website

## IMPORTANT: Working Instructions for Claude

**ALWAYS RUN TERMINAL COMMANDS DIRECTLY - DO NOT ASK THE USER TO RUN THEM**
- When you need to run any command (npm, git, vercel, etc.), use the Bash tool immediately
- Never tell the user "run this command in your terminal" - just run it yourself
- The user expects you to execute commands autonomously
- This includes: builds, deployments, git commits, npm installs, plugin installations, etc.

---

## Project Overview

**Spin Padel Club** is a modern, responsive landing page and multi-page website for a premium padel club. The site features dynamic video backgrounds, smooth animations, and a clean design system aligned with the brand's identity.

**Project Type:** Frontend-only (React SPA)
**Language:** Portuguese (pt)
**Target Audience:** Padel players and enthusiasts in Portugal
**Primary Goal:** Pre-bookings, member engagement, and brand presence

---

## Tech Stack

### Core Technologies
- **React 18.2.0** - UI library
- **React Router DOM 7.9.6** - Client-side routing
- **Vite 5.0.0** - Build tool and dev server
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **Framer Motion 10.16.4** - Animation library
- **PostCSS + Autoprefixer** - CSS processing

### Development
- Node.js with npm
- ES Modules (`"type": "module"` in package.json)
- No TypeScript (plain JSX)

---

## Architecture & File Structure

```
Spin Padel/
├── public/
│   └── video/                    # Video assets
│       ├── hero-video-1.mp4
│       └── hero-video-2.mp4
├── src/
│   ├── components/               # Reusable components
│   │   ├── Navbar.jsx           # Global navigation
│   │   ├── Footer.jsx           # Global footer
│   │   ├── Hero.jsx             # Hero section with video carousel
│   │   ├── Features.jsx         # Feature cards
│   │   ├── CTA.jsx              # Call-to-action sections
│   │   ├── Pricing.jsx          # Pricing tables
│   │   ├── Newsletter.jsx       # Newsletter signup
│   │   └── SocialFeed.jsx       # Social media integration
│   ├── pages/                   # Route-level page components
│   │   ├── Home.jsx             # Homepage (/)
│   │   ├── PricingPage.jsx      # Pricing page (/precos)
│   │   ├── BarPage.jsx          # Bar/Cafe page (/bar)
│   │   ├── EquipaPage.jsx       # Team page (/equipa)
│   │   ├── NoticiasPage.jsx     # News page (/noticias)
│   │   └── ParceirosPage.jsx    # Partners page (/parceiros)
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── CLAUDE.md                    # This file
```

---

## Design System

### Brand Colors

The site uses a carefully defined color palette. **Always use these custom Tailwind classes:**

| Color Name | Hex Code | Tailwind Class | Usage |
|------------|----------|----------------|-------|
| Spin Blue | `#1c5ba6` | `spin-blue` | Primary brand color, CTAs, accents |
| Spin Orange | `#ec8026` | `spin-orange` | Secondary brand color, highlights, CTA buttons |
| Off-white | `#ece9e4` | `spin-offwhite` | Backgrounds, light sections |
| Teal Dark | `#0e2128` | `spin-teal` | Dark backgrounds, footer |
| Black Deep | `#060606` | `spin-black` | Text, dark overlays |
| Dark | `#101826` | `spin-dark` | Alternative dark background |

**Examples:**
```jsx
<button className="bg-spin-orange text-white">Book Now</button>
<section className="bg-spin-teal text-spin-offwhite">...</section>
```

### Typography

**Font Family:** Inter (Google Fonts)
**Import:** Already in `index.css`

**Font Weights Available:** 300, 400, 500, 600, 700, 800, 900

**Common Patterns:**
- **Headings:** `font-black` (900) or `font-bold` (700)
- **Body:** `font-normal` (400) or `font-medium` (500)
- **Subtitles:** `font-semibold` (600)

**Responsive Text Sizes:**
```jsx
// Use responsive classes for headings
<h1 className="text-5xl md:text-7xl lg:text-8xl font-black">
  ONDE O PADEL ACONTECE
</h1>
```

### Spacing & Layout

- Use Tailwind's spacing scale: `px-4`, `py-8`, `gap-6`, etc.
- Standard container padding: `px-4` on mobile, consider `px-8` or `max-w-7xl mx-auto` for larger screens
- Section spacing: `py-16` or `py-20` for vertical padding

---

## Animation Patterns (Framer Motion)

### Standard Entry Animation

Used across the site for smooth content reveals:

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {/* Content */}
</motion.div>
```

### Sequential Animations

For multiple elements appearing in sequence:
```jsx
// First element
transition={{ duration: 0.8, delay: 0.2 }}

// Second element
transition={{ duration: 0.8, delay: 0.4 }}

// Third element
transition={{ duration: 0.8, delay: 0.6 }}
```

**Delay increment:** 0.2s between elements

### Button Interactions

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="..."
>
  Click Me
</motion.button>
```

### Scroll Animations

For the scroll indicator (see `Hero.jsx`):
```jsx
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  {/* Scroll indicator */}
</motion.div>
```

---

## Component Patterns

### Hero Component (`Hero.jsx`)

**Key Features:**
- Dual video crossfade carousel
- Uses `useRef` for video element control
- Videos play sequentially with smooth opacity transitions
- Grayscale filter applied to videos
- Dark gradient overlay for text readability
- Social proof badge
- Primary CTA button with shadow effect
- Scroll indicator

**Video Handling:**
```jsx
const videos = ['/video/hero-video-1.mp4', '/video/hero-video-2.mp4'];
// Videos crossfade every time one ends
// 1.5s fade transition between videos
```

**Important:** Videos must be placed in `public/video/` directory

### Navbar Component

**Expected Features:**
- Links to all routes
- Responsive mobile menu (hamburger)
- Sticky or fixed positioning
- Brand logo

### Footer Component

**Expected Features:**
- Contact information
- Social media links
- Copyright notice
- Additional navigation links

### Page Components

**Pattern:**
```jsx
// pages/ExamplePage.jsx
import ComponentA from '../components/ComponentA';
import ComponentB from '../components/ComponentB';

const ExamplePage = () => {
  return (
    <div>
      <ComponentA />
      <ComponentB />
      {/* Page-specific content */}
    </div>
  );
};

export default ExamplePage;
```

---

## Routing Structure

Defined in `App.jsx`:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `Home` | Homepage with hero, features, CTA |
| `/precos` | `PricingPage` | Membership pricing |
| `/bar` | `BarPage` | Bar/Cafe information |
| `/equipa` | `EquipaPage` | Team members |
| `/noticias` | `NoticiasPage` | News and updates |
| `/parceiros` | `ParceirosPage` | Partners and sponsors |

**Adding a New Route:**
1. Create page component in `src/pages/`
2. Import in `App.jsx`
3. Add `<Route>` in the `<Routes>` section
4. Update Navbar links

---

## Development Guidelines

### Code Style

1. **Component Structure:**
   - Functional components only
   - Hooks at the top
   - Event handlers before return
   - Export default at bottom

2. **Naming Conventions:**
   - Components: PascalCase (`Hero.jsx`, `PricingCard.jsx`)
   - Files: Match component name
   - CSS classes: Use Tailwind utilities, avoid custom CSS
   - Functions: camelCase (`handleVideoEnd`, `toggleMenu`)

3. **Imports Order:**
   ```jsx
   // 1. External libraries
   import { motion } from 'framer-motion';
   import { useState } from 'react';

   // 2. Internal components
   import Navbar from './components/Navbar';

   // 3. Assets/styles (if any)
   ```

4. **JSX Formatting:**
   - Use double quotes for JSX attributes
   - Use single quotes for JavaScript strings
   - Self-close components with no children: `<Component />`
   - Multi-line JSX should be wrapped in parentheses

### Responsive Design

**Mobile-First Approach:**
- Default styles apply to mobile
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

**Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Example:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
</div>
```

### Performance Considerations

1. **Images/Videos:**
   - Compress videos before uploading
   - Use `preload="auto"` for videos that will play soon
   - Use `loading="lazy"` for images below the fold

2. **Animations:**
   - Avoid animating expensive properties (use transform and opacity)
   - Use `will-change` sparingly

3. **Code Splitting:**
   - Consider lazy loading pages: `const Page = lazy(() => import('./pages/Page'))`

---

## Common Tasks

### Adding a New Component

1. Create file in `src/components/ComponentName.jsx`
2. Follow this template:
```jsx
import { motion } from 'framer-motion';

const ComponentName = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4"
    >
      {/* Component content */}
    </motion.section>
  );
};

export default ComponentName;
```
3. Import and use in a page component

### Adding a New Page

1. Create file in `src/pages/PageName.jsx`
2. Import components you need
3. Add route in `App.jsx`
4. Add navigation link in `Navbar.jsx`

### Modifying Colors

**Don't use arbitrary colors!** Update `tailwind.config.js` if you need a new brand color:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'spin-new-color': '#hexcode',
    },
  },
}
```

Then use: `bg-spin-new-color`, `text-spin-new-color`, etc.

### Adding Video Assets

1. Place video files in `public/video/`
2. Reference as `/video/filename.mp4` (note the leading slash)
3. Recommended format: MP4 (H.264)
4. Compress for web (use tools like HandBrake)

### Styling Buttons

**Primary CTA (Orange with shadow):**
```jsx
<div className="relative">
  <div className="absolute inset-0 bg-white rounded-full translate-x-1 translate-y-1"></div>
  <motion.button
    whileTap={{ scale: 0.95 }}
    className="relative bg-spin-orange text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
  >
    BUTTON TEXT
  </motion.button>
</div>
```

**Secondary Button:**
```jsx
<button className="bg-spin-blue text-white font-semibold px-8 py-3 rounded-lg hover:bg-spin-blue/90 transition-colors">
  Secondary Action
</button>
```

---

## Forms & Interactivity

### Form Patterns

Currently, forms are likely static (no backend). When adding forms:

1. Use controlled components with `useState`
2. Handle form submission with `onSubmit`
3. Prevent default behavior: `e.preventDefault()`
4. Add validation before submission
5. Show loading/success states

**Example:**
```jsx
const [formData, setFormData] = useState({ email: '' });
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  // TODO: Send to backend API
  console.log('Form submitted:', formData);

  setIsSubmitting(false);
};

return (
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="px-4 py-2 rounded border"
      required
    />
    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'Enviando...' : 'Enviar'}
    </button>
  </form>
);
```

---

## Backend Integration (Future)

Currently, this is a **frontend-only** project. When adding backend functionality:

### API Calls

Use `fetch` or install `axios`:

```jsx
// Example API call
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
```

### Environment Variables

1. Create `.env` file in root (add to `.gitignore`)
2. Prefix with `VITE_`:
   ```
   VITE_API_URL=https://api.spinpadel.com
   VITE_API_KEY=your_key_here
   ```
3. Access in code:
   ```js
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

### Suggested Backend Features

- **Booking System:** Court reservations
- **Newsletter:** Email collection
- **Contact Form:** Inquiries
- **User Accounts:** Member portal
- **CMS Integration:** News and updates management

### Recommended Stack (when needed)

- **Backend:** Node.js + Express, or use a headless CMS
- **Database:** PostgreSQL or MongoDB
- **CMS Options:** Strapi, Sanity, Contentful
- **Forms:** Formspree, Netlify Forms (for simple forms)
- **Email:** SendGrid, Mailgun

---

## SEO & Meta Tags

### Current Setup

Basic meta tags in `index.html`:
- Language: `pt`
- Description: "Spin Padel Club - O seu destino premium para padel"
- Title: "Spin Padel Club"

### Improvements Needed

1. **Add React Helmet** for dynamic meta tags per page
2. **Open Graph tags** for social sharing
3. **Structured data** for local business
4. **Sitemap.xml** and **robots.txt**

**Example with React Helmet:**
```jsx
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Preços | Spin Padel Club</title>
  <meta name="description" content="Confira os nossos planos de adesão" />
  <meta property="og:title" content="Preços - Spin Padel" />
  <meta property="og:image" content="/og-image.jpg" />
</Helmet>
```

---

## Testing

### Manual Testing Checklist

When making changes, test:

- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (375px - 767px)
- ✅ All navigation links work
- ✅ Animations play smoothly
- ✅ Videos load and crossfade correctly
- ✅ Buttons have hover states
- ✅ Forms validate properly
- ✅ No console errors

### Browser Compatibility

Test in:
- Chrome/Edge (Chromium)
- Safari (especially for video playback)
- Firefox
- Mobile Safari (iOS)
- Chrome Mobile (Android)

---

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized static files.

### Hosting Options

**Recommended:**
- **Vercel** - Zero config, great for React
- **Netlify** - Similar to Vercel
- **GitHub Pages** - Free, requires build step
- **Cloudflare Pages** - Fast CDN

**Configuration Needed:**
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

### Environment Variables in Production

Set `VITE_*` variables in your hosting platform's dashboard.

---

## Troubleshooting

### Videos Not Playing

1. Check files exist in `public/video/`
2. Verify paths start with `/video/` (not `./video/`)
3. Ensure videos are MP4 H.264 format
4. Check browser console for MIME type errors
5. Test autoplay policy (requires muted videos)

### Routing Issues (404 on Refresh)

Single-page apps need server configuration:

**Netlify:** Create `public/_redirects`:
```
/*    /index.html   200
```

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Animations Not Working

1. Check `framer-motion` is imported
2. Verify component is wrapped in `<motion.div>` (not just `<div>`)
3. Check for typos in animation properties
4. Look for JavaScript errors in console

### Tailwind Classes Not Applying

1. Restart dev server (`npm run dev`)
2. Check `content` paths in `tailwind.config.js`
3. Verify class names don't have typos
4. Check if using JIT mode correctly

---

## Best Practices

### Do's ✅

- **Use Tailwind classes** for all styling
- **Follow mobile-first** responsive design
- **Optimize images/videos** before adding
- **Use semantic HTML** (`<section>`, `<nav>`, `<footer>`)
- **Add alt text** to all images
- **Keep components small** and focused
- **Use custom hooks** for reusable logic
- **Test on real devices** when possible
- **Comment complex logic** (especially in animations)

### Don'ts ❌

- **Don't use inline styles** (except for dynamic values like video refs)
- **Don't create custom CSS** unless absolutely necessary
- **Don't use arbitrary Tailwind values** excessively (`bg-[#123456]`)
- **Don't nest components** more than 3-4 levels deep
- **Don't animate layout properties** (width, height, top, left) - use transform instead
- **Don't ignore accessibility** (keyboard navigation, ARIA labels)
- **Don't hardcode strings** that should be in a config/CMS
- **Don't commit large video files** to git (use Git LFS or external hosting)

---

## Quick Reference

### Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

### Key Files to Check First

When debugging or making changes:

1. **`App.jsx`** - Routing and global layout
2. **`tailwind.config.js`** - Colors and design tokens
3. **`src/components/Navbar.jsx`** - Navigation issues
4. **`src/components/Hero.jsx`** - Video/homepage issues
5. **`index.html`** - Meta tags and global scripts

### Color Class Quick Reference

```jsx
bg-spin-blue      // #1c5ba6
bg-spin-orange    // #ec8026
bg-spin-offwhite  // #ece9e4
bg-spin-teal      // #0e2128
bg-spin-black     // #060606
bg-spin-dark      // #101826
```

---

## Contact & Support

**Project Maintainer:** Marco Albuquerque
**Project Name:** Spin Padel Club Landing Page
**Repository:** (Add GitHub URL if applicable)

---

## Version History

- **v1.0.0** (Current) - Initial landing page with video hero, routing, and core components

---

**Last Updated:** 2025-12-29
**Claude.md Version:** 1.0
