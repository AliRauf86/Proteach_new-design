// src/components/SEO.tsx
import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  position: number;
  name: string;
  item: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  ogImage?: string;
  breadcrumb?: BreadcrumbItem[];
  faq?: FAQItem[];
  isHomePage?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  url,
  ogImage = "https://proteach.az/logo.png",
  breadcrumb,
  faq,
  isHomePage = false,
}: SEOProps) => {
  return (
    <Helmet>
      {/* Title & Meta */}
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      {keywords && <meta name="keywords" content={keywords} key="keywords" />}

      {/* Canonical */}
      <link rel="canonical" href={url} key="canonical" />

      {/* Open Graph */}
      <meta property="og:title" content={title} key="og-title" />
  <meta property="og:description" content={description} key="og-description" />
  <meta property="og:type" content="website" key="og-type" />
  <meta property="og:url" content={url} key="og-url" />
  <meta property="og:image" content={ogImage} key="og-image" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
      <meta name="twitter:site" content="@ProteachAz" key="twitter-site" />
      <meta name="twitter:title" content={title} key="twitter-title" />
      <meta name="twitter:description" content={description} key="twitter-description" />
      <meta name="twitter:image" content={ogImage} key="twitter-image" />

      {breadcrumb && breadcrumb.length > 1 && (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "name": "Breadcrumb Navigation",
      "itemListElement": breadcrumb.map((item) => ({
        "@type": "ListItem",
        "position": Number(item.position),
        "name": String(item.name).trim(),
        "item": String(item.item).trim()
      })),
    })}
  </script>
)}

      {/* FAQ structured data */}
      {faq && faq.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faq.map((f) => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer,
              },
            })),
          })}
        </script>
      )}

      {/* Organization structured data */}
      {isHomePage && ( 
        <>
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ProTeach",
    "alternateName": "ProTeach Azerbaijan",
    "url": "https://proteach.az/",
    "logo": "https://proteach.az/logo.png",
    "description": "Peşəkar Tədris və Sertifikasiya Mərkəzi", 
              "address": { 
                "@type": "PostalAddress",
                "addressCountry": "AZ"
              },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+994 55 287 78 84",
      "contactType": "customer service",
      "areaServed": "AZ",
      "availableLanguage": ["Azerbaijani", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/proteach.az",
      "https://www.instagram.com/proteach.az",
      "https://www.linkedin.com/company/proteach-az"
    ]
  })}
</script>
     </>
      )} 

     <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "ITIL Təlim Proqramı",
  "description": "ITIL üzrə peşəkar təlim proqramı. Beynəlxalq standartlara uyğun kurs.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "ProTeach",
    "url": "https://proteach.az"
  }
})}
</script>

      <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "ISO 27001 Təlim Proqramı",
  "description": "ISO 27001 üzrə peşəkar təlim proqramı. PECB akkreditə olunmuş kurs.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "ProTeach",
    "url": "https://proteach.az"
  }
})}
</script>

      
    </Helmet>
  );
};

export default SEO;
