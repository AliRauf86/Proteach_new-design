import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Languages, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTrainingDropdownOpen, setIsTrainingDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileTrainingOpen, setIsMobileTrainingOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const trainingDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (trainingDropdownRef.current && !trainingDropdownRef.current.contains(event.target as Node)) {
        setIsTrainingDropdownOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const trainingSubItems = [
    { labelAz: "Təlim Portfeli", labelEn: "Training Portfolio", href: "/training/portfolio" },
    { labelAz: "Kurs Səviyyələri", labelEn: "Course Levels", href: "/training/levels" },
    { labelAz: "Sertifikatlaşdırma Prosesi", labelEn: "Certification Process", href: "/training/process" },
    { labelAz: "Sertifikatlaşdırma Meyarları", labelEn: "Certification Criteria", href: "/training/criteria" },
    { labelAz: "Çatdırılma Metodları", labelEn: "Delivery Methods", href: "/training/delivery" },
  ];

  const aboutSubItems = [
    { labelAz: "Haqqımızda", labelEn: "About Us", href: "/about" },
    { labelAz: "Tərəfdaşlar", labelEn: "Partners", href: "/about/partners" },
  ];

  const menuItems = [
    { labelAz: "Ana Səhifə", labelEn: "Home", href: "/" },
    { labelAz: "Sertifikasiya", labelEn: "Certification", href: "/certification" },
    { labelAz: "Konsultasiya", labelEn: "Consultation", href: "/consultation" },
    { labelAz: "Həllər", labelEn: "Solutions", href: "/solutions" },
    { labelAz: "Əlaqə", labelEn: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-navy py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="PROTEACH" className="h-10" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`}
            >
              {t("Ana Səhifə", "Home")}
            </Link>

            {/* Training Dropdown */}
            <div className="relative" ref={trainingDropdownRef}>
              <button
                onClick={() => setIsTrainingDropdownOpen(!isTrainingDropdownOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`}
              >
                {t("Təlimlər", "Training")}
                <ChevronDown className={`w-4 h-4 transition-transform ${isTrainingDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isTrainingDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/training"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                    onClick={() => setIsTrainingDropdownOpen(false)}
                  >
                    {t("Bütün Təlimlər", "All Training")}
                  </Link>
                  <div className="border-t border-border my-1" />
                  {trainingSubItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                      onClick={() => setIsTrainingDropdownOpen(false)}
                    >
                      {t(item.labelAz, item.labelEn)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative" ref={aboutDropdownRef}>
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`}
              >
                {t("Haqqımızda", "About")}
                <ChevronDown className={`w-4 h-4 transition-transform ${isAboutDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  {aboutSubItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                      onClick={() => setIsAboutDropdownOpen(false)}
                    >
                      {t(item.labelAz, item.labelEn)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {menuItems.slice(1).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`}
              >
                {t(item.labelAz, item.labelEn)}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "az" ? "en" : "az")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isScrolled ? "bg-muted hover:bg-accent/10" : "bg-white/10 hover:bg-white/20 text-white"}`}
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">{language === "az" ? "EN" : "AZ"}</span>
            </button>
            <Button variant="default" className="bg-accent hover:bg-accent/90"
              onClick={() => {
              window.location.href = "/contact"; 
  }}>
              {t("Qeydiyyat", "Register")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-1 animate-fade-in text-white">
            <Link
              to="/"
              className="block text-sm font-medium text-white hover:text-accent transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("Ana Səhifə", "Home")}
            </Link>

            {/* Mobile Training Submenu */}
            <div>
              <button
                onClick={() => setIsMobileTrainingOpen(!isMobileTrainingOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-white hover:text-accent transition-colors py-2"
              >
                {t("Təlimlər", "Training")}
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileTrainingOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isMobileTrainingOpen && (
                <div className="pl-4 space-y-1 border-l-2 border-accent/30 ml-2">
                  <Link
                    to="/training"
                    className="block text-sm text-muted-foreground hover:text-accent transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("Bütün Təlimlər", "All Training")}
                  </Link>
                  {trainingSubItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm text-muted-foreground hover:text-accent transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(item.labelAz, item.labelEn)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile About Submenu */}
            <div>
              <button
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-white hover:text-accent transition-colors py-2"
              >
                {t("Haqqımızda", "About")}
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isMobileAboutOpen && (
                <div className="pl-4 space-y-1 border-l-2 border-accent/30 ml-2">
                  {aboutSubItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm text-muted-foreground hover:text-accent transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(item.labelAz, item.labelEn)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {menuItems.slice(1).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block text-sm font-medium text-white hover:text-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item.labelAz, item.labelEn)}
              </Link>
            ))}
            
            <button
              onClick={() => setLanguage(language === "az" ? "en" : "az")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg glass hover:bg-accent/10 transition-colors w-full"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">{language === "az" ? "EN" : "AZ"}</span>
            </button>
            <Button variant="default" className="w-full bg-accent hover:bg-accent/90 mt-4"
              onClick={() => {
              window.location.href = "/contact"; 
  }}
              >
              {t("Qeydiyyat", "Register")}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
