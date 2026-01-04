import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertificationProcess from "@/components/CertificationProcess";
import { useLanguage } from "@/contexts/LanguageContext";

const CertificationProcessPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
  {/* Title & Meta */}
  <title>{t("Təlim və Sertifikatlaşdırma Prosesi | ProTeach", "Training & Certification Process | ProTeach")}</title>
  <meta
    name="description"
    content={t(
      "PROTEACH təlim və sertifikatlaşdırma prosesi - qeydiyyatdan sertifikat almağa qədər bütün mərhələlər.",
      "PROTEACH training and certification process - all stages from registration to certificate acquisition."
    )}
  />
  <meta
    name="keywords"
    content={t(
      "təlim prosesi, sertifikatlaşdırma prosesi, PECB, ProTeach təlim, qeydiyyat və sertifikat",
      "training process, certification process, PECB, ProTeach training, registration and certificate"
    )}
  />

  {/* Canonical */}
  <link rel="canonical" href="https://proteach.az/training/process" />

  {/* Open Graph */}
  <meta property="og:title" content={t("Təlim və Sertifikatlaşdırma Prosesi | ProTeach", "Training & Certification Process | ProTeach")} />
  <meta property="og:description" content={t(
    "PROTEACH təlim və sertifikatlaşdırma prosesi - qeydiyyatdan sertifikat almağa qədər bütün mərhələlər.",
    "PROTEACH training and certification process - all stages from registration to certificate acquisition."
  )} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://proteach.az/training/process" />
  <meta property="og:image" content="https://proteach.az/logo.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ProteachAz" />
  <meta name="twitter:title" content={t("Təlim və Sertifikatlaşdırma Prosesi | ProTeach", "Training & Certification Process | ProTeach")} />
  <meta name="twitter:description" content={t(
    "PROTEACH təlim və sertifikatlaşdırma prosesi - qeydiyyatdan sertifikat almağa qədər bütün mərhələlər.",
    "PROTEACH training and certification process - all stages from registration to certificate acquisition."
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
          "name": "Sertifikatlaşdırma Prosesi",
          "item": "https://proteach.az/training/process"
        }
      ]
    }
    `}
  </script>
</Helmet>
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <CertificationProcess />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CertificationProcessPage;
