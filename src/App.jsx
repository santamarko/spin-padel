import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from './layouts/MainLayout'
import { PageTransition } from './components/ui'

// Eager load Home for best initial performance
import Home from './pages/Home'

// Lazy load other pages
const PricingPage = lazy(() => import('./pages/PricingPage'))
const BarPage = lazy(() => import('./pages/BarPage'))
const EquipaPage = lazy(() => import('./pages/EquipaPage'))
const NoticiasPage = lazy(() => import('./pages/NoticiasPage'))
const ParceirosPage = lazy(() => import('./pages/ParceirosPage'))
const ContactoPage = lazy(() => import('./pages/ContactoPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-spin-dark flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-spin-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400 text-sm">A carregar...</p>
    </div>
  </div>
)

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/precos" element={<PageTransition><PricingPage /></PageTransition>} />
        <Route path="/bar" element={<PageTransition><BarPage /></PageTransition>} />
        <Route path="/equipa" element={<PageTransition><EquipaPage /></PageTransition>} />
        <Route path="/noticias" element={<PageTransition><NoticiasPage /></PageTransition>} />
        <Route path="/parceiros" element={<PageTransition><ParceirosPage /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><ContactoPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
      </MainLayout>
    </>
  )
}

export default App
