import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SolutionsPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
  {/* Title & Meta */}
  <title>{t("Rəqəmsal Transformasiya Həlləri - ProTeach", "Digital Transformation Solutions - ProTeach")}</title>
  <meta
    name="description"
    content={t(
      "ERP sistemləri, layihə idarəetməsi, proqram təminatı və proses optimallaşdırması. Biznesinizi rəqəmsal dövrə çevirin.",
      "ERP systems, project management, software solutions and process optimization. Transform your business into the digital age."
    )}
  />
  <meta
    name="keywords"
    content={t(
      "rəqəmsal transformasiya, ERP həlləri, layihə idarəetməsi, proqram təminatı, proses optimallaşdırması",
      "digital transformation, ERP solutions, project management, software solutions, process optimization"
    )}
  />

  {/* Canonical */}
  <link rel="canonical" href="https://proteach.az/solutions" />

  {/* Open Graph */}
  <meta property="og:title" content={t("Rəqəmsal Transformasiya Həlləri - ProTeach", "Digital Transformation Solutions - ProTeach")} />
  <meta property="og:description" content={t(
    "ERP sistemləri, layihə idarəetməsi, proqram təminatı və proses optimallaşdırması. Biznesinizi rəqəmsal dövrə çevirin.",
    "ERP systems, project management, software solutions and process optimization. Transform your business into the digital age."
  )} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://proteach.az/solutions" />
  <meta property="og:image" content="https://proteach.az/logo.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ProteachAz" />
  <meta name="twitter:title" content={t("Rəqəmsal Transformasiya Həlləri - ProTeach", "Digital Transformation Solutions - ProTeach")} />
  <meta name="twitter:description" content={t(
    "ERP sistemləri, layihə idarəetməsi, proqram təminatı və proses optimallaşdırması. Biznesinizi rəqəmsal dövrə çevirin.",
    "ERP systems, project management, software solutions and process optimization. Transform your business into the digital age."
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
          "name": "Həllər",
          "item": "https://proteach.az/solutions"
        }
      ]
    }
    `}
  </script>
</Helmet>
      <div className="min-h-screen">
        <Header />
      <main className="pt-24">
        <Solutions />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default SolutionsPage;
