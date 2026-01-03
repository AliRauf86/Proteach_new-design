import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
    questionAz: "PROTEACH nə təklif edir?",
    questionEn: "What does PROTEACH offer?",
    answerAz:
      "PROTEACH müxtəlif sahələr üzrə peşəkar təlimlər, ISO sertifikatlaşdırma və konsultasiya xidmətləri göstərir. Biz PECB ilə rəsmi tərəfdaşıq və ISO sertifikatları üzrə 250-dən çox kurs üçün əyani, onlayn və self-study tədris paketləri təqdim edirik.",
    answerEn:
      "PROTEACH provides professional training, ISO certification, and consulting services across various domains. We are an official PECB partner and offer in-person, online, and self-study training packages for more than 250 ISO-related courses.",
  },
  {
    questionAz: "Təlimlərin müddəti nə qədərdir?",
    questionEn: "How long do the trainings last?",
    answerAz:
      "Təlimlərimizin müddəti kurs tipindən asılı olaraq 2–5 gün arasında dəyişir. Foundation səviyyəli kurslar adətən 2–3 gün, Professional (Manager / Officer) kurslar 3 gün, Lead Implementer, Lead Auditor və Kibertəhlükəsizlik kursları isə 5 gün davam edir.",
    answerEn:
      "The duration of our trainings varies between 2 and 5 days depending on the course type. Foundation-level courses usually last 2–3 days, Professional (Manager / Officer) courses last 3 days, while Lead Implementer, Lead Auditor, and Cybersecurity courses last 5 days.",
  },
  {
    questionAz: "Online təlim formatı mövcuddurmu?",
    questionEn: "Is an online training format available?",
    answerAz:
      "Bəli, biz həm əyani, həm də onlayn təlim formatları təqdim edirik. Onlayn təlimlər canlı virtual sinif formatında keçirilir və interaktiv müzakirələr, praktik tapşırıqlar və sertifikasiya imtahanlarını əhatə edir.",
    answerEn:
      "Yes, we offer both in-person and online training formats. Online trainings are conducted in a live virtual classroom format and include interactive discussions, practical exercises, and certification exams.",
  },
  {
    questionAz: "Sertifikatlar beynəlxalq səviyyədə tanınırmı?",
    questionEn: "Are the certificates internationally recognized?",
    answerAz:
      "Bəli, PECB tərəfindən təqdim edilən sertifikatlar beynəlxalq səviyyədə tanınır və qəbul olunur. Bu sertifikatlar ISO/IEC standartlarına uyğun hazırlanır və dünya üzrə geniş etibara malikdir.",
    answerEn:
      "Yes, certificates issued by PECB are internationally recognized and widely accepted. They are developed in accordance with ISO/IEC standards and are trusted worldwide.",
  },
  {
    questionAz: "Korporativ təlimlər təşkil edirsinizmi?",
    questionEn: "Do you provide corporate trainings?",
    answerAz:
      "Bəli, biz təşkilatlar üçün xüsusi hazırlanmış korporativ təlim proqramları təqdim edirik. Təlimlər şirkətinizin ehtiyaclarına uyğunlaşdırılaraq ofisinizdə, onlayn və ya hibrid formatda keçirilə bilər.",
    answerEn:
      "Yes, we provide customized corporate training programs tailored to organizational needs. Trainings can be delivered at your office, online, or in a hybrid format.",
  },
  {
    questionAz: "Konsultasiya xidmətləri hansı sahələri əhatə edir?",
    questionEn: "Which areas do your consulting services cover?",
    answerAz:
      "Konsultasiya xidmətlərimiz IT xidmət idarəetməsi (ITSM), informasiya təhlükəsizliyi, keyfiyyət idarəetməsi, rəqəmsal transformasiya və müxtəlif ISO standartlarının tətbiqi sahələrini əhatə edir.",
    answerEn:
      "Our consulting services cover IT Service Management (ITSM), information security, quality management, digital transformation, and the implementation of various ISO standards.",
  },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t("Tez-tez Verilən", "Frequently Asked")} <span className="gradient-text">{t("Suallar", "Questions")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Ən çox soruşulan suallara cavablar",
              "Answers to the most frequently asked questions"
            )}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-dark rounded-lg px-6 border-none animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-navy hover:text-accent hover:no-underline py-6">
                  {t(faq.questionAz, faq.questionEn)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {t(faq.answerAz, faq.answerEn)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
