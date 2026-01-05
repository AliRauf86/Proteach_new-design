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
      subtitle: t("Məlumat Təhlükəsizliyi İdarəetmə Sistemi", "Information Security Management System"),
      description: t(
      "Məlumat təhlükəsizliyi idarəetmə sistemlərinin tətbiqi və idarə edilməsi",
      "Implementation and management of information security management systems"
    ),
      details:
        t(
      "ISO/IEC 27001 beynəlxalq standartı təşkilatların informasiya təhlükəsizliyi idarəetmə sistemlərini (ISMS) qurmaq, həyata keçirmək, saxlamaq və davamlı olaraq təkmilləşdirmək üçün tələbləri müəyyən edir. Bu təlim proqramı sizə risk qiymətləndirməsi, nəzarət tədbirləri və audit bacarıqlarını öyrədəcək.",
      "The ISO/IEC 27001 international standard defines requirements for establishing, implementing, maintaining, and continuously improving an organization's information security management system (ISMS). This training program teaches risk assessment, control measures, and audit skills."
    ),
      duration: t("2 / 5 gün (Transition – 2 gün)", "2 / 5 days (Transition – 2 days)"),
      level: t("Fundamental / Lead Implementer / Lead Auditor", "Fundamental / Lead Implementer / Lead Auditor"),
    },
    {
      icon: Database,
      title: "ISO/IEC 20000",
      subtitle: t("İT Xidmətlərinin İdarə Edilməsi", "IT Service Management"),
      description: t(
      "İT xidmət idarəetmə sistemlərinin standartları və tətbiqi",
      "Standards and implementation of IT service management systems"
    ),
      details:
        t(
      "ISO/IEC 20000 IT xidmət idarəetməsi üzrə beynəlxalq standartdır. Təlim ITSM proseslərinin planlaşdırılması, təşkili və davamlı təkmilləşdirilməsi mövzularını əhatə edir.",
      "ISO/IEC 20000 is the international standard for IT service management. The training covers planning, implementation, operation, and continual improvement of ITSM processes."
    ),
      duration: t("2 / 5 gün", "2 / 5 days"),
      level: t(
      "Foundation / Lead Implementer / Lead Auditor",
      "Foundation / Lead Implementer / Lead Auditor"
    ),
    },
    {
      icon: Lock,
      title: t("Kibertəhlükəsizlik", "Cybersecurity"),
      subtitle: t("Kiber Təhlükəsizlik Təlimi", "Cybersecurity Training"),
      description: t(
      "Müasir kibertəhdidlərə qarşı müdafiə strategiyaları",
      "Defense strategies against modern cyber threats"
    ),
      details:
        t(
      "Bu təlim şəbəkə təhlükəsizliyi, təhdidlərin aşkarlanması, insidentlərə cavab və zərərli proqramların təhlilini əhatə edir. Praktiki ssenarilər üzərindən real risklərə yanaşma təqdim olunur.",
      "This training covers network security, threat detection, incident response, and malware analysis, using practical scenarios to address real-world cyber risks."
    ),
      duration: t("2–5 gün", "2–5 days"),
      level: t("Başlanğıc – Peşəkar", "Beginner to Advanced"),
    },
    {
      icon: Brain,
      title: t("Süni İntellekt", "Artificial Intelligence"),
      subtitle: t("Süni İntellekt", "Artificial Intelligence"),
      description: t(
      "Süni intellekt texnologiyalarının biznesdə tətbiqi",
      "Business application of artificial intelligence technologies"
    ),
      details:
        t(
      "Bu təlim süni intellekt və maşın öyrənməsi texnologiyalarının biznes proseslərinə inteqrasiyasını, AI strategiyalarını və etik yanaşmaları əhatə edir.",
      "This training focuses on integrating AI and machine learning into business processes, including AI strategy development and ethical considerations."
    ),
      duration: t("2–5 gün", "2–5 days"),
      level: t("Foundation / Professional", "Foundation / Professional"),
    },
    {
      icon: Award,
      title: t("ISO 9001", "ISO 9001"),
      subtitle: t("Keyfiyyət İdarəetmə Sistemi", "Quality Management System"),
      description: t(
      "Keyfiyyət idarəetmə sistemlərinin qurulması və inkişafı",
      "Design and improvement of quality management systems"
    ),
      details:
        t(
      "ISO 9001 üzrə təlim proses yanaşması, müştəri məmnuniyyəti və davamlı təkmilləşdirmə prinsipləri əsasında təşkilatın keyfiyyət performansını artırmağa yönəlib.",
      "ISO 9001 training focuses on improving organizational quality performance through process approach, customer satisfaction, and continual improvement principles."
    ),
      duration: t("2 / 5 gün", "2 / 5 days"),
      level: t(
      "Foundation / Lead Implementer / Lead Auditor",
      "Foundation / Lead Implementer / Lead Auditor"
    ),
    },
    {
      icon: Network,
      title: t("Rəqəmsal Transformasiya", "Digital Transformation"),
      subtitle: t("Biznesin Rəqəmsallaşdırılması", "Business Digitalization"),
      description: t(
      "Biznes proseslərinin rəqəmsallaşdırılması strategiyaları",
      "Strategies for digitizing business processes"
    ),
      details:
        t(
      "Bu təlim təşkilatların rəqəmsal strategiyalarını planlaşdırmaq və icra etmək üçün cloud, IoT və data analytics mövzularını əhatə edir.",
      "This training enables organizations to plan and execute digital strategies, covering cloud computing, IoT, and data analytics."
    ),
      duration: t("5 gün", "5 days"),
      level: t("Professional", "Professional"),
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

        <div className="mt-16 text-center">
  <Button
    size="lg"
    className="px-10 bg-accent hover:bg-accent/90"
    onClick={() => {
      window.location.href = "/training/portfolio";
    }}
  >
    {t("Bütün təlimlər", "View All Trainings")}
  </Button>
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
                <Button className="w-full bg-accent hover:bg-accent/90" size="lg" 
                  onClick={() => {
                  setSelectedCourse(null); // Dialog-u bağlayır
    window.location.href = "/contact"; // contact səhifəsinə yönləndirir
  }}>
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
