import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const FAQPage = () => {
  const { t } = useLanguage();
  
  // FAQ JSON-LD üçün mainEntity yaratmaq
  const faqStructuredData = faqs.map(f => ({
    "@type": "Question",
    name: f.questionAz, // SEO üçün azərbaycanca göstərmək olar
    acceptedAnswer: { "@type": "Answer", text: f.answerAz }
  }));
  
  return (
    <>
      <Helmet>
        {/* Title & Meta */}
        <title>{t("Tez-tez Verilən Suallar - ProTeach", "Frequently Asked Questions - ProTeach")}</title>
        <meta name="description" content={t(
          "PROTEACH təlim və sertifikasiya proqramları haqqında tez-tez verilən suallar və cavablar.",
          "Frequently asked questions and answers about PROTEACH training and certification programs."
        )} />
        <meta name="keywords" content={t(
          "FAQ, suallar və cavablar, təlim sualları, sertifikasiya sualları",
          "FAQ, questions and answers, training questions, certification questions"
        )} />

        {/* Canonical */}
        <link rel="canonical" href="https://proteach.az/faq" />

        {/* Open Graph */}
        <meta property="og:title" content={t("Tez-tez Verilən Suallar - ProTeach", "Frequently Asked Questions - ProTeach")} />
        <meta property="og:description" content={t(
          "PROTEACH təlim və sertifikasiya proqramları haqqında tez-tez verilən suallar və cavablar.",
          "Frequently asked questions and answers about PROTEACH training and certification programs."
        )} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://proteach.az/faq" />
        <meta property="og:image" content="https://proteach.az/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ProteachAz" />
        <meta name="twitter:title" content={t("Tez-tez Verilən Suallar - ProTeach", "Frequently Asked Questions - ProTeach")} />
        <meta name="twitter:description" content={t(
          "PROTEACH təlim və sertifikasiya proqramları haqqında tez-tez verilən suallar və cavablar.",
          "Frequently asked questions and answers about PROTEACH training and certification programs."
        )} />
        <meta name="twitter:image" content="https://proteach.az/logo.png" />

        {/* Breadcrumb */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Səhifə", "item": "https://proteach.az/" },
              { "@type": "ListItem", "position": 2, "name": "Tez-tez Verilən Suallar", "item": "https://proteach.az/faq" }
            ]
          }
        `}</script>

        {/* FAQ JSON-LD */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqStructuredData
        })}</script>
      </Helmet>
      <div className="min-h-screen">
        <Header />
      <main className="pt-24">
        <FAQ />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default FAQPage;
