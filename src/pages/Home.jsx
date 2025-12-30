import { Hero, Features, SocialFeed, Newsletter, Testimonials } from '../components/sections';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Spin Padel Club"
        description="O teu destino premium para padel em Rinchoa. Campos de qualidade, ambiente vibrante e uma comunidade apaixonada. Reserva o teu campo agora!"
        url="https://spinpadel.pt"
        includeLocalBusiness={true}
      />
      <Hero />
      <Features />
      <Testimonials />
      <SocialFeed />
      <Newsletter />
    </>
  );
}
