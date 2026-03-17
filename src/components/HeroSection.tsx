import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { ArrowRight, BarChart3, Workflow, Database, TrendingUp } from "lucide-react";

const brandTransition = { type: "spring" as const, duration: 0.5, bounce: 0 };

const HeroSection = () => {
  const { lang } = useLang();
  const t = translations.hero;

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left 3/5 */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...brandTransition, duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground mb-6">
              {t.headline[lang]}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {t.sub[lang]}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                {t.cta1[lang]}
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-md font-semibold text-sm hover:bg-secondary transition-colors"
              >
                {t.cta2[lang]}
              </button>
            </div>
          </motion.div>

          {/* Right 2/5 - Abstract visualization */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...brandTransition, duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-secondary rounded-lg p-8 border border-border" style={{ boxShadow: "var(--shadow-lg)" }}>
              {/* Abstract data viz */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[65, 85, 45, 90, 70, 55].map((h, i) => (
                  <motion.div
                    key={i}
                    className="bg-primary/10 rounded-sm overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}px` }}
                    transition={{ ...brandTransition, delay: 0.5 + i * 0.1 }}
                  >
                    <div className="w-full bg-accent/60 rounded-sm" style={{ height: `${h * 0.7}px`, marginTop: `${h * 0.3}px` }} />
                  </motion.div>
                ))}
              </div>
              {/* Floating icons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-soft rounded-md flex items-center justify-center">
                    <BarChart3 size={20} className="text-primary" />
                  </div>
                  <div className="w-10 h-10 bg-emerald-soft rounded-md flex items-center justify-center">
                    <Workflow size={20} className="text-primary" />
                  </div>
                  <div className="w-10 h-10 bg-emerald-soft rounded-md flex items-center justify-center">
                    <Database size={20} className="text-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-1 text-accent font-mono text-sm font-bold">
                  <TrendingUp size={16} />
                  +42%
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
