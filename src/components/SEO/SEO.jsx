import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Inheritas - Estate Planning & Will Services in UAE',
  description = 'Professional estate planning and will registration services in UAE. Expert legal consultation for Sharia-compliant wills and non-Muslim wills in Dubai.',
  keywords = 'UAE wills, estate planning UAE, Dubai wills, Sharia compliant wills, will registration Dubai, inheritance UAE, legal will services',
  ogImage = '/Logo.svg',
  path = ''
}) {
  const baseUrl = 'https://inheritas.ae';
  const fullUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <link rel="canonical" href={fullUrl} />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Inheritas",
          "description": description,
          "url": baseUrl,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "18th Floor, Sheikh Rashid Tower, DWTC",
            "addressLocality": "Dubai",
            "addressCountry": "AE"
          },
          "telephone": "0585944811",
          "email": "Sanjana.inheritas@gmail.com",
          "priceRange": "AED 3,500 - AED 6,500"
        })}
      </script>
    </Helmet>
  );
}
