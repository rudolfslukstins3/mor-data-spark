import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const { lang } = useLang();
  const t = translations.about;

  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">{t.tag[lang]}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">{t.headline[lang]}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <motion.div
            className="bg-background p-8 rounded-lg border border-border"
            style={{ boxShadow: "var(--shadow-sm)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-blue-soft rounded-md flex items-center justify-center mb-6">
              <Target size={24} className="text-primary" />
            </div>
            <p className="text-muted-foreground leading-relaxed">{t.p1[lang]}</p>
          </motion.div>
          <motion.div
            className="bg-background p-8 rounded-lg border border-border"
            style={{ boxShadow: "var(--shadow-sm)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-blue-soft rounded-md flex items-center justify-center mb-6">
              <Lightbulb size={24} className="text-primary" />
            </div>
            <p className="text-muted-foreground leading-relaxed">{t.p2[lang]}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
