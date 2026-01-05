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
        title={t("IT Konsultasiya | ProTeach", "IT Consultation | ProTeach")}
        description={t(
          "Peşəkar IT konsultasiya xidmətləri: məlumat təhlükəsizliyi, risk idarəetməsi, texnoloji strategiya və audit. Biznesinizi rəqəmsal çevrilməyə hazırlayın.",
          "Professional IT consulting services: information security, risk management, technology strategy and audit. Prepare your business for digital transformation."
        )}
        keywords={t(
          "IT konsultasiya, məlumat təhlükəsizliyi, risk idarəetməsi, texnoloji audit, IT strategiya",
          "IT consulting, information security, risk management, technology audit, IT strategy"
        )}
        canonical="https://proteach.az/consultation"
        breadcrumb={[ 
    { 
      position: 1, 
      name: t("Ana Səhifə", "Home"), 
      item: "https://proteach.az" 
    },
    { 
      position: 2, 
      name: t("Konsultasiya", "Consultation"), 
      item: "https://proteach.az/consultation" 
    },
        ]}
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
