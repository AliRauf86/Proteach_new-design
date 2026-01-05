import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="404 - Səhifə Tapılmadı | PROTEACH"
        description="Axtardığınız səhifə tapılmadı. Zəhmət olmasa ana səhifəyə qayıdın."
        url={`https://proteach.az${location.pathname}`}
        keywords=""
      />
      
      <meta name="robots" content="noindex, follow" />
      
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
    </>
  );
};

export default NotFound;
