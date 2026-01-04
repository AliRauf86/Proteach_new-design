import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Certification from "@/components/Certification";
import CertificationProcess from "@/components/CertificationProcess";
import CertificationCriteria from "@/components/CertificationCriteria";
import Footer from "@/components/Footer";

const CertificationPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
  {/* Title & Meta */}
  <title>{t("Sertifikasiya Proqramları - ProTeach", "Certification Programs - ProTeach")}</title>
  <meta
    name="description"
    content={t(
      "Beynəlxalq tanınan PECB sertifikatları: Foundation, Professional və Lead Auditor səviyyələri. ISO standartları üzrə sertifikasiya.",
      "Internationally recognized PECB certificates: Foundation, Professional and Lead Auditor levels. ISO standards certification."
    )}
  />
  <meta
    name="keywords"
    content={t(
      "PECB sertifikasiyası, ISO sertifikatı, Lead Auditor, beynəlxalq sertifikat",
      "PECB certification, ISO certificate, Lead Auditor, international certificate"
    )}
  />

  {/* Canonical */}
  <link rel="canonical" href="https://proteach.az/certification" />

  {/* Open Graph */}
  <meta property="og:title" content={t("Sertifikasiya Proqramları - ProTeach", "Certification Programs - ProTeach")} />
  <meta property="og:description" content={t(
    "Beynəlxalq tanınan PECB sertifikatları: Foundation, Professional və Lead Auditor səviyyələri. ISO standartları üzrə sertifikasiya.",
    "Internationally recognized PECB certificates: Foundation, Professional and Lead Auditor levels. ISO standards certification."
  )} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://proteach.az/certification" />
  <meta property="og:image" content="https://proteach.az/logo.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ProteachAz" />
  <meta name="twitter:title" content={t("Sertifikasiya Proqramları - ProTeach", "Certification Programs - ProTeach")} />
  <meta name="twitter:description" content={t(
    "Beynəlxalq tanınan PECB sertifikatları: Foundation, Professional və Lead Auditor səviyyələri. ISO standartları üzrə sertifikasiya.",
    "Internationally recognized PECB certificates: Foundation, Professional and Lead Auditor levels. ISO standards certification."
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
          "name": "Sertifikasiya",
          "item": "https://proteach.az/certification"
        }
      ]
    }
    `}
  </script>
</Helmet>
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <Certification />
          <CertificationProcess />
          <CertificationCriteria />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CertificationPage;
