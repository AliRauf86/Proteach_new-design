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
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ProteachAz" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

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
