import { useEffect, useState } from "react";
import { Award, BookOpen, Briefcase, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("statistics");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: 15,
      suffix: "+",
      labelAz: "İllik Təcrübə",
      labelEn: "Years Experience",
    },
    {
      icon: Award,
      value: 50,
      suffix: "+",
      labelAz: "Sertifikat",
      labelEn: "Certificates",
    },
    {
      icon: Briefcase,
      value: 20,
      suffix: "+",
      labelAz: "Uğurlu Layihə",
      labelEn: "Successful Projects",
    },
    {
      icon: BookOpen,
      value: 98,
      suffix: "%",
      labelAz: "Müvəffəqiyyət Nisbəti",
      labelEn: "Success Rate",
    },
  ];

  const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section id="statistics" className="py-20 bg-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magenta rounded-full blur-3xl animate-pulse delay-75" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl text-center hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {isVisible && <CountUp end={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="text-gray-300 font-medium">{t(stat.labelAz, stat.labelEn)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
