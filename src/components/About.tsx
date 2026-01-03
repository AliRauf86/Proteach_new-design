import { Target, Eye, CheckCircle } from "lucide-react";
import consultant from "@/assets/consultant.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const values = [
    {
    az: "Peşəkarlıq və etibarlılıq",
    en: "Professionalism and reliability",
  },
  {
    az: "Davamlı inkişaf və innovasiya",
    en: "Continuous improvement and innovation",
  },
  {
    az: "Müştəri məmnuniyyəti",
    en: "Customer satisfaction",
  },
  {
    az: "Şəffaflıq və məsuliyyət",
    en: "Transparency and responsibility",
  },
  ];

  return (
    <section id="about" className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-magenta/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-magenta/30 rounded-3xl blur-2xl" />
              <img
                src={consultant}
                alt="About PROTEACH"
                className="relative rounded-3xl shadow-2xl w-full h-[420px] md:h-[520px] lg:h-[600px] object-cover border-4 border-accent/30"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl animate-float">
              <p className="text-4xl font-bold text-accent">15+</p>
              <p className="text-white text-sm">{t("İllik Təcrübə", "Years Experience")}</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 text-white animate-fade-in-up">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                {t("Haqqımızda", "About Us")} <span className="gradient-text"> </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t("ProTeach beynəlxalq səviyyədə tanınmış idarəetmə sistemləri, ITSM təcrübələri və təşkilati inkişaf həlləri üzrə ixtisaslaşmış peşəkar təlim və konsultasiya mərkəzidir.",
                "ProTeach is a professional training and consulting center specializing in internationally recognized management systems, ITSM practices, and organizational development solutions.")}
              </p>
            </div>

            <div className="space-y-6">
              {/* Mission */}
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("Missiyamız", "Our Mission")}</h3>
                    <p className="text-gray-300">
                      {t("Keyfiyyət, innovasiya və davamlı təkmilləşdirmə öhdəliyi ilə ProTeach müxtəlif sənaye sahələrində fərdlərin və təşkilatların peşəkar bacarıqlarını gücləndirməyi hədəfləyir.",
                      "With a commitment to quality, innovation, and continuous improvement, ProTeach aims to strengthen the professional capabilities of individuals and organizations across various industries.")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-magenta/20 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-magenta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("Vizyonumuz", "Our Vision")}</h3>
                    <p className="text-gray-300">
                      {t(
    "Təlim, sertifikatlaşdırma və konsultasiya xidmətləri ilə təşkilatları qlobal standartlara və əməliyyat mükəmməlliyinə aparmaqdır.",
    "To guide organizations toward global standards and operational excellence through training, certification, and consulting services."
  )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold mb-4">{t("Dəyərlərimiz", "Our Values")}</h3>
              <div className="grid grid-cols-1 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-300">{t(value.az, value.en)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
