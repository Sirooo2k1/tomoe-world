import { useEffect } from 'react'

const SEOHead = ({ 
  title, 
  description, 
  path = '', 
  image = '/favicon.png',
  language = 'ja'
}) => {
  const baseUrl = 'https://tomoeworld.com'
  const fullUrl = `${baseUrl}${path ? `/${path}` : ''}`
  const logoUrl = `${baseUrl}/favicon.png`
  
  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }
    
    // Update or create link tags
    const updateLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`)
      
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }
    
    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('theme-color', '#F5F1E8')
    
    // Open Graph tags
    updateMetaTag('og:type', 'website', true)
    updateMetaTag('og:url', fullUrl, true)
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', `${baseUrl}${image}`, true)
    updateMetaTag('og:image:width', '1200', true)
    updateMetaTag('og:image:height', '630', true)
    updateMetaTag('og:image:type', 'image/png', true)
    updateMetaTag('og:site_name', '共笑®︎ Official Site', true)
    updateMetaTag('og:locale', language === 'ja' ? 'ja_JP' : 'en_US', true)
    
    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:url', fullUrl)
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', `${baseUrl}${image}`)
    
    // Canonical URL
    updateLinkTag('canonical', fullUrl)
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', language)
    
    // Add/Update structured data (JSON-LD) for Organization logo
    let structuredDataScript = document.getElementById('organization-structured-data')
    
    const organizationData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': '共笑®︎',
      'alternateName': language === 'ja' ? '共笑®︎ Official Site' : '共笑®︎ Official Site',
      'url': baseUrl,
      'logo': logoUrl,
      'description': language === 'ja' 
        ? '共に楽しみ、学び、育ち、活かされ、笑い合う社会を目指す、にしゃんた博士が提唱する共笑®︎の理念を広める講演会や研修会の講師依頼受付中'
        : 'Promoting the philosophy of 共笑®︎ advocated by Dr. Nishanta, aiming for a society where we enjoy, learn, grow, be utilized, and laugh together.',
      'sameAs': [
        // Add social media links if available
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Service',
        'url': `${baseUrl}/ask`
      }
    }
    
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script')
      structuredDataScript.id = 'organization-structured-data'
      structuredDataScript.type = 'application/ld+json'
      document.head.appendChild(structuredDataScript)
    }
    structuredDataScript.textContent = JSON.stringify(organizationData)
    
    // Add/Update WebSite structured data
    let websiteStructuredDataScript = document.getElementById('website-structured-data')
    
    const websiteData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': '共笑®︎ Official Site',
      'url': baseUrl,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': `${baseUrl}/blog?search={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    }
    
    if (!websiteStructuredDataScript) {
      websiteStructuredDataScript = document.createElement('script')
      websiteStructuredDataScript.id = 'website-structured-data'
      websiteStructuredDataScript.type = 'application/ld+json'
      document.head.appendChild(websiteStructuredDataScript)
    }
    websiteStructuredDataScript.textContent = JSON.stringify(websiteData)
    
  }, [title, description, path, image, language, fullUrl, baseUrl, logoUrl])
  
  return null
}

export default SEOHead
