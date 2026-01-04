import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ContactPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
  {/* Title və meta */}
  <title>{t("Əlaqə - PROTEACH", "Contact - PROTEACH")}</title>
  <meta name="description" content={t("PROTEACH ilə əlaqə saxlayın. Təlim və sertifikasiya proqramları haqqında məlumat almaq üçün bizimlə əlaqə qurun.", "Contact PROTEACH. Get in touch with us for information about training and certification programs.")} />
  <meta name="keywords" content={t("əlaqə, əlaqə məlumatları, PROTEACH əlaqə, bizimlə əlaqə", "contact, contact information, PROTEACH contact, contact us")} />

  {/* Canonical */}
  <link rel="canonical" href="https://proteach.az/contact" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content={t("Əlaqə - PROTEACH", "Contact - PROTEACH")} />
  <meta property="og:description" content={t("PROTEACH ilə əlaqə saxlayın. Təlim və sertifikasiya proqramları haqqında məlumat almaq üçün bizimlə əlaqə qurun.", "Contact PROTEACH. Get in touch with us for information about training and certification programs.")} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://proteach.az/contact" />
  <meta property="og:image" content="https://proteach.az/logo.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ProteachAz" />
  <meta name="twitter:title" content={t("Əlaqə - PROTEACH", "Contact - PROTEACH")} />
  <meta name="twitter:description" content={t("PROTEACH ilə əlaqə saxlayın. Təlim və sertifikasiya proqramları haqqında məlumat almaq üçün bizimlə əlaqə qurun.", "Contact PROTEACH. Get in touch with us for information about training and certification programs.")} />
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
        "name": "Əlaqə",
        "item": "https://proteach.az/contact"
      }
    ]
  }
  `}
  </script>
</Helmet>
      <div className="min-h-screen">
        <Header />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default ContactPage;
