import { useLanguage } from "@/contexts/LanguageContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CertificationCriteria = () => {
  const { t } = useLanguage();

  const criteriaData = [
    {
      exam: "Foundation",
      designation: "Foundation",
      professionalExp: "-",
      auditExp: "-",
      projectExp: "-",
    },
    {
      exam: "Lead Manager",
      designation: "Manager",
      professionalExp: t("2 il (1 il ixtisas üzrə)", "2 years (1 year in specialty)"),
      auditExp: "-",
      projectExp: t("200 saat", "200 hours"),
    },
    {
      exam: "Lead Manager",
      designation: "Lead Manager",
      professionalExp: t("5 il (2 il ixtisas üzrə)", "5 years (2 years in specialty)"),
      auditExp: "-",
      projectExp: t("300 saat", "300 hours"),
    },
    {
      exam: "Lead Manager",
      designation: "Senior Lead Manager",
      professionalExp: t("10 il (7 il ixtisas üzrə)", "10 years (7 years in specialty)"),
      auditExp: "-",
      projectExp: t("1000 saat", "1000 hours"),
    },
    {
      exam: "Lead Auditor",
      designation: "Auditor",
      professionalExp: t("2 il (1 il ixtisas üzrə)", "2 years (1 year in specialty)"),
      auditExp: t("200 saat", "200 hours"),
      projectExp: "-",
    },
    {
      exam: "Lead Auditor",
      designation: "Lead Auditor",
      professionalExp: t("5 il (2 il ixtisas üzrə)", "5 years (2 years in specialty)"),
      auditExp: t("300 saat", "300 hours"),
      projectExp: "-",
    },
    {
      exam: "Lead Auditor",
      designation: "Senior Lead Auditor",
      professionalExp: t("10 il (7 il ixtisas üzrə)", "10 years (7 years in specialty)"),
      auditExp: t("1000 saat", "1000 hours"),
      projectExp: "-",
    },
    {
      exam: "Lead Implementer",
      designation: "Implementer",
      professionalExp: t("2 il (1 il ixtisas üzrə)", "2 years (1 year in specialty)"),
      auditExp: "-",
      projectExp: t("200 saat", "200 hours"),
    },
    {
      exam: "Lead Implementer",
      designation: "Lead Implementer",
      professionalExp: t("5 il (2 il ixtisas üzrə)", "5 years (2 years in specialty)"),
      auditExp: "-",
      projectExp: t("300 saat", "300 hours"),
    },
    {
      exam: "Lead Implementer",
      designation: "Senior Lead Implementer",
      professionalExp: t("10 il (7 il ixtisas üzrə)", "10 years (7 years in specialty)"),
      auditExp: "-",
      projectExp: t("1000 saat", "1000 hours"),
    },
    {
      exam: "Master",
      designation: "Master",
      professionalExp: t("20 il (ixtisas üzrə lider rolunda 10 il)", "20 years (10 years in leader role in specialty)"),
      auditExp: t("10,000 saat (audit və layihə kombinasiyası)", "10,000 hours (audit and project combination)"),
      projectExp: "-",
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
            {t("Sertifikatlaşdırma meyarları:", "Certification Criteria:")} <span className="gradient-text">{t("Təyinat, Təcrübə və Layihə Tələbləri", "Designation, Experience and Project Requirements")}</span>
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 overflow-hidden shadow-elegant">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-muted">
                  <TableHead className="text-navy/70">{t("İmtahan", "Exam")}</TableHead>
                  <TableHead className="text-navy/70">{t("Təyinat", "Designation")}</TableHead>
                  <TableHead className="text-navy/70">{t("Peşəkar təcrübə", "Professional Experience")}</TableHead>
                  <TableHead className="text-navy/70">{t("Audit təcrübəsi", "Audit Experience")}</TableHead>
                  <TableHead className="text-navy/70">{t("Layihə təcrübəsi", "Project Experience")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
  {criteriaData.map((row, index) => {
    const rowSpan = getRowSpan(criteriaData, index);
const getRowSpan = (
  data: typeof criteriaData,
  index: number
): number => {
  const currentExam = data[index].exam;

  if (index > 0 && data[index - 1].exam === currentExam) {
    return 0;
  }

  let span = 1;
  for (let i = index + 1; i < data.length; i++) {
    if (data[i].exam === currentExam) span++;
    else break;
  }

  return span;
};
    return (
      <TableRow
        key={index}
        className="border-muted hover:bg-muted/50 transition-colors"
      >
        {/* Exam sütunu – YALNIZ bir dəfə göstərilir */}
        {rowSpan > 0 && (
          <TableCell
            rowSpan={rowSpan}
            className="font-semibold text-navy align-top bg-muted/30"
          >
            {row.exam}
          </TableCell>
        )}

        <TableCell className="text-accent font-medium">
          {row.designation}
        </TableCell>

        <TableCell className="text-navy/80">
          {row.professionalExp}
        </TableCell>

        <TableCell className="text-navy/80">
          {row.auditExp}
        </TableCell>

        <TableCell className="text-navy/80">
          {row.projectExp}
        </TableCell>
      </TableRow>
    );
  })}
</TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground mt-6 italic">
            {t(
              "Qeyd: ANAB tərəfindən Akkreditə olunmuş Foundation Sertifikat Proqramları üçün müvafiq təlim kursunda iştirak etmək məcburi tələbdir.",
              "Note: Participation in the relevant training course is mandatory for ANAB accredited Foundation Certificate Programs."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationCriteria;
