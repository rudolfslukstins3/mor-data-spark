import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const { lang } = useLang();
  const t = translations.contact;
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success(lang === "lv" ? "Ziņojums nosūtīts!" : "Message sent!");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  const inputClass = "w-full bg-secondary border-transparent focus:bg-background focus:border-primary/40 border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200";

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary">
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
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4 bg-background p-8 rounded-lg border border-border"
          style={{ boxShadow: "var(--shadow-md)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder={t.name[lang]}
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
          <input
            type="email"
            placeholder={t.email[lang]}
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
          <input
            type="text"
            placeholder={t.company[lang]}
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className={inputClass}
          />
          <textarea
            placeholder={t.message[lang]}
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={inputClass + " resize-none"}
          />
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {t.send[lang]}
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
