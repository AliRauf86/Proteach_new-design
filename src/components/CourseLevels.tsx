import { useLanguage } from "@/contexts/LanguageContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CourseLevels = () => {
  const { t } = useLanguage();

  const isoCourseLevels = [
    {
      level: "Foundation",
      participants: t(
        "İdarəetmə sisteminin və onun proseslərinin tətbiqinin əsaslarını öyrənmək istəyən şəxslər",
        "Individuals who want to learn the fundamentals of management system implementation and its processes"
      ),
      duration: t("2 gün", "2 days"),
    },
    {
      level: "Lead Implementer",
      participants: t(
        "Şirkətlərində idarəetmə sisteminin tətbiqi və idarə olunmasına cavabdeh şəxslər",
        "Individuals responsible for implementation and management of management systems in their companies"
      ),
      duration: t("5 gün", "5 days"),
    },
    {
      level: "Lead Auditor",
      participants: t(
        "İdarəetmə sistemlərinin auditini həyata keçirən və onların monitorinqinə cavabdeh şəxslər",
        "Individuals who conduct audits of management systems and are responsible for their monitoring"
      ),
      duration: t("5 gün", "5 days"),
    },
  ];

  const managerCourseLevels = [
    {
      level: "Foundation",
      participants: t(
        "Müvafiq sahə və ya standart üzrə proseslərin və prosedurların əsaslarını öyrənmək istəyən şəxslər",
        "Individuals who want to learn the fundamentals of processes and procedures for the relevant field or standard"
      ),
      duration: t("2 gün", "2 days"),
    },
    {
      level: "Manager / Officer",
      participants: t(
        "Müvafiq sahədə fəaliyyət göstərən və müxtəlif proqramlar, planlar, strategiyalar üçün proseslərin tətbiqi üzrə bilik və bacarıqlarını inkişaf etdirmək istəyən menecerlər",
        "Managers working in the relevant field who want to develop their knowledge and skills in implementing processes for various programs, plans and strategies"
      ),
      duration: t("3 gün", "3 days"),
    },
    {
      level: "Lead Manager / Officer",
      participants: t(
        "Müvafiq sahədə fəaliyyət göstərən, planları, qiymətləndirmələri idarə etmək, həmçinin idarəetmə üzrə peşəkarlıq səviyyəsini inkişaf etdirmək istəyən menecerlər",
        "Managers working in the relevant field who want to manage plans, assessments and develop their management professionalism"
      ),
      duration: t("5 gün", "5 days"),
    },
  ];

  const cyberCourseLevels = [
    {
      level: "Offensive",
      participants: t(
        "Zərərli fəaliyyət göstərən hakerlərin istifadə etdikləri taktika və texnikalar haqqında daha geniş bilik əldə etmək istəyən mütəxəssislər",
        "Specialists who want to gain broader knowledge about tactics and techniques used by malicious hackers"
      ),
      duration: t("5 gün", "5 days"),
    },
    {
      level: "Defensive",
      participants: t(
        "Müdafiə imkanlarını artırmaq və sistemlərin möhkəmləndirilməsi üzrə ən yaxşı təcrübələri öyrənmək istəyən şəxslər",
        "Individuals who want to enhance defense capabilities and learn best practices in system hardening"
      ),
      duration: t("5 gün", "5 days"),
    },
    {
      level: "Forensics",
      participants: t(
        "Rəqəmsal kriminalistika üçün vacib olan geniş diapazonda bacarıq və biliklər öyrənmək istəyən mütəxəssislər",
        "Specialists who want to learn a wide range of skills and knowledge essential for digital forensics"
      ),
      duration: t("5 gün", "5 days"),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-magenta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-navy">
            {t("Səviyyələr üzrə", "Course Duration by")} <span className="gradient-text">{t("Təlim Kursu Müddətləri", "Level")}</span>
          </h2>
        </div>

        <div className="space-y-10">
          {/* ISO Training Courses */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold mb-6 text-navy">{t("ISO Təlim Kursları", "ISO Training Courses")}</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-muted">
                    <TableHead className="w-[150px] text-navy/70">{t("Səviyyə", "Level")}</TableHead>
                    <TableHead className="text-navy/70">{t("Kimlər iştirak edə bilər", "Who can participate")}</TableHead>
                    <TableHead className="w-[100px] text-navy/70">{t("Müddət", "Duration")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isoCourseLevels.map((course, index) => (
                    <TableRow key={index} className="border-muted hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium text-navy">{course.level}</TableCell>
                      <TableCell className="text-navy/80">{course.participants}</TableCell>
                      <TableCell className="text-accent font-medium">{course.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Manager Training Courses */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold mb-6 text-navy">{t("Menecer Təlim Kursları", "Manager Training Courses")}</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-muted">
                    <TableHead className="w-[180px] text-navy/70">{t("Səviyyə", "Level")}</TableHead>
                    <TableHead className="text-navy/70">{t("Kimlər iştirak edə bilər", "Who can participate")}</TableHead>
                    <TableHead className="w-[100px] text-navy/70">{t("Müddət", "Duration")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {managerCourseLevels.map((course, index) => (
                    <TableRow key={index} className="border-muted hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium text-navy">{course.level}</TableCell>
                      <TableCell className="text-navy/80">{course.participants}</TableCell>
                      <TableCell className="text-accent font-medium">{course.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Cybersecurity Training Courses */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold mb-6 text-navy">{t("Texniki Kibertəhlükəsizlik Kursları", "Technical Cybersecurity Courses")}</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-muted">
                    <TableHead className="w-[150px] text-navy/70">{t("Səviyyə", "Level")}</TableHead>
                    <TableHead className="text-navy/70">{t("Kimlər iştirak edə bilər", "Who can participate")}</TableHead>
                    <TableHead className="w-[100px] text-navy/70">{t("Müddət", "Duration")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cyberCourseLevels.map((course, index) => (
                    <TableRow key={index} className="border-muted hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium text-navy">{course.level}</TableCell>
                      <TableCell className="text-navy/80">{course.participants}</TableCell>
                      <TableCell className="text-accent font-medium">{course.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseLevels;
