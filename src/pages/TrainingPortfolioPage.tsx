import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainingPortfolio from "@/components/TrainingPortfolio";
import { useLanguage } from "@/contexts/LanguageContext";

const TrainingPortfolioPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t("Təlim Portfeli | PROTEACH", "Training Portfolio | PROTEACH")}</title>
        <meta name="description" content={t(
          "PROTEACH təlim portfeli - ISO, PECB və digər beynəlxalq standartlar üzrə peşəkar təlim proqramları.",
          "PROTEACH training portfolio - Professional training programs on ISO, PECB and other international standards."
        )} />
      </Helmet>
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
