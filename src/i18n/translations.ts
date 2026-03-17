export type Lang = "lv" | "en";

export const translations = {
  nav: {
    about: { lv: "Par mums", en: "About" },
    services: { lv: "Pakalpojumi", en: "Services" },
    why: { lv: "Kāpēc mēs", en: "Why Us" },
    howWeWork: { lv: "Kā strādājam", en: "How We Work" },
    contact: { lv: "Kontakti", en: "Contact" },
  },
  hero: {
    headline: {
      lv: "Gudrāks bizness caur datiem un automatizāciju",
      en: "Smarter Business Through Data and Automation",
    },
    sub: {
      lv: "Palīdzam uzņēmumiem automatizēt procesus, strukturēt datus un veidot pārskatāmus paneļus, lai pieņemtu ātrākus un labākus lēmumus.",
      en: "We help companies automate processes, structure their data, and build clear dashboards so they can make faster and better decisions.",
    },
    cta1: { lv: "Pieteikt konsultāciju", en: "Book a Consultation" },
    cta2: { lv: "Uzzināt vairāk", en: "Learn More" },
  },
  about: {
    tag: { lv: "Par MorData", en: "About MorData" },
    headline: {
      lv: "Pārvēršam haotiskus datus un manuālos procesus strukturētās, automatizētās sistēmās",
      en: "We transform scattered data and manual workflows into structured, automated systems",
    },
    p1: {
      lv: "MorData palīdz uzņēmumiem pārvērst izkliedētus datus un manuālas darbplūsmas strukturētās, automatizētās sistēmās, kas uzlabo efektivitāti un lēmumu pieņemšanu.",
      en: "MorData helps companies transform scattered data and manual workflows into structured, automated systems that improve efficiency and decision-making.",
    },
    p2: {
      lv: "Mēs strādājam ar uzņēmumiem, lai analizētu esošos procesus, identificētu automatizācijas iespējas un ieviestu praktiskus risinājumus.",
      en: "We work with companies to analyze current processes, identify automation opportunities, and implement practical solutions.",
    },
  },
  services: {
    tag: { lv: "Pakalpojumi", en: "Services" },
    headline: {
      lv: "Kā mēs palīdzam jūsu biznesam",
      en: "How We Help Your Business",
    },
    items: [
      {
        title: { lv: "Biznesa un datu analīze", en: "Business & Data Analysis" },
        desc: {
          lv: "Uzņēmuma datu izpratne, neefektivitāšu identificēšana un automatizācijas iespēju atklāšana.",
          en: "Understanding company data, identifying inefficiencies, and discovering opportunities for automation and improvement.",
        },
      },
      {
        title: { lv: "Procesu automatizācija", en: "Process Automation" },
        desc: {
          lv: "Atkārtotu uzdevumu automatizēšana — dokumentu apstrāde, datu apkopošana, atskaišu veidošana un iekšējās darbplūsmas.",
          en: "Automating repetitive tasks such as document handling, data processing, reporting, and internal workflows.",
        },
      },
      {
        title: { lv: "Paneļi un atskaites", en: "Dashboards & Reporting" },
        desc: {
          lv: "Paneļu un atskaišu izveide, kas palīdz uzņēmumiem sekot līdzi veiktspējai un pieņemt uz datiem balstītus lēmumus.",
          en: "Creating dashboards and reports that help companies track performance, monitor operations, and make data-driven decisions.",
        },
      },
      {
        title: { lv: "Biznesa procesu optimizācija", en: "Business Process Optimization" },
        desc: {
          lv: "Darbplūsmu uzlabošana un manuālā darba samazināšana, pārveidojot neefektīvus procesus.",
          en: "Improving workflows and reducing manual work by redesigning inefficient processes.",
        },
      },
      {
        title: { lv: "Konsultācijas un ieviešana", en: "Consulting & Implementation" },
        desc: {
          lv: "Palīdzam uzņēmumiem plānot, ieviest un uzturēt automatizācijas un datu sistēmas.",
          en: "Helping companies plan, implement, and maintain automation and data systems.",
        },
      },
    ],
  },
  why: {
    tag: { lv: "Kāpēc MorData", en: "Why MorData" },
    headline: {
      lv: "Praktiski rezultāti jūsu biznesam",
      en: "Practical Results for Your Business",
    },
    items: [
      { title: { lv: "Mazāk manuālā darba", en: "Reduce Manual Work" }, desc: { lv: "Automatizējiet atkārtotus uzdevumus un atbrīvojiet laiku stratēģiskam darbam.", en: "Automate repetitive tasks and free up time for strategic work." } },
      { title: { lv: "Mazāk kļūdu", en: "Fewer Human Errors" }, desc: { lv: "Automatizēti procesi samazina cilvēcisko kļūdu skaitu.", en: "Automated processes significantly reduce the chance of errors." } },
      { title: { lv: "Labāka datu pārredzamība", en: "Better Data Visibility" }, desc: { lv: "Skaidri paneļi un atskaites dod pilnīgu priekšstatu par jūsu biznesu.", en: "Clear dashboards and reports give you full visibility into your operations." } },
      { title: { lv: "Ātrāki lēmumi", en: "Faster Decisions" }, desc: { lv: "Pieņemiet lēmumus, kas balstīti uz reāliem datiem, nevis intuīciju.", en: "Make decisions based on real data, not gut feeling." } },
      { title: { lv: "Lielāka efektivitāte", en: "Higher Efficiency" }, desc: { lv: "Optimizēti procesi nozīmē mazāk laika tēriņa un lielāku produktivitāti.", en: "Optimized processes mean less wasted time and higher productivity." } },
      { title: { lv: "Individuāli risinājumi", en: "Tailored Solutions" }, desc: { lv: "Katrs risinājums ir pielāgots tieši jūsu biznesa vajadzībām.", en: "Every solution is tailored specifically to your business needs." } },
    ],
  },
  howWeWork: {
    tag: { lv: "Kā strādājam", en: "How We Work" },
    headline: {
      lv: "Vienkāršs un skaidrs process",
      en: "A Simple, Clear Process",
    },
    steps: [
      {
        title: { lv: "Izpēte un audits", en: "Discovery & Audit" },
        desc: {
          lv: "Analizējam jūsu esošos procesus, datu plūsmas un darbplūsmas, lai identificētu automatizācijas iespējas.",
          en: "We analyze your current processes, data flows, and workflows to identify automation opportunities.",
        },
      },
      {
        title: { lv: "Risinājuma izstrāde un ieviešana", en: "Solution Design & Implementation" },
        desc: {
          lv: "Izstrādājam un ieviešam automatizācijas risinājumus, paneļus un uzlabotas datu struktūras.",
          en: "We design and implement automation solutions, dashboards, and improved data structures.",
        },
      },
      {
        title: { lv: "Optimizācija un atbalsts", en: "Optimization & Support" },
        desc: {
          lv: "Turpinām uzlabot sistēmu un atbalstīt jūsu biznesu tā augšanas procesā.",
          en: "We continue improving the system and supporting your business as it grows.",
        },
      },
    ],
  },
  whoIsFor: {
    tag: { lv: "Kam tas ir domāts", en: "Who This Is For" },
    headline: {
      lv: "Vai tas ir domāts jums?",
      en: "Is This Right for You?",
    },
    intro: {
      lv: "Mūsu pakalpojumi ir ideāli piemēroti uzņēmumiem, kas:",
      en: "Our services are ideal for companies that:",
    },
    items: [
      { lv: "Tērē pārāk daudz laika manuāliem uzdevumiem", en: "Spend too much time on manual tasks" },
      { lv: "Lielu daļu darba veic ar Excel un dokumentiem", en: "Rely heavily on spreadsheets and documents" },
      { lv: "Nav skaidras atskaites un datu pārredzamība", en: "Lack clear reporting and data visibility" },
      { lv: "Vēlas automatizēt iekšējos procesus", en: "Want to automate internal processes" },
      { lv: "Vēlas efektīvāk mērogot darbību", en: "Want to scale operations more efficiently" },
    ],
  },
  cta: {
    headline: {
      lv: "Uzziniet, ko jūsu biznesā var automatizēt",
      en: "Discover What Can Be Automated in Your Business",
    },
    text: {
      lv: "Daudzi uzņēmumi katru gadu izšķiež simtiem stundu manuāliem procesiem, kurus varētu automatizēt. MorData palīdz identificēt šīs iespējas un ieviest praktiskus risinājumus.",
      en: "Many companies waste hundreds of hours each year on manual processes that could be automated. MorData helps identify those opportunities and implement practical solutions.",
    },
    button: { lv: "Pieteikt konsultāciju", en: "Schedule a Consultation" },
  },
  testimonials: {
    tag: { lv: "Klientu atsauksmes", en: "Client Testimonials" },
    headline: {
      lv: "Ko saka mūsu klienti",
      en: "What Our Clients Say",
    },
    items: [
      {
        name: "Jānis Bērziņš",
        role: { lv: "Ražošanas direktors, SIA Metālforma", en: "Manufacturing Director, Metālforma Ltd" },
        text: {
          lv: "MorData palīdzēja mums automatizēt atskaišu veidošanu, kas iepriekš aizņēma 2 dienas nedēļā. Tagad tas notiek automātiski.",
          en: "MorData helped us automate reporting that previously took 2 days per week. Now it happens automatically.",
        },
      },
      {
        name: "Laura Kalniņa",
        role: { lv: "Operāciju vadītāja, Baltic Logistics", en: "Operations Manager, Baltic Logistics" },
        text: {
          lv: "Paneļi, ko MorData izveidoja, deva mums pilnīgu priekšstatu par mūsu operācijām. Lēmumu pieņemšana kļuva daudz ātrāka.",
          en: "The dashboards MorData created gave us full visibility into our operations. Decision-making became much faster.",
        },
      },
      {
        name: "Māris Liepiņš",
        role: { lv: "Finanšu vadītājs, GreenTech Solutions", en: "Finance Manager, GreenTech Solutions" },
        text: {
          lv: "Mēs pārgājām no haotiskām Excel tabulām uz strukturētu sistēmu. Kļūdu skaits samazinājās par 80%.",
          en: "We moved from chaotic Excel sheets to a structured system. Error rates dropped by 80%.",
        },
      },
    ],
  },
  contact: {
    tag: { lv: "Kontakti", en: "Contact" },
    headline: {
      lv: "Sazināties ar mums",
      en: "Get in Touch",
    },
    name: { lv: "Vārds", en: "Name" },
    email: { lv: "E-pasts", en: "Email" },
    company: { lv: "Uzņēmums", en: "Company" },
    message: { lv: "Ziņojums", en: "Message" },
    send: { lv: "Nosūtīt", en: "Send Message" },
  },
  footer: {
    desc: {
      lv: "Datu vadīta lēmumu pieņemšana un biznesa procesu automatizācija.",
      en: "Data-driven decision making and business process automation.",
    },
    rights: {
      lv: "Visas tiesības aizsargātas.",
      en: "All rights reserved.",
    },
    efficiency: {
      lv: "Vidējais klientu ietaupītais laiks šomēnes:",
      en: "Average time saved for clients this month:",
    },
    hours: {
      lv: "stundas",
      en: "hours",
    },
  },
} as const;
