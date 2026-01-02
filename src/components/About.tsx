import { Target, Eye, CheckCircle } from "lucide-react";
import consultant from "@/assets/consultant.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const values = [
    "Peşəkarlıq və etibarlılıq",
    "Davamlı inkişaf və innovasiya",
    "Müştəri məmnuniyyəti",
    "Şəffaflıq və məsuliyyət",
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
                {t("Haqqımızda", "About")} <span className="gradient-text"> </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                ProTeach beynəlxalq səviyyədə tanınmış idarəetmə sistemləri, 
                ITSM təcrübələri və təşkilati inkişaf həlləri üzrə ixtisaslaşmış peşəkar təlim və konsultasiya mərkəzidir.
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
                    <h3 className="text-xl font-bold mb-2">Missiyamız</h3>
                    <p className="text-gray-300">
                      Keyfiyyət, innovasiya və davamlı təkmilləşdirmə öhdəliyi ilə ProTeach müxtəlif sənaye sahələrində 
                      fərdlərin və təşkilatların peşəkar bacarıqlarını gücləndirməyi hədəfləyir.
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
                    <h3 className="text-xl font-bold mb-2">Vizyonumuz</h3>
                    <p className="text-gray-300">
                      Təlim, sertifikatlaşdırma və konsultasiya xidmətləri ilə təşkilatları 
                      qlobal standartlara və əməliyyat mükəmməlliyinə aparmaqdır.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Dəyərlərimiz</h3>
              <div className="grid grid-cols-1 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-300">{value}</span>
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
