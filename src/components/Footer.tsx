import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="PROTEACH" className="h-12 mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              {t(
                "Müasir texnologiyalar və ən yaxşı təcrübələrlə təchiz olunmuş mütəxəssislər yetişdiririk.",
                "We train professionals equipped with modern technologies and best practices."
              )}
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/Proteach.az/"
                target="_blank"
    rel="noopener noreferrer"
    aria-label="ProTeach Facebook"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/proteach.az/"
                target="_blank"
    rel="noopener noreferrer"
    aria-label="ProTeach Instagram"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/proteach-az/"
                target="_blank"
    rel="noopener noreferrer"
    aria-label="ProTeach LinkedIn"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Sürətli Keçidlər</h3>
            <ul className="space-y-3">
  <li>
    <Link to="/" className="text-gray-300 hover:text-accent transition-colors text-sm">
      Ana Səhifə
    </Link>
  </li>
  <li>
    <Link to="/solutions" className="text-gray-300 hover:text-accent transition-colors text-sm">
      Həllər
    </Link>
  </li>
  <li>
    <Link to="/certification" className="text-gray-300 hover:text-accent transition-colors text-sm">
      Sertifikasiya
    </Link>
  </li>
  <li>
    <Link to="/about" className="text-gray-300 hover:text-accent transition-colors text-sm">
      Haqqımızda
    </Link>
  </li>
  <li>
    <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors text-sm">
      Əlaqə
    </Link>
  </li>
</ul>
          </div>

          {/* Training & Certification */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Təlim Çərçivəsi</h3>
            <ul className="space-y-3">
  <li>
    <Link to="/training/portfolio" className="text-gray-300 hover:text-accent text-sm">
      Təlim Portfeli
    </Link>
  </li>
  <li>
    <Link to="/training/levels" className="text-gray-300 hover:text-accent text-sm">
      Kurs Səviyyələri
    </Link>
  </li>
  <li>
    <Link to="/training/process" className="text-gray-300 hover:text-accent text-sm">
      Sertifikatlaşdırma Prosesi
    </Link>
  </li>
  <li>
    <Link to="/training/criteria" className="text-gray-300 hover:text-accent text-sm">
      Sertifikatlaşdırma Meyarları
    </Link>
  </li>
  <li>
    <Link to="/training/delivery" className="text-gray-300 hover:text-accent text-sm">
      Çatdırılma Metodları
    </Link>
  </li>
</ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Əlaqə</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Telefon</p>
                  <a href="tel:+994552877884" className="text-sm text-gray-300 hover:text-accent">
                    +994 55 287 78 84
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:info@proteach.az"
                    className="text-sm text-gray-300 hover:text-accent"
                  >
                    info@proteach.az
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} PROTEACH. Bütün hüquqlar qorunur.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-accent transition-colors">
                Məxfilik Siyasəti
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-accent transition-colors">
                İstifadə Şərtləri
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
