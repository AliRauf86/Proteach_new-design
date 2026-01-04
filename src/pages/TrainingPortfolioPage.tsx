import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainingPortfolio from "@/components/TrainingPortfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const TrainingPortfolioPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
  {/* Title & Meta */}
  <title>{t("Təlim Portfeli | ProTeach", "Training Portfolio | ProTeach")}</title>
  <meta
    name="description"
    content={t(
      "PROTEACH təlim portfeli - ISO, PECB və digər beynəlxalq standartlar üzrə peşəkar təlim proqramları.",
      "PROTEACH training portfolio - Professional training programs on ISO, PECB and other international standards."
    )}
  />
  <meta
    name="keywords"
    content={t(
      "təlim portfeli, ISO təlimi, PECB təlimi, peşəkar təlim, beynəlxalq standartlar",
      "training portfolio, ISO training, PECB training, professional training, international standards"
    )}
  />

  {/* Canonical */}
  <link rel="canonical" href="https://proteach.az/training/portfolio" />

  {/* Open Graph */}
  <meta property="og:title" content={t("Təlim Portfeli | ProTeach", "Training Portfolio | ProTeach")} />
  <meta property="og:description" content={t(
    "PROTEACH təlim portfeli - ISO, PECB və digər beynəlxalq standartlar üzrə peşəkar təlim proqramları.",
    "PROTEACH training portfolio - Professional training programs on ISO, PECB and other international standards."
  )} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://proteach.az/training/portfolio" />
  <meta property="og:image" content="https://proteach.az/logo.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ProteachAz" />
  <meta name="twitter:title" content={t("Təlim Portfeli | ProTeach", "Training Portfolio | ProTeach")} />
  <meta name="twitter:description" content={t(
    "PROTEACH təlim portfeli - ISO, PECB və digər beynəlxalq standartlar üzrə peşəkar təlim proqramları.",
    "PROTEACH training portfolio - Professional training programs on ISO, PECB and other international standards."
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
          "name": "Təlim Portfeli",
          "item": "https://proteach.az/training/portfolio"
        }
      ]
    }
    `}
  </script>
</Helmet>
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <TrainingPortfolio />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TrainingPortfolioPage;
