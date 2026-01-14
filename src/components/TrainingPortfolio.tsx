import { Shield, Brain, Building, Scale, Lock, Award, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const TrainingPortfolio = () => {
  const { t } = useLanguage();

  const portfolios = [
    {
      icon: Shield,
      title: t("Kibertəhlükəsizlik və Rəqəmsal Transformasiya", "Cybersecurity and Digital Transformation"),
      description: t(
        "Bu portfeldəki təlim kursları informasiya sistemlərinin qorunmasına, kibertəhdidlərin müəyyən edilməsinə və azaldılmasına, məlumatların qorunması və bütövlüyünü təmin edən möhkəm təhlükəsizlik strategiyalarının qurulmasına yönəlib.",
        "Training courses in this portfolio focus on protecting information systems, identifying and mitigating cyber threats, and building robust security strategies."
      ),
      subDescription: t(
        "Bu portfel süni intellekt və rəqəmsal innovasiyanın kəsişməsinə yönəldilib. Bu kurslar təşkilatlara süni intellekt texnologiyalarından istifadə etməyə və rəqəmsal transformasiyanın yaratdığı çətinlikləri və imkanları idarə etməyə kömək edir.",
        "This portfolio focuses on the intersection of artificial intelligence and digital innovation, helping organizations leverage AI technologies."
      ),
    },
    {
      icon: Building,
      title: t("Davamlılıq, Dayanıqlıq və Bərpa", "Continuity, Resilience and Recovery"),
      description: t(
        "Bu portfel üzrə kurslar biznes davamlılığını, təşkilati dayanıqlığı və pozucu hadisələr qarşısında effektiv bərpanı təmin edən strategiyalar hazırlamaq və həyata keçirmək üçün peşəkarları hazırlayır.",
        "Courses in this portfolio prepare professionals to develop and implement strategies for business continuity, organizational resilience and effective recovery."
      ),
    },
    {
      icon: Scale,
      title: t("İdarəetmə, Risk və Uyğunluq", "Governance, Risk and Compliance"),
      description: t(
        "Bu portfel idarəetmə çərçivələrini, risklərin idarə edilməsini və uyğunluq strategiyalarını vurğulayır, iştirakçıları təşkilat məqsədlərini tənzimləmə və biznes tələbləri ilə uyğunlaşdırmaq üçün təchiz edir.",
        "This portfolio emphasizes governance frameworks, risk management and compliance strategies, equipping participants to align organizational goals with regulatory and business requirements."
      ),
    },
    {
      icon: Lock,
      title: t("Məxfilik və Məlumatların Mühafizəsi", "Privacy and Data Protection"),
      description: t(
        "Bu portfel getdikcə daha çox verilənlərə əsaslanan dünyada GDPR uyğunluğunu və şəxsi və həssas məlumatların qorunması strategiyalarını əhatə edir.",
        "This portfolio covers GDPR compliance and strategies for protecting personal and sensitive data in an increasingly data-driven world."
      ),
    },
    {
      icon: Award,
      title: t("Keyfiyyət, Sağlamlıq, Təhlükəsizlik və Davamlılıq", "Quality, Health, Safety and Sustainability"),
      description: t(
        "Bu portfel keyfiyyət idarəetmə sistemlərinə, əməyin mühafizəsi və təhlükəsizliyinə, uzunmüddətli təşkilati müvəffəqiyyət və ətraf mühitə nəzarət üçün davamlı təcrübələrə diqqət yetirir.",
        "This portfolio focuses on quality management systems, occupational health and safety, and sustainable practices for long-term organizational success."
      ),
    },

    ];

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-magenta/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            {t("Təlim", "Training")} <span className="gradient-text">{t("Portfeli", "Portfolio")}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t(
              "ProTeach müxtəlif istiqamətlər üzrə həm ayrılıqda, həm də PECB ilə bir sıra təlim kursları təklif edir. Bu təlim kursları mütəxəssislərə öz sahələrində bilik və bacarıqlarını daha da təkmilləşdirməyə kömək edir.",
              "ProTeach offers a range of training courses both independently and with PECB across various directions. These training courses help professionals further improve their knowledge and skills."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((portfolio, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <portfolio.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{portfolio.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{portfolio.description}</p>
              {portfolio.subDescription && (
                <p className="text-gray-300 text-sm leading-relaxed mt-2">{portfolio.subDescription}</p>
              )}
            </div>
          ))}

          {/* ✅ 6-cı element – Button kart */}
  <div className="glass p-8 rounded-2xl hover-lift flex flex-col items-center justify-center text-center">
    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
      <FileText className="w-8 h-8 text-accent" />
    </div>

    <h3 className="text-2xl font-bold mb-4 text-white">
      {t("Bütün Təlim Kurslarının kataloqu", "Complete Training Courses Catalog")}
    </h3>

    <Button
      className="bg-accent hover:bg-accent/90"
      onClick={() => window.open("/training-catalog.pdf", "_blank")}
    >
      {t("PDF yüklə", "Download PDF")}
    </Button>
  </div>

      </div>
      </div>
    </section>
  );
};

export default TrainingPortfolio;
