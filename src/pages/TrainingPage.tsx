import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Training from "@/components/Training";
import TrainingPortfolio from "@/components/TrainingPortfolio";
import CourseLevels from "@/components/CourseLevels";
import CertificationProcess from "@/components/CertificationProcess";
import DeliveryMethods from "@/components/DeliveryMethods";
import Footer from "@/components/Footer";

const TrainingPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t("Təlim Proqramları - PROTEACH", "Training Programs - PROTEACH")}</title>
        <meta name="description" content={t("ISO 27001, ISO 20000, ISO 9001, kibertəhlükəsizlik və rəqəmsal transformasiya üzrə peşəkar təlim proqramları. PECB akkreditə olunmuş təlimlər.", "Professional training programs on ISO 27001, ISO 20000, ISO 9001, cybersecurity and digital transformation. PECB accredited training.")} />
        <meta name="keywords" content={t("ISO təlimi, sertifikasiya təlimi, kibertəhlükəsizlik təlimi, PECB təlimi, peşəkar inkişaf", "ISO training, certification training, cybersecurity training, PECB training, professional development")} />
      </Helmet>
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <Training />
          <TrainingPortfolio />
          <CourseLevels />
          <CertificationProcess />
          <DeliveryMethods />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TrainingPage;
