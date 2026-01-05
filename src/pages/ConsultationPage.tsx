import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ConsultationPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEO
    title={t("IT Konsultasiya - ProTeach", "IT Consultation - ProTeach")}
    description={t(
      "Peşəkar IT konsultasiya xidmətləri: məlumat təhlükəsizliyi, risk idarəetməsi, texnoloji strategiya və audit.",
      "Professional IT consulting services: information security, risk management, technology strategy and audit."
    )}
    canonical="https://proteach.az/consultation"
  />
      
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
