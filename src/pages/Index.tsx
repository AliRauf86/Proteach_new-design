import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Training from "@/components/Training";
import About from "@/components/About";
import Certification from "@/components/Certification";
import Consultation from "@/components/Consultation";
import Solutions from "@/components/Solutions";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t("PROTEACH - Peşəkar Tədris və Sertifikasiya Mərkəzi", "PROTEACH - Professional Training and Certification Center")}</title>
        <meta name="description" content={t("ISO sertifikasiya, peşəkar təlimlər və IT konsultasiya xidmətləri. Beynəlxalq tanınan PECB sertifikatları, kibertəhlükəsizlik və rəqəmsal transformasiya həlləri.", "ISO certification, professional training and IT consulting services. Internationally recognized PECB certificates, cybersecurity and digital transformation solutions.")} />
        <meta name="keywords" content={t("ISO 27001, ISO 20000, ISO 9001, sertifikasiya, peşəkar təlim, kibertəhlükəsizlik, PECB, IT təlimi, Azərbaycan", "ISO 27001, ISO 20000, ISO 9001, certification, professional training, cybersecurity, PECB, IT training, Azerbaijan")} />
      </Helmet>
      <div className="min-h-screen">
        <Header />
      <main>
        <Hero />
        <Statistics />
        <Training />
        <About />
        <Certification />
        <Consultation />
        <Solutions />
        <FAQ />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Index;
