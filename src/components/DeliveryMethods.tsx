import { Users, Monitor, BookOpen, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DeliveryMethods = () => {
  const { t } = useLanguage();

  const methods = [
    {
      icon: Users,
      title: t("Əyani (Sinif)", "Classroom"),
      points: [
        t("Ənənəvi tədris modelidir", "Traditional teaching model"),
        t("Təlim iştirakçıları və təlimçi fiziki olaraq eyni məkanda olur", "Participants and trainer are physically in the same location"),
        t("Üzbəüz ünsiyyət, dərhal sual-cavab və təcrübə əsaslı fəaliyyətləri mümkün edir", "Enables face-to-face communication, immediate Q&A and hands-on activities"),
      ],
    },
    {
      icon: Monitor,
      title: t("Virtual sinif", "Virtual Classroom"),
      points: [
        t("Təlim onlayn keçirilir, lakin canlı dərs formatındadır", "Training is conducted online but in live class format"),
        t("Təlimçi və iştirakçılar video-konfrans platforması vasitəsilə real vaxtda qarşılıqlı əlaqədə olur", "Trainer and participants interact in real-time via video conferencing platform"),
        t("Ənənəvi sinif mühitinin rəqəmsal ekvivalenti sayılır", "Considered the digital equivalent of traditional classroom environment"),
      ],
    },
    {
      icon: BookOpen,
      title: t("E-Öyrənmə", "E-Learning"),
      points: [
        t("İnternet vasitəsilə tədris materiallarına (video, testlər, interaktiv modul) istənilən zamanda daxil olaraq öyrənmə metodudur", "Learning method by accessing training materials (video, tests, interactive modules) anytime via internet"),
        t("Adətən öz sürətində irəliləmə imkanını verir", "Usually allows self-paced progression"),
        t("Asinxron şəkildə keçirilə bilər", "Can be conducted asynchronously"),
      ],
    },
    {
      icon: User,
      title: t("Özünütədris", "Self-Study"),
      points: [
        t("Şəxsin özəlliklə, müəllim və ya təlimçi olmadan, müstəqil şəkildə öyrənmə prosesini planlaşdırması və idarə etməsidir", "The individual independently plans and manages their learning process without a teacher or trainer"),
        t("Kitablar, onlayn resurslar və ya e-öyrənmə modulları vasitəsilə həyata keçirilir", "Conducted through books, online resources or e-learning modules"),
      ],
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
            {t("Təlim kurslarının", "Training Course")} <span className="gradient-text">{t("Çatdırılma Metodları", "Delivery Methods")}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t(
              "Müxtəlif tədris metodları hər kəs üçün özünəməxsus imkanlar yaradır, təlim və sertifikatlaşdırma prosesində əlçatanlığı, çevikliyi və keyfiyyəti təmin edir.",
              "Different teaching methods create unique opportunities for everyone, ensuring accessibility, flexibility and quality in the training and certification process."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <method.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{method.title}</h3>
                  <ul className="space-y-3">
                    {method.points.map((point, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryMethods;
