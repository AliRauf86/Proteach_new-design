import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SolutionsPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEO
        title={t("Rəqəmsal Transformasiya Həlləri | ProTeach", "Digital Transformation Solutions | ProTeach")}
        description={t(
          "ERP sistemləri, layihə idarəetməsi, proqram təminatı və proses optimallaşdırması. Biznesinizi rəqəmsal dövrə çevirin.",
          "ERP systems, project management, software solutions and process optimization. Transform your business into the digital age."
        )}
        keywords={t(
          "rəqəmsal transformasiya, ERP həlləri, layihə idarəetməsi, proqram təminatı, proses optimallaşdırması",
          "digital transformation, ERP solutions, project management, software solutions, process optimization"
        )}
        url="https://proteach.az/solutions"
        breadcrumb={[
    { 
      position: 1, 
      name: t("Ana Səhifə", "Home"), 
      item: "https://proteach.az/" 
    },
    { 
      position: 2, 
      name: t("Rəqəmsal Transformasiya Həlləri", "Digital Transformation Solutions"), 
      item: "https://proteach.az/solutions" 
    },
        ]}
      />
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
