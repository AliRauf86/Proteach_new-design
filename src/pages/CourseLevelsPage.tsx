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
        url="https://proteach.az/training/levels" 
  breadcrumb={[ 
    { 
      position: 1, 
      name: t("Ana Səhifə", "Home"), 
      item: "https://proteach.az"
    },
    { 
      position: 2, 
      name: t("Təlimlər", "Training"), 
      item: "https://proteach.az/training" 
    },
    { 
      position: 3, 
      name: t("Kurs Səviyyələri", "Course Levels"), 
      item: "https://proteach.az/training/levels" 
    },
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
