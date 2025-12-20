import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const PartnersPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t("Tərəfdaşlar - PROTEACH", "Partners - PROTEACH")}</title>
        <meta name="description" content={t("PROTEACH-ın beynəlxalq tərəfdaşları - PECB və digər qlobal sertifikasiya orqanları ilə əməkdaşlıq.", "PROTEACH's international partners - Collaboration with PECB and other global certification bodies.")} />
        <meta name="keywords" content={t("PECB tərəfdaş, sertifikasiya tərəfdaşları, ISO tərəfdaşlıq Azərbaycan", "PECB partner, certification partners, ISO partnership Azerbaijan")} />
      </Helmet>
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
