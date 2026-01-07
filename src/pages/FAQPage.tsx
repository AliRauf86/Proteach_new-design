import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const FAQPage = () => {
  const { t } = useLanguage();
  
  const faqStructuredData = [
    {
      question: t("PROTEACH nə təklif edir?", "What does PROTEACH offer?"),
      answer: t(
        "PROTEACH müxtəlif sahələr üzrə peşəkar təlimlər, ISO sertifikatlaşdırma və konsultasiya xidmətləri göstərir. Biz PECB ilə rəsmi tərəfdaşıq və ISO sertifikatları üzrə 250-dən çox kurs üçün əyani, onlayn və self-study tədris paketləri təqdim edirik.",
        "PROTEACH provides professional training, ISO certification, and consulting services across various domains. We are an official PECB partner and offer in-person, online, and self-study training packages for more than 250 ISO-related courses."
      )
    },
    {
      question: t("Təlimlərin müddəti nə qədərdir?", "How long do the trainings last?"),
      answer: t(
        "Təlimlərimizin müddəti kurs tipindən asılı olaraq 2–5 gün arasında dəyişir. Foundation səviyyəli kurslar adətən 2–3 gün, Professional (Manager / Officer) kurslar 3 gün, Lead Implementer, Lead Auditor və Kibertəhlükəsizlik kursları isə 5 gün davam edir.",
        "The duration of our trainings varies between 2 and 5 days depending on the course type. Foundation-level courses usually last 2–3 days, Professional (Manager / Officer) courses last 3 days, while Lead Implementer, Lead Auditor, and Cybersecurity courses last 5 days."
      )
    },
    {
      question: t("Online təlim formatı mövcuddurmu?", "Is an online training format available?"),
      answer: t(
        "Bəli, biz həm əyani, həm də onlayn təlim formatları təqdim edirik. Onlayn təlimlər canlı virtual sinif formatında keçirilir və interaktiv müzakirələr, praktik tapşırıqlar və sertifikasiya imtahanlarını əhatə edir.",
        "Yes, we offer both in-person and online training formats. Online trainings are conducted in a live virtual classroom format and include interactive discussions, practical exercises, and certification exams."
      )
    },
    {
      question: t("Sertifikatlar beynəlxalq səviyyədə tanınırmı?", "Are the certificates internationally recognized?"),
      answer: t(
        "Bəli, PECB tərəfindən təqdim edilən sertifikatlar beynəlxalq səviyyədə tanınır və qəbul olunur. Bu sertifikatlar ISO/IEC standartlarına uyğun hazırlanır və dünya üzrə geniş etibara malikdir.",
        "Yes, certificates issued by PECB are internationally recognized and widely accepted. They are developed in accordance with ISO/IEC standards and are trusted worldwide."
      )
    },
    {
      question: t("Korporativ təlimlər təşkil edirsinizmi?", "Do you provide corporate trainings?"),
      answer: t(
        "Bəli, biz təşkilatlar üçün xüsusi hazırlanmış korporativ təlim proqramları təqdim edirik. Təlimlər şirkətinizin ehtiyaclarına uyğunlaşdırılaraq ofisinizdə, onlayn və ya hibrid formatda keçirilə bilər.",
        "Yes, we provide customized corporate training programs tailored to organizational needs. Trainings can be delivered at your office, online, or in a hybrid format."
      )
    },
    {
      question: t("Konsultasiya xidmətləri hansı sahələri əhatə edir?", "Which areas do your consulting services cover?"),
      answer: t(
        "Konsultasiya xidmətlərimiz IT xidmət idarəetməsi (ITSM), informasiya təhlükəsizliyi, keyfiyyət idarəetməsi, rəqəmsal transformasiya və müxtəlif ISO standartlarının tətbiqi sahələrini əhatə edir.",
        "Our consulting services cover IT Service Management (ITSM), information security, quality management, digital transformation, and the implementation of various ISO standards."
      )
    }
  ];
  
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
        breadcrumb={[
          { 
            position: 1, 
            name: t("Ana Səhifə", "Home"), 
            item: "https://proteach.az/" 
          },
          { 
            position: 2, 
            name: t("Tez-tez Verilən Suallar", "FAQ"), 
            item: "https://proteach.az/faq" 
          }
        ]}
        faq={faqStructuredData}
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
