import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";
import consultant from "@/assets/consultant.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      titleAz: "Biznesinizi İnkişaf Etdirin",
      titleEn: "GROW Your Business",
      subtitleAz: "Şirkətinizi fərqli edin",
      subtitleEn: "We will make your company different",
      descriptionAz: "Müasir texnologiyalar və ən yaxşı təcrübələrlə təchiz olunmuş mütəxəssislər yetişdiririk",
      descriptionEn: "We train specialists equipped with modern technologies and best practices",
      image: consultant,
    },
    {
      titleAz: "Professional Sertifikasiya",
      titleEn: "Professional Certification",
      subtitleAz: "ISO standartları üzrə ekspert olun",
      subtitleEn: "Become an expert in ISO standards",
      descriptionAz: "Beynəlxalq tanınan sertifikatlar əldə edin və karyeranızı inkişaf etdirin",
      descriptionEn: "Obtain internationally recognized certificates and advance your career",
      image: consultant,
    },
    {
      titleAz: "Konsultasiya Xidmətləri",
      titleEn: "Consultation Services",
      subtitleAz: "Biznes proseslərinizi optimallaşdırın",
      subtitleEn: "Optimize your business processes",
      descriptionAz: "Peşəkar məsləhətlərlə şirkətinizi yeni zirvələrə qaldırın",
      descriptionEn: "Elevate your company to new heights with professional advice",
      image: consultant,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen pt-28 lg:pt-32 flex items-start lg:items-center overflow-hidden bg-navy">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-navy/80" />
        {/* Animated flowing lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 animate-pulse" />
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-magenta-light to-transparent opacity-20 animate-pulse delay-75" />
          <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-25 animate-pulse delay-150" />
        </div>
      </div>

      {/* Diagonal accent shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-accent/20 to-magenta-dark/20 transform skew-x-12 translate-x-1/4 z-10" />

      <div className="container mx-auto px-4 z-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-4">
             
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">{t(slides[currentSlide].titleAz, slides[currentSlide].titleEn).split(" ")[0]}</span>
                <br />
                <span className="text-white">{t(slides[currentSlide].titleAz, slides[currentSlide].titleEn).split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-accent font-semibold">
                {t(slides[currentSlide].subtitleAz, slides[currentSlide].subtitleEn)}
              </p>
              <p className="text-lg text-gray-300 max-w-xl">
                {t(slides[currentSlide].descriptionAz, slides[currentSlide].descriptionEn)}
              </p>
            </div>

            {/* Dot pattern decoration */}
            <div className="grid grid-cols-6 gap-2 w-32 opacity-50">
              {[...Array(18)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-accent" />
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 rounded-full hover-glow"
              >
              <Link to="/consultation">
              {t("Ətraflı", "Learn More")}
              </Link>
            </Button>

            {/* Slider controls */}
            <div className="flex items-center gap-4 pt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <ChevronLeft className="text-white" />
              </button>
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <ChevronRight className="text-white" />
              </button>
            </div>
          </div>

          {/* Image with decorative frame */}
          <div className="relative hidden lg:block animate-fade-in float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent via-magenta to-accent opacity-30 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-accent/50">
                <img
                  src={slides[currentSlide].image}
                  alt={t(
    "ProTeach peşəkar təlim və sertifikasiya xidmətləri",
    "ProTeach professional training and certification services"
  )}
                  className="w-full h-[600px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
