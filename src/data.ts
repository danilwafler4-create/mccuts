import { Service, Review } from "./types";

export const WHATSAPP_NUMBER = "+41 77 483 68 14";
export const WHATSAPP_RAW = "41774836814";
export const BARBER_NAME = "Manuel Stettler";
export const BRAND_NAME = "MCCUTS";
export const BARBER_LOCATION = "Beatenberg, Schweiz";
export const BARBER_AGE = 16;

export const SERVICES: Service[] = [
  {
    id: "fade-only",
    name: "The Fade Only",
    price: 5,
    description: "Schnelles Auffrischen der Seiten / Übergang auf Null.",
    features: [
      "Präziser Übergang auf Null (Skin Fade)",
      "Scharfes Trimmen der Seitenkonturen",
      "Maschinen- & Trimmer-Feinarbeit",
      "Finish mit erfrischendem Hair Tonic",
    ],
    durationMinutes: 20,
    badge: "Schnell & Clean",
    whatsAppText: "Hallo Manuel, ich möchte gerne einen Termin für 'The Fade Only' (CHF 5.-) buchen."
  },
  {
    id: "fresh-cut",
    name: "MC Fresh Cut",
    price: 10,
    description: "Kompletter Haarschnitt & Premium-Styling in Beatenberg.",
    features: [
      "Individuelle Typberatung",
      "Präziser Maschinenschnitt & Scherenarbeit",
      "Komplettes Ausrasieren des Nackens",
      "Premium Styling mit hochwertiger Pomade/Wax",
    ],
    durationMinutes: 35,
    badge: "Bestseller",
    whatsAppText: "Hallo Manuel, ich möchte gerne einen Termin für den 'MC Fresh Cut' (CHF 10.-) vereinbaren."
  },
  {
    id: "combo",
    name: "MCCUTS Combo",
    price: 15,
    description: "Das ultimative Komplettpaket: Haarschnitt & Bart-Styling.",
    features: [
      "Kompletter Haarschnitt (MC Fresh Cut)",
      "Bart-Konturenrasur & präziser Barttrimmer",
      "Heisse Kompresse & nährendes Bartöl",
      "Konturen-Ausarbeitung mit der Klinge",
      "Premium Haar- und Bart-Styling",
    ],
    durationMinutes: 50,
    badge: "VIP Komplettpaket",
    whatsAppText: "Hallo Manuel, ich möchte gerne einen Termin für das VIP Komplettpaket 'MCCUTS Combo' (CHF 15.-) sichern."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Levin S.",
    rating: 5,
    date: "Vor 1 Woche",
    text: "Manuel's Drop Fades sind extrem präzise. Kaum zu glauben, dass er erst 16 Jahre alt ist! Für mich eindeutig der talentierteste und beste Haircut in Beatenberg.",
    haircutType: "Drop Fade & Styling",
    location: "Beatenberg"
  },
  {
    id: "rev-2",
    author: "Noah M.",
    rating: 5,
    date: "Vor 3 Tagen",
    text: "Mega Taper Fade, unfassbar scharfe Konturen an den Seiten. Ich bin mittlerweile absoluter Stammkunde hier. Das Preis-Leistungs-Verhältnis ist einfach unschlagbar!",
    haircutType: "Taper Fade & Line-Up",
    location: "Interlaken / Beatenberg"
  },
  {
    id: "rev-3",
    author: "Alessio B.",
    rating: 5,
    date: "Vor 2 Wochen",
    text: "Ein absoluter Perfektionist an den Clippern! Manuel nimmt sich die nötige Zeit für jedes Detail und liefert jedes Mal 100% perfekte Übergänge ab. Genialer Job!",
    haircutType: "MCCUTS Combo",
    location: "Beatenberg"
  },
  {
    id: "rev-4",
    author: "Janick K.",
    rating: 5,
    date: "Gestern",
    text: "Bester Barber der ganzen Region! Manuel hat massiv Talent und ein extrem gutes Auge für Symmetrie. Die Buchung über WhatsApp läuft super unkompliziert.",
    haircutType: "MC Fresh Cut",
    location: "Habkern / Beatenberg"
  }
];

export const FAQ = [
  {
    question: "Wo schneidest du in Beatenberg die Haare?",
    answer: "Ich schneide Haare direkt bei mir zu Hause in Beatenberg in meinem modern eingerichteten privaten Barber-Corner. Nach der Terminabsprache via WhatsApp sende ich dir die genaue Wegbeschreibung."
  },
  {
    question: "Wie kann ich einen Termin buchen?",
    answer: `Die Terminvereinbarung erfolgt super unkompliziert direkt über WhatsApp unter +41 77 483 68 14. Nutze einfach einen der 'Jetzt buchen' Buttons auf der Website, gib deinen Wunschtermin an, und ich antworte dir so schnell wie möglich.`
  },
  {
    question: "Bist du wirklich erst 16 Jahre alt?",
    answer: "Ja, ich bin 16 Jahre alt und Barber aus absoluter Leidenschaft! Ich bilde mich ständig weiter, analysiere die neuesten Trends und Techniken, um dir Fades auf höchstem Niveau zu liefern."
  },
  {
    question: "Welche Bezahlmöglichkeiten gibt es?",
    answer: "Du kannst bei mir ganz bequem bar bezahlen oder unkompliziert via TWINT."
  }
];
