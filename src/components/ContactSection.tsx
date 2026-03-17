import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Send, Mail, Phone, Linkedin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const { lang } = useLang();
  const t = translations.contact;
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Send via mailto (opens email client as fallback)
    const subject = encodeURIComponent(`Contact from ${form.name} - ${form.company || "N/A"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "N/A"}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:info@mor-data.com?subject=${subject}&body=${body}`, "_self");

    toast.success(t.success[lang]);
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

        <div className="max-w-3xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-soft rounded-md flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.info.emailLabel[lang]}</p>
                <a href="mailto:info@mor-data.com" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  info@mor-data.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-soft rounded-md flex items-center justify-center">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.info.phoneLabel[lang]}</p>
                <a href="tel:+37122320007" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  +371 22320007
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-soft rounded-md flex items-center justify-center">
                <Linkedin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/company/mordata-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  MorData Solutions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4 bg-background p-8 rounded-lg border border-border"
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
      </div>
    </section>
  );
};

export default ContactSection;
