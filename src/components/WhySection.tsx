import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Clock, ShieldCheck, Eye, Zap, TrendingUp, Wrench } from "lucide-react";

const icons = [Clock, ShieldCheck, Eye, Zap, TrendingUp, Wrench];

const WhySection = () => {
  const { lang } = useLang();
  const t = translations.why;

  return (
    <section id="why" className="py-20 lg:py-28 bg-secondary">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                className="flex gap-4"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-11 h-11 shrink-0 bg-blue-soft rounded-md flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc[lang]}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
