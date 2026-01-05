import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseLevels from "@/components/CourseLevels";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const CourseLevelsPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t(
          "Səviyyələr üzrə Kurs Müddətləri | ProTeach",
          "Course Levels & Duration | ProTeach"
        )}
        description={t(
          "Təlim kurslarının səviyyələri və müddətləri - Foundation, Lead Implementer, Lead Auditor.",
          "Training course levels and durations - Foundation, Lead Implementer, Lead Auditor."
        )}
        keywords={t(
          "kurs səviyyələri, təlim müddətləri, Foundation, Lead Implementer, Lead Auditor",
          "course levels, training duration, Foundation, Lead Implementer, Lead Auditor"
        )}
        canonical="https://proteach.az/training/levels"
        breadcrumbs={[
          { name: "Ana Səhifə", url: "https://proteach.az/" },
          { name: "Təlimlər", url: "https://proteach.az/training" },
          { name: "Kurs Səviyyələri", url: "https://proteach.az/training/levels" }
        ]}
      />
      
      <Header />
      <main className="pt-24">
        <CourseLevels />
      </main>
      <Footer />
    </>
  );
};

export default CourseLevelsPage;
