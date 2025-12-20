import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

const ConsultationPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t("IT Konsultasiya - PROTEACH", "IT Consultation - PROTEACH")}</title>
        <meta name="description" content={t("Peşəkar IT konsultasiya xidmətləri: məlumat təhlükəsizliyi, risk idarəetməsi, texnoloji strategiya və audit. Biznesinizi rəqəmsal çevrilməyə hazırlayın.", "Professional IT consulting services: information security, risk management, technology strategy and audit. Prepare your business for digital transformation.")} />
        <meta name="keywords" content={t("IT konsultasiya, məlumat təhlükəsizliyi, risk idarəetməsi, texnoloji audit, IT strategiya", "IT consulting, information security, risk management, technology audit, IT strategy")} />
      </Helmet>
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <Consultation />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ConsultationPage;
