import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "PROTEACH nə təklif edir?",
      answer:
        "PROTEACH müxtəlif sahələr üzrə peşəkar təlimlər, ISO sertifikatlaşdırma və konsultasiya xidmətləri göstərir. Biz PECB ilə rəsmi tərəfdaşıq, ISO sertifikatları 250+ üzrə əyani, online və self-study tədris paketləri təqdim edirik.",
    },
    {
      question: "Təlimlərin müddəti nə qədərdir?",
      answer:
        "Təlimlərimizin müddəti kurs tipindən asılı olaraq 2-5 gün arasında dəyişir. Foundation səviyyəli kurslar adətən 2-3 gün, Professional (Manager / Officer) 3 gün və Lead Implementer/Lead Auditor/Kibertəhlükəsizlik kursları isə 5 gün davam edir.",
    },
    {
      question: "Online təlim formatı mövcuddurmu?",
      answer:
        "Bəli, biz həm əyani, həm də online təlim formatları təqdim edirik. Online təlimlər canlı virtual sinif formatında keçirilir və interaktiv məşğələlər, praktik tapşırıqlar və sertifikat imtahanlarını əhatə edir.",
    },
    {
      question: "Sertifikatlar beynəlxalq səviyyədə tanınırmı?",
      answer:
        "Bəli, PECB tərəfindən verilən sertifikatlar beynəlxalq səviyyədə tanınır və qəbul edilir. Bu sertifikatlar ISO/IEC standartlarına uyğun olaraq hazırlanır və dünya üzrə etibar olunur.",
    },
    {
      question: "Korporativ təlimlər təşkil edirsinizmi?",
      answer:
        "Bəli, biz şirkətlər üçün xüsusi olaraq hazırlanmış korporativ təlim proqramları təqdim edirik. Təlimləri şirkətinizin ehtiyaclarına uyğunlaşdıraraq, ofisinizdə və ya onlayn formatda keçirə bilərik.",
    },
    {
      question: "Konsultasiya xidmətləri hansı sahələri əhatə edir?",
      answer:
        "Konsultasiya xidmətlərimiz informasiya təhlükəsizliyi, IT xidmət idarəetməsi, keyfiyyət idarəetməsi, kibertəhlükəsizlik, rəqəmsal transformasiya və digər ISO standartlarının tətbiqi sahələrini əhatə edir.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Tez-tez Verilən <span className="gradient-text">Suallar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ən çox soruşulan suallara cavablar
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
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
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
