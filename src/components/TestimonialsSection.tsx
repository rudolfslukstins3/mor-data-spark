import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const { lang } = useLang();
  const t = translations.testimonials;

  return (
    <section className="py-20 lg:py-28">
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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-secondary p-8 rounded-lg border border-border relative"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Quote size={24} className="text-primary/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{item.text[lang]}</p>
              <div>
                <p className="font-bold text-foreground text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role[lang]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
