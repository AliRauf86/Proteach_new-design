import { Cloud, Code, Cog, TrendingUp } from "lucide-react";
import digitalTransformation from "@/assets/digital-transformation.jpg";

const Solutions = () => {
  const solutions = [
    {
      icon: TrendingUp,
      title: "Layihələrin İdarəolunması",
      description: "Peşəkar layihə idarəetmə və planlaşdırma xidmətləri",
    },
    {
      icon: Cloud,
      title: "ERP Həlləri",
      description: "Müəssisə resurs planlaşdırması sistemlərinin tətbiqi",
    },
    {
      icon: Code,
      title: "Proqram Təminatı",
      description: "Veb və desktop proqram təminatlarının hazırlanması",
    },
    {
      icon: Cog,
      title: "Proses Optimallaşdırması",
      description: "Biznes proseslərinin avtomatlaşdırılması və təkmilləşdirilməsi",
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-magenta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Rəqəmsal <span className="gradient-text">Transformasiya Həlləri</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rəqəmsal transformasiya həlləri ilə biznesinizə dəyər qatırıq
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-magenta/20 rounded-3xl blur-2xl" />
              <img
                src={digitalTransformation}
                alt="Digital Transformation"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover border-4 border-accent/30"
              />
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="glass-dark p-6 rounded-2xl hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <solution.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">{solution.title}</h3>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="glass-dark rounded-2xl p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rəqəmsal transformasiya yolunda sizin etibarlı tərəfdaşınızıq. Müasir texnologiyalardan
              istifadə edərək biznes proseslərinizi optimallaşdırır, səmərəliliyinizi artırır və
              rəqabət üstünlüyünüzü möhkəmləndiririik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
