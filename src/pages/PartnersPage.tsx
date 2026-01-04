import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const PartnersPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
     <Helmet>
  {/* Title & Meta */}
  <title>{t("Tərəfdaşlar - ProTeach", "Partners - ProTeach")}</title>
  <meta
    name="description"
    content={t(
      "PROTEACH-ın beynəlxalq tərəfdaşları - PECB və digər qlobal sertifikasiya orqanları ilə əməkdaşlıq.",
      "PROTEACH's international partners - Collaboration with PECB and other global certification bodies."
    )}
  />
  <meta
    name="keywords"
    content={t(
      "PECB tərəfdaş, sertifikasiya tərəfdaşları, ISO tərəfdaşlıq Azərbaycan",
      "PECB partner, certification partners, ISO partnership Azerbaijan"
    )}
  />

  {/* Canonical */}
  <link rel="canonical" href="https://proteach.az/about/partners" />

  {/* Open Graph */}
  <meta property="og:title" content={t("Tərəfdaşlar - ProTeach", "Partners - ProTeach")} />
  <meta property="og:description" content={t(
    "PROTEACH-ın beynəlxalq tərəfdaşları - PECB və digər qlobal sertifikasiya orqanları ilə əməkdaşlıq.",
    "PROTEACH's international partners - Collaboration with PECB and other global certification bodies."
  )} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://proteach.az/about/partners" />
  <meta property="og:image" content="https://proteach.az/logo.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ProteachAz" />
  <meta name="twitter:title" content={t("Tərəfdaşlar - ProTeach", "Partners - ProTeach")} />
  <meta name="twitter:description" content={t(
    "PROTEACH-ın beynəlxalq tərəfdaşları - PECB və digər qlobal sertifikasiya orqanları ilə əməkdaşlıq.",
    "PROTEACH's international partners - Collaboration with PECB and other global certification bodies."
  )} />
  <meta name="twitter:image" content="https://proteach.az/logo.png" />

  {/* Breadcrumb structured data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Səhifə",
          "item": "https://proteach.az/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Haqqımızda",
          "item": "https://proteach.az/about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tərəfdaşlar",
          "item": "https://proteach.az/about/partners"
        }
      ]
    }
    `}
  </script>
</Helmet>
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <Partners />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PartnersPage;
