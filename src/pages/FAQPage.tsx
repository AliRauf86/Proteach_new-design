import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const FAQPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t("Tez-tez Verilən Suallar - PROTEACH", "Frequently Asked Questions - PROTEACH")}</title>
        <meta name="description" content={t("PROTEACH təlim və sertifikasiya proqramları haqqında tez-tez verilən suallar və cavablar. Qeydiyyat, sertifikat, təlim prosesi və s.", "Frequently asked questions and answers about PROTEACH training and certification programs. Registration, certificates, training process, etc.")} />
        <meta name="keywords" content={t("suallar və cavablar, FAQ, təlim sualları, sertifikasiya sualları", "questions and answers, FAQ, training questions, certification questions")} />
      </Helmet>
      <div className="min-h-screen">
        <Header />
      <main className="pt-24">
        <FAQ />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default FAQPage;
