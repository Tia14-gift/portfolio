/*
  ────────────────────────────────────────────────────────────────
  TOUT LE CONTENU DU SITE EST ICI.
  Modifie uniquement le texte entre guillemets " ".
  - Photos : mets le fichier dans le dossier images/ puis écris "images/nom.jpg"
  - Vidéo YouTube : video: { youtube: "ID" }  (l'ID = ce qui suit v= dans le lien)
  - Vidéo à toi :   video: { file: "videos/nom.mp4" }
  - Laisse "" (vide) ce que tu ne veux pas afficher.
  ────────────────────────────────────────────────────────────────
*/
window.SITE = {
  name: "Tiarere Lussan",
  seeking: "Seeking paid internships",
  focus: ["Art", "Auction Houses", "Luxury", "Tech"],
  availability: "Summer 2027 – Spring 2028",
  availabilityDetail: "Two 6-month terms · New York",
  origin: "From Tahiti,\nFrench Polynesia",

  email: "tiarere.lussan@edhec.com",
  phone: "", // ex. "+33 7 67 35 81 80" — laissé vide : un site public est lu par tout le monde
  linkedin: "https://www.linkedin.com/in/tiarere-lussan",
  cv: "", // ex. "documents/CV-Tiarere-Lussan.pdf" — le bouton apparaît dès que c'est rempli

  about: [
    "Raised between the lagoons of Tahiti and the lecture halls of Paris, I am a Master in Management student at EDHEC Business School with a B.A. in Economics from Université Paris 1 Panthéon-Sorbonne.",
    "My path has taken me from grading Tahitian pearls for an international clientele to analysing global markets for Tahiti Tourisme and building business partnerships in Silicon Valley. What connects it all is a love of craft, culture and the people behind them — and the conviction that great objects deserve great stories.",
    "I am now looking for two six-month internships in New York, at the meeting point of art, luxury and technology."
  ],

  experience: [
    {
      company: "Tech Butlers LLC",
      role: "Business Development & Client Relations",
      place: "San Jose, California",
      dates: "June – August 2026",
      summary: "Business development for a Silicon Valley start-up bringing technology support to senior communities.",
      details: [
        "Prospected and developed B2B partnerships with senior living residences: market mapping, contact research and written commercial proposals.",
        "Onboarded new clients, from qualifying their needs through to closing.",
        "Produced marketing materials and structured internal processes — CRM, onboarding and workflows.",
        "Led the digital refresh: website redesign, LinkedIn presence and content creation."
      ],
      image: ""
    },
    {
      company: "Tahiti Tourisme",
      role: "International Operations Department",
      place: "Papeete, French Polynesia",
      dates: "June – August 2025",
      summary: "The destination-marketing body of The Islands of Tahiti, working with 12 representations across 14 international markets.",
      details: [
        "Analysed international and local markets to guide the promotion strategy of The Islands of Tahiti, with a focus on smoothing seasonality.",
        "Synthesised visitor profiles and school-holiday calendars for every market to sharpen off-peak targeting.",
        "Maintained performance tracking on Salesforce — data entry, quality control and reporting — including six months of KPIs for the Canadian market.",
        "Proposed an economics-led format for the Brainstorming Week gathering all market representatives in Tahiti.",
        "Took the minutes of the department's two-day strategy seminar aboard the Star Breeze."
      ],
      image: ""
    },
    {
      company: "Love Here Pearl Farm",
      role: "Pearl Production & Luxury Retail",
      place: "Taha'a, French Polynesia",
      dates: "July – August 2024",
      summary: "A family pearl farm on the island of Taha'a, producing and selling Tahitian pearls.",
      details: [
        "Harvested, sorted and graded Tahitian pearls by size, lustre, shape and colour.",
        "Sold to a prestigious international clientele visiting from cruise ships.",
        "Handled sales administration and follow-up."
      ],
      image: ""
    }
  ],

  /* Projets : clique sur une carte du site pour voir le détail (photos, vidéo, lien). */
  projects: [
    {
      title: "Turgot Alumni",
      tag: "Website · Leadership",
      summary: "Alumni directory and website for the Lycée Turgot preparatory-class network, which I now chair.",
      description: "As president of the association, I designed and developed its website and alumni directory (React, Vite), and run its social media and the annual orientation forum for preparatory-class students.",
      link: "",
      linkLabel: "Visit the website",
      cover: "",
      gallery: [],
      video: null
    },
    {
      title: "Vive les Vacances !",
      tag: "Photography · Non-profit",
      summary: "Photography and visual communication for a charity sending children from Lille on holiday.",
      description: "I photograph the children's activities and produce the association's visual communication, alongside fundraising — answering calls for projects to finance holidays — and weekly tutoring.",
      link: "",
      linkLabel: "",
      cover: "",
      gallery: [],
      video: null
    },
    {
      title: "Heiva i Tahiti",
      tag: "Dance · Culture",
      summary: "Dancer with Tamariki Poerani at French Polynesia's foremost cultural festival.",
      description: "Six months of rehearsals with the Tamariki Poerani troupe for the Heiva i Tahiti, including hand-crafting traditional costumes from natural fibres.",
      link: "",
      linkLabel: "",
      cover: "",
      gallery: [],
      video: null
    }
  ],

  education: [
    {
      degree: "Master in Management",
      school: "EDHEC Business School",
      place: "Lille, France",
      dates: "2025 – 2028",
      note: "Grande École programme · finance, marketing, accounting"
    },
    {
      degree: "B.A. in Economics",
      school: "Université Paris 1 Panthéon-Sorbonne",
      place: "Paris, France",
      dates: "2022 – 2025",
      note: "Including ENS D2 preparatory class at Lycée Turgot"
    },
    {
      degree: "Introduction to Art History",
      school: "École du Louvre",
      place: "Paris, France",
      dates: "",
      note: ""
    }
  ],

  beyond: [
    { label: "Languages", value: "French (native) · English (fluent, TOEIC 975/990) · Spanish (intermediate)" },
    { label: "Certificate", value: "Inside LVMH" },
    { label: "Tools", value: "Salesforce · HubSpot · Excel · PowerPoint · Adobe Suite · Canva" },
    { label: "Arts", value: "Classical & contemporary dance (11 years) · Transverse flute (7 years)" },
    { label: "Sport", value: "Open-water swimming" }
  ]
};
