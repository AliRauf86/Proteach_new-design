import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
  {/* Title & Meta */}
  <title>{t("Haqqımızda - ProTeach", "About Us - ProTeach")}</title>
  <meta
    name="description"
    content={t(
      "ProTeach - Sertifikasiya və peşəkar təlim sahəsində aparıcı mərkəz. Beynəlxalq standartlar və keyfiyyətli xidmətlər.",
      "ProTeach - Leading center for certification and professional training. International standards and quality services."
    )}
  />
  <meta
    name="keywords"
    content={t(
      "ProTeach haqqında, təlim mərkəzi, sertifikasiya mərkəzi, peşəkar təlim Azərbaycan",
      "About ProTeach, training center, certification center, professional training Azerbaijan"
    )}
  />

  {/* Canonical */}
  <link rel="canonical" href="https://proteach.az/about" />

  {/* Open Graph */}
  <meta property="og:title" content={t("Haqqımızda - ProTeach", "About Us - ProTeach")} />
  <meta property="og:description" content={t(
    "ProTeach - Sertifikasiya və peşəkar təlim sahəsində aparıcı mərkəz. Beynəlxalq standartlar və keyfiyyətli xidmətlər.",
    "ProTeach - Leading center for certification and professional training. International standards and quality services."
  )} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://proteach.az/about" />
  <meta property="og:image" content="https://proteach.az/opengraph-image.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ProteachAz" />
  <meta name="twitter:title" content={t("Haqqımızda - ProTeach", "About Us - ProTeach")} />
  <meta name="twitter:description" content={t(
    "ProTeach - Sertifikasiya və peşəkar təlim sahəsində aparıcı mərkəz. Beynəlxalq standartlar və keyfiyyətli xidmətlər.",
    "ProTeach - Leading center for certification and professional training. International standards and quality services."
  )} />
  <meta name="twitter:image" content="https://proteach.az/opengraph-image.png" />

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
        }
      ]
    }
    `}
  </script>
</Helmet>
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <About />
        </main>
      <Footer />
    </div>
    </>
  );
};

export default AboutPage;
