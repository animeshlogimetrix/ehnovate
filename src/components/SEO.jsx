import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '../config/seo';

export default function SEO({ 
  title, 
  description, 
  canonicalUrl, 
  type = 'website', 
  image, 
  schema 
}) {
  const metaTitle = title ? `${title} | ${SEO_CONFIG.companyName}` : SEO_CONFIG.defaultTitle;
  const metaDescription = description || SEO_CONFIG.defaultDescription;
  const metaImage = image || SEO_CONFIG.defaultImage;
  const metaUrl = canonicalUrl ? `${SEO_CONFIG.domain}${canonicalUrl}` : SEO_CONFIG.domain;

  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.companyName,
    url: SEO_CONFIG.domain,
    logo: SEO_CONFIG.companyLogo,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SEO_CONFIG.contact.phone,
      email: SEO_CONFIG.contact.email,
      contactType: 'customer service',
    },
    sameAs: [
      SEO_CONFIG.socialLinks.linkedin,
      SEO_CONFIG.socialLinks.twitter
    ]
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={metaUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema || baseSchema)}
      </script>
    </Helmet>
  );
}
