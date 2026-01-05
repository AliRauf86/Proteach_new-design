import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ContactPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEO
        title={t("Əlaqə - PROTEACH", "Contact - PROTEACH")}
        description={t(
          "PROTEACH ilə əlaqə saxlayın. Təlim və sertifikasiya proqramları haqqında məlumat almaq üçün bizimlə əlaqə qurun.",
          "Contact PROTEACH. Get in touch with us for information about training and certification programs."
        )}
        keywords={t(
          "əlaqə, əlaqə məlumatları, PROTEACH əlaqə, bizimlə əlaqə",
          "contact, contact information, PROTEACH contact, contact us"
        )}
        canonical="https://proteach.az/contact"
        breadcrumbs={[
          { name: "Ana Səhifə", url: "https://proteach.az/" },
          { name: "Əlaqə", url: "https://proteach.az/contact" }
        ]}
      />
      
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
