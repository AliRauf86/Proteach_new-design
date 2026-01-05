import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertificationProcess from "@/components/CertificationProcess";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const CertificationProcessPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t(
          "Təlim və Sertifikatlaşdırma Prosesi | ProTeach",
          "Training & Certification Process | ProTeach"
        )}
        description={t(
          "PROTEACH təlim və sertifikatlaşdırma prosesi - qeydiyyatdan sertifikat almağa qədər bütün mərhələlər.",
          "PROTEACH training and certification process - all stages from registration to certificate acquisition."
        )}
        keywords={t(
          "təlim prosesi, sertifikatlaşdırma prosesi, PECB, ProTeach təlim, qeydiyyat və sertifikat",
          "training process, certification process, PECB, ProTeach training, registration and certificate"
        )}
        url="https://proteach.az/training/process"
        breadcrumb={[
          {
      position: 1,
      name: t("Ana Səhifə", "Home"),
      item: "https://proteach.az", 
    },
    {
      position: 2,
      name: t("Təlimlər", "Training"),
      item: "https://proteach.az/training",
    },
    {
      position: 3,
      name: t("Sertifikatlaşdırma Prosesi", "Certification Process"), 
      item: "https://proteach.az/training/process",
    },
        ]}
      />
      
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <CertificationProcess />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CertificationProcessPage;
