import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { BarChart3, Cog, LayoutDashboard, GitBranch, Headphones } from "lucide-react";

const icons = [BarChart3, Cog, LayoutDashboard, GitBranch, Headphones];

const ServicesSection = () => {
  const { lang } = useLang();
  const t = translations.services;

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">{t.tag[lang]}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">{t.headline[lang]}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                className="p-8 border border-border bg-background rounded-lg cursor-default"
                style={{ boxShadow: "var(--shadow-sm)" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: "var(--shadow-md)" }}
              >
                <div className="w-12 h-12 bg-blue-soft rounded-md flex items-center justify-center mb-6">
                  <Icon size={24} className="text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title[lang]}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc[lang]}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
