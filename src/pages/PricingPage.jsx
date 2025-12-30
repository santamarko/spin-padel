import { Pricing } from '../components/sections';
import SEO from '../components/SEO';

export default function PricingPage() {
  return (
    <div className="bg-spin-dark min-h-screen">
      <SEO
        title="Preços"
        description="Consulta os preços de aluguer de campos e aulas de padel no Spin Padel. Off-Peak a partir de €30 e Peak a €46 por 1h30. Reserva já!"
        keywords="preços padel, aluguer campo padel, aulas padel preços, spin padel preços"
        url="https://spinpadel.pt/precos"
      />
      <Pricing />
    </div>
  );
}
