import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertificationCriteria from "@/components/CertificationCriteria";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const CertificationCriteriaPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t("Sertifikatlaşdırma Meyarları | ProTeach", "Certification Criteria | ProTeach")}
        description={t(
          "Sertifikatlaşdırma meyarları - təyinat, təcrübə və layihə tələbləri.",
          "Certification criteria - designation, experience and project requirements."
        )}
        keywords={t(
          "sertifikatlaşdırma meyarları, PECB, ProTeach təlim, sertifikasiya tələbləri",
          "certification criteria, PECB, ProTeach training, certification requirements"
        )}
        url="https://proteach.az/training/criteria"
        breadcrumb={[
          { position: 1, name: "Ana Səhifə", item: "https://proteach.az/" },
          { position: 2, name: "Təlimlər", item: "https://proteach.az/training" },
          { position: 3, name: "Sertifikatlaşdırma Meyarları", item: "https://proteach.az/training/criteria" },
        ]}
      />
      
      <Header />
      <main className="pt-24">
        <CertificationCriteria />
      </main>
      <Footer />
    </>
  );
};

export default CertificationCriteriaPage;
