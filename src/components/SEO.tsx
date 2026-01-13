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
}

const SEO = ({
  title,
  description,
  keywords,
  url,
  ogImage = "https://proteach.az/logo.png",
  breadcrumb,
  faq,
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

      {/* Breadcrumb structured data - Düzəliş edilmiş hissə */}
      {breadcrumb && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumb.map((item) => ({
              "@type": "ListItem",
              "position": item.position,
              "item": {
                "@id": item.item, // Google-un 'Unnamed item' xətasını həll edir
                "name": item.name,
              },
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
    </Helmet>
  );
};

export default SEO;
