import { Navbar, Footer } from '../components/layout';
import { CookieConsent } from '../components/ui';

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
      <CookieConsent />
    </div>
  );
};

export default MainLayout;
