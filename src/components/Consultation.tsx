import { Lightbulb, Target, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Consultation = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Target,
      title: t("Strateji Planlama", "Strategic Planning"),
      description: t(
        "Müvafiq yanaşmalar əsasında idarəetmə modelinin və strateji yol xəritəsinin formalaşdırılması",
        "Development of management model and strategic roadmap based on relevant approaches"
      ),
    },
    {
      icon: Zap,
      title: t("Proses Optimallaşdırması", "Process Optimization"),
      description: t(
        "ITIL və ISO tələblərinə uyğun proseslərin təhlili, boşluqların müəyyən edilməsi və təkmilləşdirilməsi üsulları",
        "Analysis of processes according to ITIL and ISO requirements, identifying gaps and improvement methods"
      ),
    },
    {
      icon: Lightbulb,
      title: t("Standartlara Uyğunluq", "Standards Compliance"),
      description: t(
        "ISO/IEC standartlarının təşkilati mühitə inteqrasiyası və davamlı uyğunluğun təmin edilməsi",
        "Integration of ISO/IEC standards into organizational environment and ensuring continuous compliance"
      ),
    },
    {
      icon: Users,
      title: t("Dəyişikliklərin İdarəedilməsi", "Change Management"),
      description: t(
        "Komanda səriştələrinin inkişafı, rol bölgüsü və dəyişikliklərin effektiv şəkildə idarə olunması",
        "Development of team competencies, role allocation, and effective management of changes"
      ),
    },
  ];

  const process = [
    { step: "01", title: t("Analiz", "Analysis"), desc: t("Proseslər üzrə cari vəziyyətin qiymətləndirilməsi", "Evaluation of current process status") },
    { step: "02", title: t("Prioritetləşdirmə", "Prioritization"), desc: t("Tələblərin müəyyən edilməsi və sənədləşmə", "Requirement identification and documentation") },
    { step: "03", title: t("Həllərin Tətbiqi", "Solution Implementation"), desc: t("Tövsiyələrin dizaynı və həyata keçirilməsi", "Designing and implementing recommendations") },
    { step: "04", title: t("Monitorinq", "Monitoring"), desc: t("Performans göstəricilərinin izlənməsi və optimallaşdırma", "Monitoring performance indicators and optimization") },
  ];

  return (
    <section id="consultation" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-magenta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t("Konsultasiya", "Consultation")} <span className="gradient-text">{t("Xidmətləri", "Services")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Ən yaxşı təcrübəyə və standartlara əsaslanan konsaltinq yanaşması ilə davamlı inkişafı təmin edin",
              "Ensure continuous development with a consulting approach based on best practices and standards"
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-dark p-6 rounded-2xl hover-lift group text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-navy">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Consultation Process */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            {t("Konsultasiya", "Consultation")} <span className="gradient-text">{t("Prosesi", "Process")}</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="glass-dark p-6 rounded-2xl hover-lift text-center">
                  <div className="text-6xl font-bold gradient-text mb-4">{item.step}</div>
                  <h4 className="text-xl font-bold mb-2 text-navy">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-dark rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-navy">
              {t("Davamlı və Ölçüləbilən İnkişaf Üçün Konsultasiya", "Consultation for Sustainable and Measurable Development")}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t(
                "Peşəkar konsultantlarımızla görüşərək şirkətinizin ehtiyaclarını müzakirə edin və fərdi həll yolları əldə edin",
                "Meet with our professional consultants to discuss your company's needs and receive tailored solutions"
              )}
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
              <Link to="/contact">
                {t("Konsultasiya AL", "Get Consultation")}
              </Link>  
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
