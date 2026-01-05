import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Certification from "@/components/Certification";
import CertificationProcess from "@/components/CertificationProcess";
import CertificationCriteria from "@/components/CertificationCriteria";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const CertificationPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEO
        title={t(
          "Sertifikasiya Proqramları - ProTeach",
          "Certification Programs - ProTeach"
        )}
        description={t(
          "Beynəlxalq tanınan PECB sertifikatları: Foundation, Professional və Lead Auditor səviyyələri. ISO standartları üzrə sertifikasiya.",
          "Internationally recognized PECB certificates: Foundation, Professional and Lead Auditor levels. ISO standards certification."
        )}
        keywords={t(
          "PECB sertifikasiyası, ISO sertifikatı, Lead Auditor, beynəlxalq sertifikat",
          "PECB certification, ISO certificate, Lead Auditor, international certificate"
        )}
        url="https://proteach.az/certification"
        breadcrumb={[
          {
            position: 1,
            name: "Ana Səhifə",
            item: "https://proteach.az/",
          },
          {
            position: 2,
            name: "Sertifikasiya",
            item: "https://proteach.az/certification",
          },
        ]}
      />
      
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
