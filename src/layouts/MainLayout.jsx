import { Navbar, Footer } from '../components/layout';
import { WhatsAppButton, CookieConsent, BackToTop } from '../components/ui';

/**
 * Main layout wrapper component
 * Wraps all pages with Navbar and Footer
 */
const MainLayout = ({ children }) => {
  return (
    <div className="font-sans">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
};

export default MainLayout;
