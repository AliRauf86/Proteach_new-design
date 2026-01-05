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
import SEO from "@/components/SEO";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEO
        title={t(
          "PROTEACH - Peşəkar Tədris və Sertifikasiya Mərkəzi",
          "PROTEACH - Professional Training and Certification Center"
        )}
        description={t(
          "ISO sertifikasiya, peşəkar təlimlər və IT konsultasiya xidmətləri. Beynəlxalq tanınan PECB sertifikatları, kibertəhlükəsizlik və rəqəmsal transformasiya həlləri.",
          "ISO certification, professional training and IT consulting services. Internationally recognized PECB certificates, cybersecurity and digital transformation solutions."
        )}
        keywords={t(
          "ISO 27001, ISO 20000, ISO 9001, sertifikasiya, peşəkar təlim, kibertəhlükəsizlik, PECB, IT təlimi, Azərbaycan",
          "ISO 27001, ISO 20000, ISO 9001, certification, professional training, cybersecurity, PECB, IT training, Azerbaijan"
        )}
        url="https://proteach.az/"
        breadcrumb={[
          {
            position: 1,
            name: "Ana Səhifə",
            item: "https://proteach.az/",
          },
        ]}
      />
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
