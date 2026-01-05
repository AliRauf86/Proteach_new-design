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
        canonical="https://proteach.az/about/partners"
        ogImage="https://proteach.az/logo.png"
        breadcrumb={[
          { name: "Ana Səhifə", url: "https://proteach.az" },
          { name: "Haqqımızda", url: "https://proteach.az/about" },
          { name: "Tərəfdaşlar", url: "https://proteach.az/about/partners" }
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
