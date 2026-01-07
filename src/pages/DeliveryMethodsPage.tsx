import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeliveryMethods from "@/components/DeliveryMethods";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const DeliveryMethodsPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t(
          "Çatdırılma Metodları | ProTeach",
          "Delivery Methods | ProTeach"
        )}
        description={t(
          "Təlim kurslarının çatdırılma metodları - əyani, virtual sinif, e-öyrənmə və özünütədris.",
          "Training course delivery methods - classroom, virtual classroom, e-learning and self-study."
        )}
        keywords={t(
          "çatdırılma metodları, təlim kursları, əyani, virtual, e-öyrənmə, self-study",
          "delivery methods, training courses, classroom, virtual, e-learning, self-study"
        )}
        url="https://proteach.az/training/delivery" 
  breadcrumb={[ 
    { 
      position: 1, 
      name: t("Ana Səhifə", "Home"), 
      item: "https://proteach.az/" 
    },
    { 
      position: 2, 
      name: t("Təlimlər", "Training"), 
      item: "https://proteach.az/training" 
    },
    { 
      position: 3, 
      name: t("Çatdırılma Metodları", "Delivery Methods"), 
      item: "https://proteach.az/training/delivery" 
    },
        ]}
      />
      
      <div className="min-h-screen bg-navy">
        <Header />
        <main className="pt-24">
          <DeliveryMethods />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DeliveryMethodsPage;
