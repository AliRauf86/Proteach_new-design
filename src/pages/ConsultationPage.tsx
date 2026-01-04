import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ConsultationPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
  {/* Title & Meta */}
  <title>{t("IT Konsultasiya - ProTeach", "IT Consultation - ProTeach")}</title>
  <meta
    name="description"
    content={t(
      "Peşəkar IT konsultasiya xidmətləri: məlumat təhlükəsizliyi, risk idarəetməsi, texnoloji strategiya və audit. Biznesinizi rəqəmsal çevrilməyə hazırlayın.",
      "Professional IT consulting services: information security, risk management, technology strategy and audit. Prepare your business for digital transformation."
    )}
  />
  <meta
    name="keywords"
    content={t(
      "IT konsultasiya, məlumat təhlükəsizliyi, risk idarəetməsi, texnoloji audit, IT strategiya",
      "IT consulting, information security, risk management, technology audit, IT strategy"
    )}
  />

  {/* Canonical */}
  <link rel="canonical" href="https://proteach.az/consultation" />

  {/* Open Graph */}
  <meta property="og:title" content={t("IT Konsultasiya - ProTeach", "IT Consultation - ProTeach")} />
  <meta property="og:description" content={t(
    "Peşəkar IT konsultasiya xidmətləri: məlumat təhlükəsizliyi, risk idarəetməsi, texnoloji strategiya və audit. Biznesinizi rəqəmsal çevrilməyə hazırlayın.",
    "Professional IT consulting services: information security, risk management, technology strategy and audit. Prepare your business for digital transformation."
  )} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://proteach.az/consultation" />
  <meta property="og:image" content="https://proteach.az/logo.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ProteachAz" />
  <meta name="twitter:title" content={t("IT Konsultasiya - ProTeach", "IT Consultation - ProTeach")} />
  <meta name="twitter:description" content={t(
    "Peşəkar IT konsultasiya xidmətləri: məlumat təhlükəsizliyi, risk idarəetməsi, texnoloji strategiya və audit. Biznesinizi rəqəmsal çevrilməyə hazırlayın.",
    "Professional IT consulting services: information security, risk management, technology strategy and audit. Prepare your business for digital transformation."
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
          "name": "Konsultasiya",
          "item": "https://proteach.az/consultation"
        }
      ]
    }
    `}
  </script>
</Helmet>
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <Consultation />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ConsultationPage;
