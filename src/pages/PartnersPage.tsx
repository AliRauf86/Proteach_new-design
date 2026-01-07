import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PartnersPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
     <SEO
        title={t("Tərəfdaşlar | ProTeach", "Partners | ProTeach")}
        description={t(
          "ProTeach-ın beynəlxalq tərəfdaşları - PECB və digər qlobal sertifikasiya orqanları ilə əməkdaşlıq.",
          "ProTeach's international partners - Collaboration with PECB and other global certification bodies."
        )}
        keywords={t(
          "PECB tərəfdaş, sertifikasiya tərəfdaşları, ISO tərəfdaşlıq Azərbaycan",
          "PECB partner, certification partners, ISO partnership Azerbaijan"
        )}
        url="https://proteach.az/about/partners"
  breadcrumb={[
    { 
      position: 1, 
      name: t("Ana Səhifə", "Home"), 
      item: "https://proteach.az/" 
    },
    { 
      position: 2, 
      name: t("Haqqımızda", "About Us"), 
      item: "https://proteach.az/about" 
    },
    { 
      position: 3, 
      name: t("Tərəfdaşlar", "Partners"), 
      item: "https://proteach.az/about/partners" 
    },
        ]}
      />
      
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <Partners />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PartnersPage;
