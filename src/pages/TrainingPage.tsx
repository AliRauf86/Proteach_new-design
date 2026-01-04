import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Training from "@/components/Training";
import TrainingPortfolio from "@/components/TrainingPortfolio";
import CourseLevels from "@/components/CourseLevels";
import CertificationProcess from "@/components/CertificationProcess";
import DeliveryMethods from "@/components/DeliveryMethods";
import Footer from "@/components/Footer";

const TrainingPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
  {/* Title & Meta */}
  <title>{t("Təlim Proqramları - ProTeach", "Training Programs - ProTeach")}</title>
  <meta
    name="description"
    content={t(
      "ISO 27001, ISO 20000, ISO 9001, kibertəhlükəsizlik və rəqəmsal transformasiya üzrə peşəkar təlim proqramları. PECB akkreditə olunmuş təlimlər.",
      "Professional training programs on ISO 27001, ISO 20000, ISO 9001, cybersecurity and digital transformation. PECB accredited training."
    )}
  />
  <meta
    name="keywords"
    content={t(
      "ISO təlimi, sertifikasiya təlimi, kibertəhlükəsizlik təlimi, PECB təlimi, peşəkar inkişaf",
      "ISO training, certification training, cybersecurity training, PECB training, professional development"
    )}
  />

  {/* Canonical */}
  <link rel="canonical" href="https://proteach.az/training" />

  {/* Open Graph */}
  <meta property="og:title" content={t("Təlim Proqramları - ProTeach", "Training Programs - ProTeach")} />
  <meta property="og:description" content={t(
    "ISO 27001, ISO 20000, ISO 9001, kibertəhlükəsizlik və rəqəmsal transformasiya üzrə peşəkar təlim proqramları. PECB akkreditə olunmuş təlimlər.",
    "Professional training programs on ISO 27001, ISO 20000, ISO 9001, cybersecurity and digital transformation. PECB accredited training."
  )} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://proteach.az/training" />
  <meta property="og:image" content="https://proteach.az/logo.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ProteachAz" />
  <meta name="twitter:title" content={t("Təlim Proqramları - ProTeach", "Training Programs - ProTeach")} />
  <meta name="twitter:description" content={t(
    "ISO 27001, ISO 20000, ISO 9001, kibertəhlükəsizlik və rəqəmsal transformasiya üzrə peşəkar təlim proqramları. PECB akkreditə olunmuş təlimlər.",
    "Professional training programs on ISO 27001, ISO 20000, ISO 9001, cybersecurity and digital transformation. PECB accredited training."
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
        }
      ]
    }
    `}
  </script>
</Helmet>
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <Training />
          <TrainingPortfolio />
          <CourseLevels />
          <CertificationProcess />
          <DeliveryMethods />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TrainingPage;
