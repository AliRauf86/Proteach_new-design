import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Certification from "@/components/Certification";
import CertificationProcess from "@/components/CertificationProcess";
import CertificationCriteria from "@/components/CertificationCriteria";
import Footer from "@/components/Footer";

const CertificationPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t("Sertifikasiya Proqramları - PROTEACH", "Certification Programs - PROTEACH")}</title>
        <meta name="description" content={t("Beynəlxalq tanınan PECB sertifikatları: Foundation, Professional və Lead Auditor səviyyələri. ISO standartları üzrə sertifikasiya.", "Internationally recognized PECB certificates: Foundation, Professional and Lead Auditor levels. ISO standards certification.")} />
        <meta name="keywords" content={t("PECB sertifikasiyası, ISO sertifikatı, Lead Auditor, beynəlxalq sertifikat", "PECB certification, ISO certificate, Lead Auditor, international certificate")} />
      </Helmet>
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <Certification />
          <CertificationProcess />
          <CertificationCriteria />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CertificationPage;
