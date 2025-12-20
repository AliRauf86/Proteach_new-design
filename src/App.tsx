import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import TrainingPage from "./pages/TrainingPage";
import TrainingPortfolioPage from "./pages/TrainingPortfolioPage";
import CourseLevelsPage from "./pages/CourseLevelsPage";
import CertificationProcessPage from "./pages/CertificationProcessPage";
import CertificationCriteriaPage from "./pages/CertificationCriteriaPage";
import DeliveryMethodsPage from "./pages/DeliveryMethodsPage";
import AboutPage from "./pages/AboutPage";
import PartnersPage from "./pages/PartnersPage";
import CertificationPage from "./pages/CertificationPage";
import ConsultationPage from "./pages/ConsultationPage";
import SolutionsPage from "./pages/SolutionsPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/training/portfolio" element={<TrainingPortfolioPage />} />
            <Route path="/training/levels" element={<CourseLevelsPage />} />
            <Route path="/training/process" element={<CertificationProcessPage />} />
            <Route path="/training/criteria" element={<CertificationCriteriaPage />} />
            <Route path="/training/delivery" element={<DeliveryMethodsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/partners" element={<PartnersPage />} />
            <Route path="/certification" element={<CertificationPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
