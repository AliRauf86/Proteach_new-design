import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseLevels from "@/components/CourseLevels";
import { useLanguage } from "@/contexts/LanguageContext";

const CourseLevelsPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
  {/* Title & Meta */}
  <title>{t("Səviyyələr üzrə Kurs Müddətləri | ProTeach", "Course Levels & Duration | ProTeach")}</title>
  <meta
    name="description"
    content={t(
      "Təlim kurslarının səviyyələri və müddətləri - Foundation, Lead Implementer, Lead Auditor.",
      "Training course levels and durations - Foundation, Lead Implementer, Lead Auditor."
    )}
  />
  <meta
    name="keywords"
    content={t(
      "kurs səviyyələri, təlim müddətləri, Foundation, Lead Implementer, Lead Auditor",
      "course levels, training duration, Foundation, Lead Implementer, Lead Auditor"
    )}
  />

  {/* Canonical */}
  <link rel="canonical" href="https://proteach.az/training/levels" />

  {/* Open Graph */}
  <meta property="og:title" content={t("Səviyyələr üzrə Kurs Müddətləri | ProTeach", "Course Levels & Duration | ProTeach")} />
  <meta property="og:description" content={t(
    "Təlim kurslarının səviyyələri və müddətləri - Foundation, Lead Implementer, Lead Auditor.",
    "Training course levels and durations - Foundation, Lead Implementer, Lead Auditor"
  )} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://proteach.az/training/levels" />
  <meta property="og:image" content="https://proteach.az/logo.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ProteachAz" />
  <meta name="twitter:title" content={t("Səviyyələr üzrə Kurs Müddətləri | ProTeach", "Course Levels & Duration | ProTeach")} />
  <meta name="twitter:description" content={t(
    "Təlim kurslarının səviyyələri və müddətləri - Foundation, Lead Implementer, Lead Auditor.",
    "Training course levels and durations - Foundation, Lead Implementer, Lead Auditor"
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
          "name": "Kurs Səviyyələri",
          "item": "https://proteach.az/training/levels"
        }
      ]
    }
    `}
  </script>
</Helmet>
      <Header />
      <main className="pt-24">
        <CourseLevels />
      </main>
      <Footer />
    </>
  );
};

export default CourseLevelsPage;
