export function generateSeoMeta(page) {
  const baseTitle = 'MODELI'
  const baseDomain = 'https://modeli.ci'
  
  const defaultMeta = {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    'http-equiv': {
      'X-UA-Compatible': 'IE=edge'
    }
  }
  
  const pageMeta = {
    home: {
      title: `${baseTitle} - Modélisation financière immobilière SaaS`,
      description: 'Créez vos scénarios financiers, calculez VAN, TRI et ROI en quelques clics. La solution SaaS préférée des investisseurs et promoteurs immobiliers.',
      keywords: 'modélisation financière, immobilier, SaaS, VAN, TRI, ROI, investissement, promotion immobilière',
      ogImage: `${baseDomain}/og-home.jpg`
    },
    features: {
      title: `Fonctionnalités - ${baseTitle}`,
      description: 'Découvrez toutes les fonctionnalités de MODELI : gestion de projets, calculs financiers, rapports, collaboration et bien plus.',
      keywords: 'fonctionnalités, gestion projets, calculs financiers, rapports PDF, collaboration équipe',
      ogImage: `${baseDomain}/og-features.jpg`
    },
    pricing: {
      title: `Tarifs - ${baseTitle}`,
      description: 'Découvrez nos plans tarifaires transparents. Essai gratuit 14 jours, sans engagement. Plans Basic, Pro et Entreprise.',
      keywords: 'tarifs, prix, abonnement, plan basic, plan pro, plan entreprise, essai gratuit',
      ogImage: `${baseDomain}/og-pricing.jpg`
    },
    blog: {
      title: `Blog - ${baseTitle}`,
      description: 'Découvrez nos articles sur l\'investissement immobilier, la modélisation financière et les tendances du marché.',
      keywords: 'blog, articles, investissement immobilier, conseils, analyses marché, guides pratiques',
      ogImage: `${baseDomain}/og-blog.jpg`
    },
    contact: {
      title: `Contact - ${baseTitle}`,
      description: 'Contactez notre équipe d\'experts pour un devis gratuit. Email, téléphone ou chat - nous répondons sous 24h.',
      keywords: 'contact, devis gratuit, support, équipe experts, conseil personnalisé',
      ogImage: `${baseDomain}/og-contact.jpg`
    }
  }
  
  const meta = pageMeta[page] || pageMeta.home
  
  return {
    ...defaultMeta,
    title: meta.title,
    meta: [
      { name: 'description', content: meta.description },
      { name: 'keywords', content: meta.keywords },
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:image', content: meta.ogImage },
      { property: 'og:url', content: `${baseDomain}${page === 'home' ? '' : '/' + page}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: baseTitle },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:image', content: meta.ogImage }
    ],
    link: [
      { rel: 'canonical', href: `${baseDomain}${page === 'home' ? '' : '/' + page}` }
    ]
  }
}

export function generateStructuredData(type, data = {}) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MODELI',
    url: 'https://modeli.ci',
    logo: 'https://modeli.ci/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-123-456-789',
      contactType: 'customer service',
      email: 'contact@modeli.ci'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Avenue des Champs-Élysées',
      addressLocality: 'Paris',
      postalCode: '75008',
      addressCountry: 'FR'
    },
    sameAs: [
      'https://www.linkedin.com/company/modeli',
      'https://twitter.com/modeli_fr'
    ]
  }
  
  const schemas = {
    organization: baseData,
    software: {
      ...baseData,
      '@type': 'SoftwareApplication',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '49',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'RecurringPaymentFrequency',
          frequency: 'monthly'
        }
      }
    },
    article: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      author: {
        '@type': 'Person',
        name: data.author
      },
      publisher: {
        '@type': 'Organization',
        name: 'MODELI',
        logo: 'https://modeli.ci/logo.png'
      },
      datePublished: data.date,
      dateModified: data.date
    }
  }
  
  return schemas[type] || schemas.organization
}