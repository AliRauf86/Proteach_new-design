import { Lightbulb, Target, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Consultation = () => {
  const services = [
    {
      icon: Target,
      title: "Strateji Planlama",
      description: "Müvafiq yanaşmalar əsasında idarəetmə modelinin və strateji yol xəritəsinin formalaşdırılması",
    },
    {
      icon: Zap,
      title: "Proses Optimallaşdırması",
      description: "ITIL və ISO tələblərinə uyğun proseslərin təhlili, boşluqların müəyyən edilməsi və təkmilləşdirilməsi üsulları",
    },
    {
      icon: Lightbulb,
      title: "Standartlara Uyğunluq",
      description: "ISO/IEC standartlarının təşkilati mühitə inteqrasiyası və davamlı uyğunluğun təmin edilməsi",
    },
    {
      icon: Users,
      title: "Dəyişikliklərin İdarəedilməsi",
      description: "Komanda səriştələrinin inkişafı, rol bölgüsü və dəyişikliklərin effektiv idarə olunması",
    },
  ];

  const process = [
    { step: "01", title: "Analiz", desc: "Cari vəziyyətin qiymətləndirilməsi" },
    { step: "02", title: "Planlaşdırma", desc: "Strateji yol xəritəsinin hazırlanması" },
    { step: "03", title: "Həyata keçirmə", desc: "Planın addım-addım tətbiqi" },
    { step: "04", title: "Nəzarət", desc: "Nəticələrin monitorinqi və optimallaşdırma" },
  ];

  return (
    <section id="consultation" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-magenta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Konsultasiya <span className="gradient-text">Xidmətləri</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ən yaxşı təcrübəyə və standartlara əsaslanan konsaltinq yanaşması ilə davamlı inkişafı təmin edin
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-dark p-6 rounded-2xl hover-lift group text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-navy">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Consultation Process */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Konsultasiya <span className="gradient-text">Prosesi</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="glass-dark p-6 rounded-2xl hover-lift text-center">
                  <div className="text-6xl font-bold gradient-text mb-4">{item.step}</div>
                  <h4 className="text-xl font-bold mb-2 text-navy">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-dark rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-navy">
              Biznesinizi Növbəti Səviyyəyə Daşıyın
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Peşəkar konsultantlarımızla görüşərək şirkətinizin ehtiyaclarını müzakirə edin və fərdi
              həll yolları əldə edin
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
              <Link to="/contact">
                Konsultasiya AL
              </Link>  
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
