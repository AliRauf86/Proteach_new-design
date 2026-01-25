import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Training from "@/components/Training";
import TrainingPortfolio from "@/components/TrainingPortfolio";
import CourseLevels from "@/components/CourseLevels";
import CertificationProcess from "@/components/CertificationProcess";
import DeliveryMethods from "@/components/DeliveryMethods";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TrainingPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEO
        title={t("Təlim Proqramları | ProTeach", "Training Programs | ProTeach")}
        description={t(
          "ISO 27001, ISO 20000, ISO 9001, kibertəhlükəsizlik və rəqəmsal transformasiya üzrə peşəkar təlim proqramları. PECB akkreditə olunmuş təlimlər.",
          "Professional training programs on ISO 27001, ISO 20000, ISO 9001, cybersecurity and digital transformation. PECB accredited training."
        )}
        keywords={t(
          "ISO təlimi, sertifikasiya təlimi, kibertəhlükəsizlik təlimi, PECB təlimi, peşəkar inkişaf",
          "ISO training, certification training, cybersecurity training, PECB training, professional development"
        )}
        url="https://proteach.az/training"
        breadcrumb={[
    { 
      position: 1, 
      name: t("Ana Səhifə", "Home"), 
      item: "https://proteach.az/" 
    },
    { 
      position: 2, 
      name: t("Təlim Proqramları", "Training Programs"), 
      item: "https://proteach.az/training" 
    }
        ]}
      />
      
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <h1 className="sr-only">
    {t("Təlim Proqramları | ProTeach", "Training Programs | ProTeach")}
  </h1>
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
