import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";

const SolutionsPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t("Rəqəmsal Transformasiya Həlləri - PROTEACH", "Digital Transformation Solutions - PROTEACH")}</title>
        <meta name="description" content={t("ERP sistemləri, layihə idarəetməsi, proqram təminatı və proses optimallaşdırması. Biznesinizi rəqəmsal dövrə çevirin.", "ERP systems, project management, software solutions and process optimization. Transform your business into the digital age.")} />
        <meta name="keywords" content={t("rəqəmsal transformasiya, ERP həlləri, layihə idarəetməsi, proqram təminatı, proses optimallaşdırması", "digital transformation, ERP solutions, project management, software solutions, process optimization")} />
      </Helmet>
      <div className="min-h-screen">
        <Header />
      <main className="pt-24">
        <Solutions />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default SolutionsPage;
