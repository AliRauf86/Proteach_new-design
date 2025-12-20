import { UserPlus, BookOpen, Award, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CertificationProcess = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: UserPlus,
      title: t("PECB Veb saytına", "PECB Website"),
      items: [
        t("Hesab yaradın", "Create an account"),
        t("Daxil olun", "Log in"),
        t("Təlim Kursu və Sertifikatları", "Training Course and Certificates"),
      ],
    },
    {
      icon: BookOpen,
      title: t("Təlim Kursu seçin", "Select Training Course"),
      items: [
        t("Mövcudluğunu yoxlayın", "Check availability"),
        t("Müraciət edin və yazılın", "Apply and enroll"),
        t("Təlim kursuna iştirak edin", "Attend the training course"),
      ],
    },
    {
      icon: Award,
      title: t("Sertifikatınız üçün", "For your Certificate"),
      items: [
        t("İmtahanı keçin", "Pass the exam"),
        t("Müraciət edin", "Apply"),
        t("Sertifikatınızı əldə edin", "Obtain your certificate"),
      ],
    },
  ];

  return (
    <section className="py-16 bg-navy relative overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-magenta/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            {t("Qeydiyyat, Təlim və", "Registration, Training and")} <span className="gradient-text">{t("Sertifikatlaşdırma Prosesi", "Certification Process")}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t(
              "PECB veb səhifəsi üzərindən sertifikasiya prosesinin addımları",
              "Steps of the certification process through the PECB website"
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass rounded-xl p-6 h-full">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <ul className="space-y-3">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationProcess;
