import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t("Əlaqə - PROTEACH", "Contact - PROTEACH")}</title>
        <meta name="description" content={t("PROTEACH ilə əlaqə saxlayın. Təlim və sertifikasiya proqramları haqqında məlumat almaq üçün bizimlə əlaqə qurun.", "Contact PROTEACH. Get in touch with us for information about training and certification programs.")} />
        <meta name="keywords" content={t("əlaqə, əlaqə məlumatları, PROTEACH əlaqə, bizimlə əlaqə", "contact, contact information, PROTEACH contact, contact us")} />
      </Helmet>
      <div className="min-h-screen">
        <Header />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default ContactPage;
