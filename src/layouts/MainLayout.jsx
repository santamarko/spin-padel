import { Navbar, Footer } from '../components/layout';

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
    </div>
  );
};

export default MainLayout;
