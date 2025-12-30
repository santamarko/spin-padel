import { Helmet } from 'react-helmet-async';

// Schema.org structured data for local business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Spin Padel Club",
  "description": "O teu destino premium para padel em Rinchoa. Campos de qualidade, aulas com professores certificados e uma comunidade apaixonada.",
  "url": "https://spinpadel.pt",
  "telephone": "+351928439668",
  "email": "info@spinpadel.pt",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Complexo Municipal de Fitares, R. Casuarinas 9",
    "addressLocality": "Rinchoa",
    "addressRegion": "Lisboa",
    "postalCode": "2635",
    "addressCountry": "PT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.7810558",
    "longitude": "-9.287814"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "22:00"
    }
  ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, MB Way",
  "image": "https://spinpadel.pt/og-image.jpg",
  "sameAs": [
    "https://instagram.com/spinpadel",
    "https://facebook.com/spinpadel"
  ],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Padel Courts", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Showers", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Bar", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "LED Lighting", "value": true }
  ]
};

const SEO = ({
  title = 'Spin Padel Club',
  description = 'O teu destino premium para padel em Rinchoa. Campos de qualidade, aulas com professores certificados e uma comunidade apaixonada. Reserva já!',
  keywords = 'padel, spin padel, padel rinchoa, campos padel, aulas padel, torneios padel, reservar campo padel',
  image = '/og-image.jpg',
  url = 'https://spinpadel.pt',
  type = 'website',
  includeLocalBusiness = false
}) => {
  const siteTitle = title === 'Spin Padel Club' ? title : `${title} | Spin Padel Club`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Spin Padel Club" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:site_name" content="Spin Padel Club" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Geo Tags */}
      <meta name="geo.region" content="PT-11" />
      <meta name="geo.placename" content="Rinchoa, Sintra" />

      {/* Schema.org Local Business (only on homepage) */}
      {includeLocalBusiness && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
