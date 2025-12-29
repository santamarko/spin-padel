import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import PricingPage from './pages/PricingPage'
import BarPage from './pages/BarPage'
import EquipaPage from './pages/EquipaPage'
import NoticiasPage from './pages/NoticiasPage'
import ParceirosPage from './pages/ParceirosPage'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precos" element={<PricingPage />} />
        <Route path="/bar" element={<BarPage />} />
        <Route path="/equipa" element={<EquipaPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/parceiros" element={<ParceirosPage />} />
      </Routes>
    </MainLayout>
  )
}

export default App
