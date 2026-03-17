import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import logo from "@/assets/mordata-logo.png";
import { Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  const { lang } = useLang();
  const t = translations.footer;
  const [count, setCount] = useState(138);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + (Math.random() > 0.5 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="MorData" className="h-8 w-auto brightness-0 invert" />
              <span className="text-xl font-bold">MorData</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">{t.desc[lang]}</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-2">{t.efficiency[lang]}</p>
              <span className="font-mono text-3xl font-bold text-accent">{count}</span>
              <span className="text-sm text-primary-foreground/60 ml-2">{t.hours[lang]}</span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-3">
              <a href="mailto:info@mordata.lv" className="w-10 h-10 rounded-md bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Mail size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-md bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} MorData. {t.rights[lang]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
