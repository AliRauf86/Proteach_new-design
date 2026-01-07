import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainingPortfolio from "@/components/TrainingPortfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const TrainingPortfolioPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t("Təlim Portfeli | ProTeach", "Training Portfolio | ProTeach")}
        description={t(
          "ProTeach təlim portfeli - ISO, PECB və digər beynəlxalq standartlar üzrə peşəkar təlim proqramları.",
          "ProTeach training portfolio - Professional training programs on ISO, PECB and other international standards."
        )}
        keywords={t(
          "təlim portfeli, ISO təlimi, PECB təlimi, peşəkar təlim, beynəlxalq standartlar",
          "training portfolio, ISO training, PECB training, professional training, international standards"
        )}
        canonical="https://proteach.az/training/portfolio"
        breadcrumb={[
    { 
      position: 1, 
      name: t("Ana Səhifə", "Home"), 
      item: "https://proteach.az/" 
    },
    { 
      position: 2, 
      name: t("Təlimlər", "Training"), 
      item: "https://proteach.az/training" 
    },
    { 
      position: 3, 
      name: t("Təlim Portfeli", "Training Portfolio"), 
      item: "https://proteach.az/training/portfolio" 
    },
        ]}
      />
      
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <TrainingPortfolio />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TrainingPortfolioPage;
