import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertificationCriteria from "@/components/CertificationCriteria";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const CertificationCriteriaPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
  {/* Title & Meta */}
  <title>{t("Sertifikatlaşdırma Meyarları | ProTeach", "Certification Criteria | ProTeach")}</title>
  <meta
    name="description"
    content={t(
      "Sertifikatlaşdırma meyarları - təyinat, təcrübə və layihə tələbləri.",
      "Certification criteria - designation, experience and project requirements."
    )}
  />
  <meta
    name="keywords"
    content={t(
      "sertifikatlaşdırma meyarları, PECB, ProTeach təlim, sertifikasiya tələbləri",
      "certification criteria, PECB, ProTeach training, certification requirements"
    )}
  />

  {/* Canonical */}
  <link rel="canonical" href="https://proteach.az/training/criteria" />

  {/* Open Graph */}
  <meta property="og:title" content={t("Sertifikatlaşdırma Meyarları | ProTeach", "Certification Criteria | ProTeach")} />
  <meta property="og:description" content={t(
    "Sertifikatlaşdırma meyarları - təyinat, təcrübə və layihə tələbləri.",
    "Certification criteria - designation, experience and project requirements."
  )} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://proteach.az/training/criteria" />
  <meta property="og:image" content="https://proteach.az/logo.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ProteachAz" />
  <meta name="twitter:title" content={t("Sertifikatlaşdırma Meyarları | ProTeach", "Certification Criteria | ProTeach")} />
  <meta name="twitter:description" content={t(
    "Sertifikatlaşdırma meyarları - təyinat, təcrübə və layihə tələbləri.",
    "Certification criteria - designation, experience and project requirements."
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
          "name": "Təlimlər",
          "item": "https://proteach.az/training"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sertifikatlaşdırma Meyarları",
          "item": "https://proteach.az/training/criteria"
        }
      ]
    }
    `}
  </script>
</Helmet>
      <Header />
      <main className="pt-24">
        <CertificationCriteria />
      </main>
      <Footer />
    </>
  );
};

export default CertificationCriteriaPage;
