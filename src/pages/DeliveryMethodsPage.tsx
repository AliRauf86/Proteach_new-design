import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeliveryMethods from "@/components/DeliveryMethods";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const DeliveryMethodsPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
  {/* Title & Meta */}
  <title>{t("Çatdırılma Metodları | ProTeach", "Delivery Methods | ProTeach")}</title>
  <meta
    name="description"
    content={t(
      "Təlim kurslarının çatdırılma metodları - əyani, virtual sinif, e-öyrənmə və özünütədris.",
      "Training course delivery methods - classroom, virtual classroom, e-learning and self-study."
    )}
  />
  <meta
    name="keywords"
    content={t(
      "çatdırılma metodları, təlim kursları, əyani, virtual, e-öyrənmə, self-study",
      "delivery methods, training courses, classroom, virtual, e-learning, self-study"
    )}
  />

  {/* Canonical */}
  <link rel="canonical" href="https://proteach.az/training/delivery" />

  {/* Open Graph */}
  <meta property="og:title" content={t("Çatdırılma Metodları | ProTeach", "Delivery Methods | ProTeach")} />
  <meta property="og:description" content={t(
    "Təlim kurslarının çatdırılma metodları - əyani, virtual sinif, e-öyrənmə və özünütədris.",
    "Training course delivery methods - classroom, virtual classroom, e-learning and self-study"
  )} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://proteach.az/training/delivery" />
  <meta property="og:image" content="https://proteach.az/logo.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ProteachAz" />
  <meta name="twitter:title" content={t("Çatdırılma Metodları | ProTeach", "Delivery Methods | ProTeach")} />
  <meta name="twitter:description" content={t(
    "Təlim kurslarının çatdırılma metodları - əyani, virtual sinif, e-öyrənmə və özünütədris.",
    "Training course delivery methods - classroom, virtual classroom, e-learning and self-study"
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
          "name": "Çatdırılma Metodları",
          "item": "https://proteach.az/training/delivery"
        }
      ]
    }
    `}
  </script>
</Helmet>
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <DeliveryMethods />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DeliveryMethodsPage;
