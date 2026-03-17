import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  const { lang } = useLang();
  const t = translations.cta;

  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">{t.headline[lang]}</h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">{t.text[lang]}</p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            {t.button[lang]}
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
