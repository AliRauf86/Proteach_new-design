import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const AboutPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEO
        title={t("Haqqımızda - ProTeach", "About Us - ProTeach")}
        description={t(
          "ProTeach - Sertifikasiya və peşəkar təlim sahəsində aparıcı mərkəz. Beynəlxalq standartlar və keyfiyyətli xidmətlər.",
          "ProTeach - Leading center for certification and professional training. International standards and quality services."
        )}
        keywords={t(
          "ProTeach haqqında, təlim mərkəzi, sertifikasiya mərkəzi, peşəkar təlim Azərbaycan",
          "About ProTeach, training center, certification center, professional training Azerbaijan"
        )}
        url="https://proteach.az/about"
        breadcrumb={[
          { position: 1, name: "Ana Səhifə", item: "https://proteach.az/" },
          { position: 2, name: "Haqqımızda", item: "https://proteach.az/about" },
        ]}
      />
      
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
