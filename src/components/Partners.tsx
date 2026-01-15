import { useLanguage } from "@/contexts/LanguageContext";
import pecbLogo from "@/assets/pecb-partner.png";

const Partners = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-magenta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-navy">
            {t("Bizim", "Our")} <span className="gradient-text">{t("Tərəfdaşlarımız", "Partners")}</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg leading-relaxed">
            {t(
              "Beynəlxalq standartlar üzrə təlim və sertifikasiya sahəsində etibarlı tərəfdaşlarımız",
              "Our trusted partners in training and certification for international standards"
            )}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* PECB Partnership Card */}
          <div className="bg-white rounded-2xl shadow-elegant p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <img 
                  src={pecbLogo} 
                  alt="PECB Authorized Partner" 
                  className="w-48 h-auto"
                />
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {t("24 Noyabr 2025", "November 24, 2025")}
                </div>
                
                <div className="space-y-4 text-navy/80">
                  <p>
                    {t(
                      "ProTeach artıq PECB ilə rəsmi tərəfdaşdır. Bu tərəfdaşlıq Azərbaycanda ISO standartları üzrə təlim kursları və sertifikasiya təqdim etməklə rəqabətli qiymətlərlə əhəmiyyətli üstünlüklər təmin edəcəkdir.",
                      "ProTeach is now an official partner with PECB. This partnership will deliver significant benefits at competitive prices, by providing training courses and certification of ISO standards in Azerbaijan."
                    )}
                  </p>
                  
                  <blockquote className="border-l-4 border-accent pl-4 italic text-navy/70">
                    {t(
                      "\"Proteach ilə tərəfdaşlığımız müştərilərimizin gələcəkləri üçün daha yaxşı planlaşdırma üçün lazım olan təcrübəni əldə etmələrini təmin etmək üçün qiymətli fürsət yaradacaq.\"",
                      "\"Our partnership with Proteach will provide us with a valuable opportunity to ensure that our customers acquire the expertise they need to better plan for their futures.\""
                    )}
                    <span className="block mt-2 text-sm font-medium text-navy">— Tim Rama, PECB CEO</span>
                  </blockquote>
                  
                  <p>
                    {t(
                      "Məqsədimiz müştərilərə PECB təlim kurslarının karyera maraqları və aspirasiyaları ilə necə birbaşa əlaqəli olduğunu göstərmək və PECB təlim kurslarında öyrəndikləri bacarıqları real dünya problemlərinin həllinə tətbiq etmələrinə kömək etməkdir.",
                      "It is our objective to show customers how PECB training courses directly relate to their career interests and aspirations, and to aid them in applying the skills they learn in PECB's training courses to solve real-world problems."
                    )}
                  </p>
                </div>

                <div className="pt-4 border-t border-muted">
                  <h4 className="font-semibold text-navy mb-2">{t("PECB haqqında", "About PECB")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "PECB müxtəlif sahələrdə hərtərəfli təhsil, sertifikasiya və sertifikat proqramları vasitəsilə rəqəmsal etimadı inkişaf etdirməyə həsr olunmuş sertifikasiya orqanıdır. 150-dən çox ölkədə mövcudluğumuz ilə mütəxəssislərə beynəlxalq tanınmış standartlara uyğun dünya səviyyəli sertifikasiya proqramları təklif edərək rəqəmsal təhlükəsizlik və digər sahələrdə təcrübələrini inkişaf etdirməyə və nümayiş etdirməyə kömək edirik.",
                      "PECB is a certification body dedicated to fostering digital trust through comprehensive education, certification, and certificate programs across various disciplines. Through our presence in more than 150 countries, we help professionals develop and demonstrate their expertise in digital security and beyond by offering world-class certification programs aligned with internationally recognized standards."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
