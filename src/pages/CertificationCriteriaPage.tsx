import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertificationCriteria from "@/components/CertificationCriteria";
import { useLanguage } from "@/contexts/LanguageContext";

const CertificationCriteriaPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t("Sertifikatlaşdırma Meyarları | PROTEACH", "Certification Criteria | PROTEACH")}</title>
        <meta name="description" content={t(
          "Sertifikatlaşdırma meyarları - təyinat, təcrübə və layihə tələbləri.",
          "Certification criteria - designation, experience and project requirements."
        )} />
      </Helmet>
      <Header />
      <main className="pt-24">
        <CertificationCriteria />
      </main>
      <Footer />
    </>
  );
};

export default CertificationCriteriaPage;
