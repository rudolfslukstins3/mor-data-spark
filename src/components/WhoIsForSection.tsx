import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { CheckCircle2 } from "lucide-react";

const WhoIsForSection = () => {
  const { lang } = useLang();
  const t = translations.whoIsFor;

  return (
    <section id="who" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">{t.tag[lang]}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">{t.headline[lang]}</h2>
          <p className="text-muted-foreground mt-4 text-lg">{t.intro[lang]}</p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 bg-background p-5 rounded-lg border border-border"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <CheckCircle2 size={22} className="text-accent shrink-0 mt-0.5" />
              <span className="text-foreground font-medium">{item[lang]}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsForSection;
