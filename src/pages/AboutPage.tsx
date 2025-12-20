import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t("Haqqımızda - PROTEACH", "About Us - PROTEACH")}</title>
        <meta name="description" content={t("PROTEACH - Azərbaycanda ISO sertifikasiyası və peşəkar təlim sahəsində aparıcı mərkəz. Beynəlxalq standartlar və keyfiyyətli xidmətlər.", "PROTEACH - Leading center for ISO certification and professional training in Azerbaijan. International standards and quality services.")} />
        <meta name="keywords" content={t("PROTEACH haqqında, təlim mərkəzi, sertifikasiya mərkəzi, peşəkar təlim Azərbaycan", "About PROTEACH, training center, certification center, professional training Azerbaijan")} />
      </Helmet>
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <About />
        </main>
      <Footer />
    </div>
    </>
  );
};

export default AboutPage;
