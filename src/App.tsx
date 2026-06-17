import React, { useState } from "react";
import { 
  MapPin, Star, Sparkles, Scissors, Clock, 
  MessageSquare, ChevronDown, CheckCircle, ShieldCheck, Zap, Award 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Header from "./components/Header";
import BackgroundGlows from "./components/BackgroundGlows";
import ServiceCard from "./components/ServiceCard";
import ReviewCard from "./components/ReviewCard";
import WhatsAppBookingWidget from "./components/WhatsAppBookingWidget";
import LocationMap from "./components/LocationMap";
import BarberTip from "./components/BarberTip";

import { 
  SERVICES, REVIEWS, FAQ, 
  BRAND_NAME, WHATSAPP_RAW 
} from "./data";

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { cubicBezier: [0.16, 1, 0.3, 1], duration: 0.85 } 
    }
  };

  return (
    <div id="root-container" className="relative min-h-screen overflow-x-hidden bg-[#FFFFFF] text-[#2D2D2D] font-sans selection:bg-[#98FFB4] selection:text-[#2D2D2D]">
      {/* Background System "Kreissystem" */}
      <BackgroundGlows />

      {/* Floating Header */}
      <Header />

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Hero Left Info */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-slate-50 border border-black/[0.04] rounded-full px-4 py-1.5 text-xs font-mono font-bold text-slate-700 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#98FFB4] animate-ping"></span>
              Manuel Stettler – 16-jähriges Schnitt-Talent
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#2D2D2D] tracking-tight leading-tight uppercase"
            >
              {BRAND_NAME} <span className="text-[#D4AF37] block md:inline">–</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D2D2D] via-[#D4AF37] to-[#A7DFFF] gold-text-glow font-black">SHARP FADES.</span> <br />NO COMPROMISES.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-slate-500 text-base sm:text-lg max-w-xl leading-relaxed font-light"
            >
              Präzises Handwerk, gnadenlos scharfe Übergänge und frische Trendcuts direkt in <strong className="text-[#2D2D2D] font-semibold">Beatenberg</strong>. Manuel Stettler vereint angeborenes Gespür mit absolutem Perfektionismus an den Maschinenschneiden.
            </motion.p>

            {/* Quick Badges row */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-y-3.5 gap-x-6 text-xs text-slate-500 font-mono py-2"
            >
              <span className="flex items-center gap-2 bg-slate-50 border border-black/[0.03] px-3 py-1.5 rounded-xl">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                Beatenberg, CH
              </span>
              <span className="flex items-center gap-2 bg-slate-50 border border-black/[0.03] px-3 py-1.5 rounded-xl">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                5.0 Stars (42+ Reviews)
              </span>
              <span className="flex items-center gap-2 bg-slate-50 border border-black/[0.03] px-3 py-1.5 rounded-xl">
                <CheckCircle className="w-3.5 h-3.5 text-slate-600" />
                TWINT / Cash
              </span>
            </motion.div>

            {/* Interactive CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#booking"
                className="bg-[#2D2D2D] text-white font-display font-bold py-4.5 px-9 rounded-2xl hover:bg-black transition-all duration-300 uppercase tracking-widest text-xs text-center shadow-[0_10px_25px_rgba(0,0,0,0.06)] cursor-pointer"
              >
                Jetzt Termin sichern
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: "#f7f7f6" }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="bg-white text-[#2D2D2D] font-display font-semibold py-4.5 px-9 rounded-2xl border border-black/[0.08] hover:border-[#D4AF37]/35 transition-all duration-300 uppercase tracking-wider text-xs text-center cursor-pointer"
              >
                Preise ansehen
              </motion.a>
            </motion.div>
          </div>

          {/* Hero Right Visual Frame */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[400px] lg:max-w-none">
              {/* Backglow element */}
              <div className="absolute inset-x-6 top-6 bottom-6 bg-[#D4AF37]/4 blur-[60px] rounded-3xl z-0" />
              
              {/* Image Border Container */}
              <div className="relative rounded-3xl p-2.5 bg-white border border-black/[0.04] shadow-[0_15px_45px_rgba(0,0,0,0.02)] z-10 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />
                
                <img
                  src="/src/assets/images/barbershop_interior_1781708472229.jpg"
                  alt="MCCUTS Barber Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-[16/10] lg:aspect-[4/3] object-cover rounded-[20px] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                />

                {/* Overlaid Badges inside the frame */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-white/95 backdrop-blur-md border border-black/[0.03] rounded-2xl p-4 flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
                    <div>
                      <p className="text-[#2D2D2D] text-[11px] font-extrabold uppercase font-display tracking-widest">MCCUTS HQ Schweiz</p>
                      <p className="text-slate-500 text-[9px] font-mono leading-none mt-1.5">Beatenberg Private Studio</p>
                    </div>
                    <span className="font-mono text-[9px] bg-[#98FFB4] text-slate-800 px-3 py-1 rounded-full border border-[#85eba0]/50 font-bold uppercase tracking-wider">Aktiv</span>
                  </div>
                </div>

                {/* Floating Status Indicator */}
                <div className="absolute top-6 right-6 z-20 bg-white border border-black/[0.04] text-[#2D2D2D] text-[8px] font-mono font-bold tracking-[0.2em] px-3.5 py-1.5 rounded-full uppercase shadow-sm">
                  BEATENBERG
                </div>
              </div>

              {/* Decorative Tech Corner Badges */}
              <div className="absolute -top-3 -left-3 hidden md:flex items-center gap-2 bg-white border border-black/[0.04] px-4 py-2.5 rounded-2xl text-left z-20 shadow-[0_5px_15px_rgba(0,0,0,0.02)]">
                <Scissors className="w-3.5 h-3.5 text-[#D4AF37]" />
                <div>
                  <p className="text-[8px] font-mono text-slate-400 leading-none tracking-widest">PRECISED BY</p>
                  <p className="text-[11px] font-bold text-[#2D2D2D] mt-1.5 leading-none font-display">M. Stettler</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Band */}
      <div className="bg-slate-50/70 border-y border-black/[0.03] py-10 z-10 relative backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="block font-display font-black text-3xl text-[#2D2D2D]">100%</span>
            <span className="block text-slate-400 text-[9px] uppercase font-mono tracking-[0.15em] font-bold">Schnittpräzision</span>
          </div>
          <div className="space-y-1">
            <span className="block font-display font-black text-3xl text-slate-850">CHF 5.-</span>
            <span className="block text-slate-400 text-[9px] uppercase font-mono tracking-[0.15em] font-bold">STARTPREIS</span>
          </div>
          <div className="space-y-1">
            <span className="block font-display font-black text-3xl text-[#D4AF37]">★ 5.0</span>
            <span className="block text-slate-400 text-[9px] uppercase font-mono tracking-[0.15em] font-bold">42+ Google Reviews</span>
          </div>
          <div className="space-y-1">
            <span className="block font-display font-black text-3xl text-slate-850">TWINT</span>
            <span className="block text-slate-400 text-[9px] uppercase font-mono tracking-[0.15em] font-bold">Bequem zahlen</span>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Section Header */}
        <div className="text-center md:text-left md:flex justify-between items-end mb-16">
          <div className="max-w-xl space-y-3.5">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              <Scissors className="w-3.5 h-3.5 text-[#D4AF37]" />
              Unsere Preisliste
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#2D2D2D] uppercase tracking-tight">
              Scharfe Schnitte. <br />Ehrliche Preise.
            </h2>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              Keine versteckten Kosten. Als 16-jähriger Barber-Talent biete ich dir erstklassiges Handwerk zu unschlagbaren Schweizer Vorzugspreisen direkt in Beatenberg.
            </p>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-[10px] text-slate-500 flex items-center gap-2 justify-center bg-slate-50 border border-black/[0.04] px-4 py-2 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-[#D3AF37]" />
            Inklusive Beratung & Styling
          </div>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {SERVICES.map((srv, index) => (
            <ServiceCard key={srv.id} service={srv} index={index} />
          ))}
        </div>
      </section>

      {/* Story (About Manuel) Section */}
      <section id="story" className="py-24 border-y border-black/[0.03] bg-[#FCFCFB] z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image grid */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[340px] lg:max-w-none">
                {/* Visual Glow behind */}
                <div className="absolute inset-0 bg-[#D4AF37]/4 blur-[60px] rounded-full" />
                
                {/* Card element */}
                <div className="relative rounded-3xl p-2.5 bg-white border border-black/[0.04] overflow-hidden group shadow-[0_15px_45px_rgba(0,0,0,0.012)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                  <img
                    src="/src/assets/images/barber_tools_fade_1781708490497.jpg"
                    alt="Manuel Stettler Hair Artists Work"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto aspect-square object-cover rounded-[20px] transition duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-103"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <span className="font-mono text-[9px] bg-[#98FFB4] text-[#2D2D2D] px-3.5 py-1 rounded-full border border-[#8ae2a1] font-bold uppercase tracking-[0.15em] shadow-sm">
                      Fades & Contours
                    </span>
                    <p className="text-white text-base font-extrabold uppercase mt-2.5 tracking-tight leading-none">Maximale Detailtreue</p>
                  </div>
                </div>

                {/* Overlaid Float Container */}
                <div className="absolute top-[60%] -right-4 bg-white border border-black/[0.04] rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.02)] flex items-center gap-3.5 z-20">
                  <span className="font-black text-3xl text-[#D4AF37] font-display">16</span>
                  <div className="text-[10px] font-mono text-slate-500">
                    <p className="font-bold text-[#2D2D2D] text-[11px] leading-none">M. Stettler</p>
                    <p className="leading-none mt-1">Jahre alt / Talented</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Biography */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                Über den Barber
              </span>
              
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#2D2D2D] uppercase leading-tight">
                Manuel Stettler <span className="text-[#D4AF37] block sm:inline">—</span> Leidenschaft an den Clippern.
              </h2>
              
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
                Mein Name ist <strong className="text-[#2D2D2D] font-medium">Manuel Stettler</strong>. Mit erst 16 Jahren widme ich jede freie Minute meiner Passion: dem Kreieren von absolut makellosen Cuts. Was als Faszination für messerscharfe Übergänge begann, hat sich zu meinem eigenen Brand entwickelt — <strong className="text-[#2D2D2D] font-semibold">MCCUTS</strong>.
              </p>

              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
                Egal ob ein klassischer Low Fade, Mid- und High Fade, markante Taper-Linien oder die perfekte Bartpflege für konturierte Symmetrie. Ich arbeite mit hochpräzisen State-of-the-Art Clippern und nimm mir Zeit, bis der Sumpf absolut rein und fehlerlos sitzt. Kein Zeitdruck — nur beste Qualität in familiärer Beatenberger Kulisse.
              </p>

              {/* USP List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-[10px] text-slate-500">
                <div className="flex items-center gap-3">
                  <div className="w-5.5 h-5.5 rounded-lg bg-slate-50 flex items-center justify-center border border-black/[0.04] shrink-0 shadow-sm">
                    <Zap className="w-3 h-3 text-[#D4AF37]" />
                  </div>
                  <span>Spezialisiert auf Drop & Taper Fades</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5.5 h-5.5 rounded-lg bg-slate-50 flex items-center justify-center border border-black/[0.04] shrink-0 shadow-sm">
                    <Zap className="w-3 h-3 text-[#D4AF37]" />
                  </div>
                  <span>Professionelles Barber-Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5.5 h-5.5 rounded-lg bg-slate-50 flex items-center justify-center border border-black/[0.04] shrink-0 shadow-sm">
                    <Zap className="w-3 h-3 text-[#D4AF37]" />
                  </div>
                  <span>Unkomplizierter WA-Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5.5 h-5.5 rounded-lg bg-slate-50 flex items-center justify-center border border-black/[0.04] shrink-0 shadow-sm">
                    <Zap className="w-3 h-3 text-[#D4AF37]" />
                  </div>
                  <span>Sitzplatz & Drinks in Beatenberg</span>
                </div>
              </div>

              {/* Social Link Integration */}
              <div className="pt-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${WHATSAPP_RAW}?text=Hallo%20Manuel!%20Ich%20habe%20deine%20Story%20gelesen%20und%20möchte%20gerne%20vorbeikommen.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-50 text-[#2D2D2D] font-display font-semibold py-4 px-8 rounded-xl border border-black/[0.08] hover:border-[#D4AF37]/35 transition-all duration-300 text-xs tracking-wider uppercase inline-flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                  Manuel auf WhatsApp kontaktieren
                </motion.a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof (Reviews) Section */}
      <section id="reviews" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            <Star className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
            Vollstes Vertrauen
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#2D2D2D] uppercase tracking-tight mt-2.5">
            Was die Jungs sagen
          </h2>
          <p className="text-slate-500 text-sm mt-3.5 font-light leading-relaxed">
            Echte Bewertungen von Kunden aus Beatenberg und Umgebung. Überzeuge dich selbst von Manuels Detailversessenheit und dem entspannten Vibe.
          </p>
        </div>

        {/* Dynamic Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {REVIEWS.map((rev, index) => (
            <ReviewCard key={rev.id} review={rev} index={index} />
          ))}
        </div>
      </section>

      {/* Barber Tip of the Week Section */}
      <section id="tip" className="py-24 border-t border-black/[0.03] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <BarberTip />
      </section>

      {/* Styled Location Map Section */}
      <section id="location" className="py-24 border-t border-black/[0.03] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <LocationMap />
      </section>

      {/* Booking Form Component */}
      <section id="booking-section-wrapper" className="py-24 border-t border-black/[0.03] bg-gradient-to-b from-slate-50/60 to-white">
        <div className="max-w-7xl mx-auto">
          <WhatsAppBookingWidget />
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section id="faq" className="py-24 border-t border-black/[0.03] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            Häufige Fragen
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#2D2D2D] uppercase tracking-tight mt-2.5">
            Alles geklärt?
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-3.5 leading-relaxed font-light">
            Falls du noch Fragen zu Ablauf, Anfahrt oder Bezahlung hast, findest du hier die passenden Antworten.
          </p>
        </div>

        {/* FAQ Accordion container */}
        <div className="space-y-4">
          {FAQ.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-black/[0.04] rounded-2xl overflow-hidden shadow-sm transition-all duration-500 focus-within:ring-1 focus-within:ring-[#D4AF37]/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 sm:p-7 text-left font-display font-bold text-[#2D2D2D] transition-colors hover:text-[#D4AF37] cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold leading-relaxed">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D3AF37] transition-transform duration-500 shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-black/[0.03]"
                    >
                      <p className="p-6 sm:p-7 text-slate-500 text-xs sm:text-sm leading-relaxed bg-slate-50/50 font-light font-sans">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer layout */}
      <footer className="bg-[#FCFCFB] text-slate-500 pt-20 pb-28 md:pb-16 border-t border-black/[0.03] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Footer identity */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-50 border border-black/[0.04] flex items-center justify-center">
                <Scissors className="w-4 h-4 text-[#D4AF37] rotate-45" />
              </div>
              <span className="font-display font-black text-lg tracking-wider text-[#2D2D2D]">
                {BRAND_NAME}<span className="text-[#D4AF37]">.</span>
              </span>
            </a>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs font-light">
              Scharfe Fades, kompromisslose Genauigkeit und erstklassiges Styling in Beatenberg, Schweiz. Manuel Stettler (16) heißt dich willkommen.
            </p>
            <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              Beatenberg, Schweiz
            </div>
          </div>

          {/* Quick links header */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-[#2D2D2D] text-xs uppercase tracking-widest font-bold">Navigation</h4>
            <div className="flex flex-col gap-3 text-xs">
              <a href="#services" className="hover:text-[#D4AF37] transition-colors">Unsere Services</a>
              <a href="#story" className="hover:text-[#D4AF37] transition-colors">Über Barber Manuel</a>
              <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Rezensionen lesen</a>
              <a href="#booking" className="hover:text-[#D4AF37] transition-colors">Direkt buchen</a>
            </div>
          </div>

          {/* Opening & Payment facts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-[#2D2D2D] text-xs uppercase tracking-widest font-bold">Erreichbarkeit & Zahlung</h4>
            <div className="space-y-3 text-xs text-slate-400 font-mono">
              <p className="text-slate-600"><b>Nach Absprache via WhatsApp:</b></p>
              <p className="leading-relaxed">Meistens nachmittags ab 14:00 Uhr und samstags flexibel erreichbar.</p>
              <p className="text-[#D4AF37] font-semibold mt-2 uppercase tracking-wide">Zahlungsweise: TWINT oder Bar.</p>
            </div>
          </div>
        </div>

        {/* Legal notice */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/[0.03] mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {BRAND_NAME} — Manuel Stettler. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <span>Handmade in Switzerland</span>
            <span>•</span>
            <a href={`https://wa.me/${WHATSAPP_RAW}`} className="hover:text-[#D4AF37] font-medium">Kontakt +41 77 483 68 14</a>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Quick Booking Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-black/[0.04] p-3.5 shadow-[0_-8px_25px_rgba(0,0,0,0.02)] flex sm:hidden items-center justify-between z-30 max-w-md mx-auto rounded-t-2xl">
        <div className="flex flex-col text-left pl-2">
          <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-[#D4AF37] leading-none font-bold">MCCUTS CH</span>
          <span className="text-[12px] text-slate-800 font-extrabold leading-none mt-1.5 uppercase font-display tracking-tight">Fades ab CHF 5.-</span>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_RAW}?text=Hallo%20Manuel!%20Ich%20möchte%20gerne%20einen%20Schnitt%20bei%20dir%20buchen.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#98FFB4] text-[#2D2D2D] font-display font-bold text-[10px] py-3.5 px-6 rounded-xl shadow-[0_4px_12px_rgba(152,255,180,0.25)] hover:bg-[#A7DFFF] transition-all uppercase tracking-[0.12em] border border-[#a6fcc1]"
        >
          WhatsApp Buchen
        </a>
      </div>
    </div>
  );
}
