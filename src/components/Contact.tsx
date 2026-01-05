import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    await emailjs.send(
      'service_37i23cj',
      'template_hzpcws3',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      '4IPEtW6qlCBW7klXl'
    );
    
    toast.success(t(
      "Mesajınız göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.",
      "Your message has been sent! We will contact you shortly."
    ));
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, subject: value });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t("Bizimlə", "Get in touch with")} <span className="gradient-text">{t("Əlaqə", "Us")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Təlimlərə qeydiyyat və ya suallarınız üçün bizə müraciət edin",
              "Contact us for training registration or any inquiries"
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="glass-dark rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-navy mb-6">{t("Əlaqə Məlumatları", "Contact Information")}</h3>

              <div className="flex items-start gap-4 hover-lift p-4 rounded-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-navy mb-1">{t("Telefon", "Phone")}</p>
                  <a href="tel:+994552877884" className="text-muted-foreground hover:text-accent">
                    +994 55 287 78 84
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 hover-lift p-4 rounded-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-magenta/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-magenta" />
                </div>
                <div>
                  <p className="font-semibold text-navy mb-1">{t("Email", "Email")</p>
                  <a
                    href="mailto:info@proteach.az"
                    className="text-muted-foreground hover:text-accent"
                  >
                    info@proteach.az
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 hover-lift p-4 rounded-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-navy mb-1">{t("Ünvan", "Address")}</p>
                  <p className="text-muted-foreground">{t("Bakı, Azərbaycan", "Baku, Azerbaijan")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="glass-dark rounded-2xl p-8 space-y-6">
              
      <h3 className="text-2xl font-bold text-navy mb-6">{t("Mesaj Göndərin", "Send a Message")}</h3>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                  {t("Ad Soyad", "Full Name")}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("Adınızı daxil edin", "Enter your name")}
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                  {t("Email", "Email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="emailiniz@example.com"
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                  {t("Telefon", "Phone")}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+994 XX XXX XX XX"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
                  {t("Mövzu", "Subject")}
                </label>
                <Select value={formData.subject} onValueChange={handleSelectChange}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder={t("Mövzu seçin", "Select subject")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Consultation">{t("Konsultasiya", "Consultation")}</SelectItem>
                    <SelectItem value="Corporate training">{t("Korporativ təlim", "Corporate training")}</SelectItem>
                    <SelectItem value="Online training">{t("Onlayn təlim", "Online training")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  {t("Mesaj", "Message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("Mesajınızı yazın...", "Write your message...")}
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                {t("Göndər", "Send")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
