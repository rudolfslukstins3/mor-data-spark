import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import logo from "@/assets/mordata-logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { lang, setLang } = useLang();
  const t = translations.nav;
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.home[lang], href: "#" },
    { label: t.services[lang], href: "#services" },
    { label: t.howWeWork[lang], href: "#how" },
    { label: t.whoIsFor[lang], href: "#who" },
    { label: t.contact[lang], href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="MorData" className="h-8 w-auto" />
          <span className="text-xl font-bold text-foreground">MorData</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
          <div className="flex items-center border border-border rounded-md overflow-hidden text-sm font-medium">
            <button
              onClick={() => setLang("lv")}
              className={`px-3 py-1.5 transition-colors ${lang === "lv" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              LV
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2"
            >
              {l.label}
            </button>
          ))}
          <div className="flex items-center gap-2 pt-2">
            <button onClick={() => { setLang("lv"); setOpen(false); }} className={`px-3 py-1.5 rounded-md text-sm font-medium ${lang === "lv" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>LV</button>
            <button onClick={() => { setLang("en"); setOpen(false); }} className={`px-3 py-1.5 rounded-md text-sm font-medium ${lang === "en" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>EN</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
