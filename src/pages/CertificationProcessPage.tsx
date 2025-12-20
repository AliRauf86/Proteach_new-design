import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertificationProcess from "@/components/CertificationProcess";
import { useLanguage } from "@/contexts/LanguageContext";

const CertificationProcessPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t("Təlim və Sertifikatlaşdırma Prosesi | PROTEACH", "Training & Certification Process | PROTEACH")}</title>
        <meta name="description" content={t(
          "PROTEACH təlim və sertifikatlaşdırma prosesi - qeydiyyatdan sertifikat almağa qədər bütün mərhələlər.",
          "PROTEACH training and certification process - all stages from registration to certificate acquisition."
        )} />
      </Helmet>
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
