import { useState } from "react";
import { Shield, Lock, Database, Brain, Network, Award, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

const Training = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const { t } = useLanguage();

  const courses = [
    {
      icon: Shield,
      title: "ISO/IEC 27001",
      subtitle: "Information Security Management System",
      description: "Məlumat təhlükəsizliyi idarəetmə sistemlərinin tətbiqi və idarə edilməsi",
      details:
        "ISO/IEC 27001 beynəlxalq standartı təşkilatların informasiya təhlükəsizliyi idarəetmə sistemlərini (ISMS) qurmaq, həyata keçirmək, saxlamaq və davamlı olaraq təkmilləşdirmək üçün tələbləri müəyyən edir. Bu təlim proqramı sizə risk qiymətləndirməsi, nəzarət tədbirləri və audit bacarıqlarını öyrədəcək.",
      duration: "2 / 5 gün (Transition – 2 gün)",
      level: "Fundamental / Lead Implementer / Lead Auditor",
    },
    {
      icon: Database,
      title: "ISO/IEC 20000",
      subtitle: "IT Service Management",
      description: "IT xidmət idarəetmə sistemlərinin standartları və tətbiqi",
      details:
        "ISO/IEC 20000 IT xidmət idarəetməsi üçün beynəlxalq standartdır. Bu sertifikasiya proqramı ITSM proseslərinin planlaşdırılması, təşkili və idarə edilməsini əhatə edir. Xidmət səviyyəsi razılaşmaları, dəyişiklik idarəetməsi və davamlı təkmilləşdirmə metodologiyaları öyrədilir.",
      duration: "2 / 5 gün",
      level: "Foundation / Lead Implementer / Lead Auditor",
    },
    {
      icon: Lock,
      title: "Kibertəhlükəsizlik",
      subtitle: "Cybersecurity Training",
      description: "Müasir kibertəhdidlərə qarşı müdafiə strategiyaları",
      details:
        "Kibertəhlükəsizlik təlimi şəbəkə təhlükəsizliyi, təhdid kəşfiyyatı, hadisələrə cavab vermə və zərərli proqram təhlili kimi mövzuları əhatə edir. Praktik ssenarilərlə real dünya təhdidlərinə qarşı müdafiə bacarıqlarını inkişaf etdiririk.",
      duration: "2-5 gün",
      level: "Beginner to Advanced",
    },
    {
      icon: Brain,
      title: "Süni İntellekt",
      subtitle: "Artificial Intelligence",
      description: "AI texnologiyalarının biznesə tətbiqi və idarə edilməsi",
      details:
        "Süni intellekt və maşın öyrənməsi texnologiyalarının biznes proseslərinə inteqrasiyası üzrə təlim. AI strategiyaları, etika məsələləri və praktik tətbiq üsulları öyrədilir.",
      duration: "2-5 gün",
      level: "Foundation / Professional",
    },
    {
      icon: Award,
      title: "ISO 9001",
      subtitle: "Quality Management System",
      description: "Keyfiyyət idarəetmə sistemlərinin qurulması və inkişafı",
      details:
        "ISO 9001 keyfiyyət idarəetmə sistemləri standartı üzrə sertifikasiya təlimi. Proses yanaşması, müştəri məmnuniyyəti və davamlı təkmilləşdirmə prinsipləri əsasında təşkilatın keyfiyyət performansını artırmaq üsulları öyrədilir.",
      duration: "2 / 5 gün",
      level: "Foundation / Lead Implementer / Lead Auditor",
    },
    {
      icon: Network,
      title: "Rəqəmsal Transformasiya",
      subtitle: "Digital Transformation",
      description: "Biznes proseslərinin rəqəmsallaşdırılması strategiyaları",
      details:
        "Rəqəmsal transformasiya təlimi təşkilatların texnoloji inkişaf strategiyalarını planlaşdırmaq və həyata keçirmək üçün lazımi bilik və bacarıqları təqdim edir. Cloud computing, IoT və data analytics kimi mövzular əhatə olunur.",
      duration: "5 gün",
      level: "Professional",
    },
  ];

  return (
    <section id="training" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-magenta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t("Peşəkar", "Professional")} <span className="gradient-text">{t("Təlim Proqramları", "Training Programs")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Beynəlxalq standartlar və ən yaxşı təcrübələr əsasında hazırlanmış təlim kurslarımız",
              "Our training courses are designed based on international standards and best practices"
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="glass-dark rounded-2xl p-8 hover-lift group cursor-pointer animate-fade-in-up"
              onClick={() => setSelectedCourse(index)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                <course.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-navy">{course.title}</h3>
              <p className="text-sm text-accent font-semibold mb-3">{course.subtitle}</p>
              <p className="text-muted-foreground mb-6">{course.description}</p>
              <Button variant="ghost" className="w-full group-hover:bg-accent/10">
                {t("Ətraflı", "Learn More")}
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details Dialog */}
      <Dialog open={selectedCourse !== null} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-2xl">
          {selectedCourse !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                    {(() => {
                      const Icon = courses[selectedCourse].icon;
                      return <Icon className="w-6 h-6 text-accent" />;
                    })()}
                  </div>
                  {courses[selectedCourse].title}
                </DialogTitle>
                <DialogDescription className="text-accent font-semibold text-lg">
                  {courses[selectedCourse].subtitle}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                <p className="text-muted-foreground leading-relaxed">
                  {courses[selectedCourse].details}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-dark p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">{t("Müddət", "Duration")}</p>
                    <p className="font-semibold text-navy">{courses[selectedCourse].duration}</p>
                  </div>
                  <div className="glass-dark p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">{t("Səviyyə", "Level")}</p>
                    <p className="font-semibold text-navy">{courses[selectedCourse].level}</p>
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                  {t("Qeydiyyatdan keçin", "Register Now")}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Training;
