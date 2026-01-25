import { Award, CheckCircle, GraduationCap, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Certification = () => {
  const { t } = useLanguage();
  
  const certificationTypes = [
    {
      icon: GraduationCap,
      title: "Foundation",
      description: t("Əsas bilik və anlayışlar", "Fundamental knowledge and concepts"),
      features: [t("Fundamental konsepsiyalar", "Fundamental concepts"),
        t("Standartlara giriş", "Introduction to standards"),
        t("Praktik nümunələr", "Practical examples"),],
    },
    {
      icon: Award,
      title: "Professional",
      description: t("İrəliləmiş praktik bacarıqlar", "Advanced practical skills"),
      features: [t("Dərin texniki bilik", "In-depth technical knowledge"),
        t("Real layihə təcrübəsi", "Real project experience"),
        t("Risk idarəetməsi", "Risk management"),],
    },
    {
      icon: Globe,
      title: "Lead Auditor",
      description: t("Audit və qiymətləndirmə", "Audit and assessment"),
      features: [t("Audit prosesləri", "Audit processes"),
        t("Standartlara uyğunluq", "Compliance with standards"),
        t("Hesabat hazırlama", "Report preparation"),],
    },
  ];

  const benefits = [
    t("PECB tərəfindən beynəlxalq tanınan sertifikatlar", "Internationally recognized certificates by PECB"),
    t("Əyani, online və self-study formatlar", "Classroom, online, and self-study formats"),
    t("Güzəştli imtahan şərtləri", "Discounted exam conditions"),
    t("Karyera inkişafı imkanları", "Career development opportunities"),
  ];

  return (
    <section id="certification" className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-magenta/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            {t("Peşəkar", "Professional")}<span className="gradient-text">{t("Sertifikasiya", "Certification")}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t(
              "Beynəlxalq tanınan ISO sertifikatları əldə edin və karyeranızı inkişaf etdirin",
              "Obtain internationally recognized ISO certifications and advance your career"
            )}
          </p>
        </div>

        {/* Certification Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certificationTypes.map((cert, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <cert.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-300 mb-6">{cert.description}</p>
              <ul className="space-y-3">
                {cert.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              {t("Niyə PROTEACH Sertifikasiyası?", "Why PROTEACH Certification?")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button 
                asChild
                size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
                <Link to="/training/criteria">
    {t("Sertifikasiya Proqramları", "Certification Programs")}
  </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
