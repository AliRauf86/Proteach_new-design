import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseLevels from "@/components/CourseLevels";
import { useLanguage } from "@/contexts/LanguageContext";

const CourseLevelsPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t("Səviyyələr üzrə Kurs Müddətləri | PROTEACH", "Course Levels & Duration | PROTEACH")}</title>
        <meta name="description" content={t(
          "Təlim kurslarının səviyyələri və müddətləri - Foundation, Lead Implementer, Lead Auditor.",
          "Training course levels and durations - Foundation, Lead Implementer, Lead Auditor."
        )} />
      </Helmet>
      <Header />
      <main className="pt-24">
        <CourseLevels />
      </main>
      <Footer />
    </>
  );
};

export default CourseLevelsPage;
