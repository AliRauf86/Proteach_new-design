import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeliveryMethods from "@/components/DeliveryMethods";
import { useLanguage } from "@/contexts/LanguageContext";

const DeliveryMethodsPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t("Çatdırılma Metodları | PROTEACH", "Delivery Methods | PROTEACH")}</title>
        <meta name="description" content={t(
          "Təlim kurslarının çatdırılma metodları - əyani, virtual sinif, e-öyrənmə və özünütədris.",
          "Training course delivery methods - classroom, virtual classroom, e-learning and self-study."
        )} />
      </Helmet>
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
