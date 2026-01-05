import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// FAQ məlumatları, az/ing dillərdə
const faqs = [
  { questionAz: "Sual 1?", answerAz: "Cavab 1" },
  { questionAz: "Sual 2?", answerAz: "Cavab 2" },
  // Bura bütün FAQ-ları əlavə et
];

const FAQPage = () => {
  const { t } = useLanguage();
  
  // SEO üçün JSON-LD mainEntity yaratmaq
  const faqStructuredData = faqs.map(f => ({
    question: f.questionAz,
    answer: f.answerAz
  }));
  
  return (
    <>
      <SEO
        title={t("Tez-tez Verilən Suallar | ProTeach", "Frequently Asked Questions | ProTeach")}
        description={t(
          "PROTEACH təlim və sertifikasiya proqramları haqqında tez-tez verilən suallar və cavablar.",
          "Frequently asked questions and answers about PROTEACH training and certification programs."
        )}
        keywords={t(
          "FAQ, suallar və cavablar, təlim sualları, sertifikasiya sualları",
          "FAQ, questions and answers, training questions, certification questions"
        )}
        url="https://proteach.az/faq"
        breadcrumbs={[
          { name: "Ana Səhifə", url: "https://proteach.az" },
          { name: "Tez-tez Verilən Suallar", url: "https://proteach.az/faq" }
        ]}
        faq={faqStructuredData.map(f => ({
          question: f.question,
          answer: f.answer
        }))}
      />
      
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
