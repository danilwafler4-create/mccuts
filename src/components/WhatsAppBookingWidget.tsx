import React, { useState } from "react";
import { Calendar, Clock, User, MessageSquare, Check, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Service } from "../types";
import { SERVICES, WHATSAPP_RAW } from "../data";

export default function WhatsAppBookingWidget() {
  const [selectedService, setSelectedService] = useState<Service>(SERVICES[1]); // default to MC Fresh Cut
  const [clientName, setClientName] = useState("");
  const [prefDate, setPrefDate] = useState("");
  const [prefTime, setPrefTime] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const timeSlots = [
    "13:30 Uhr",
    "14:30 Uhr",
    "15:30 Uhr",
    "16:30 Uhr",
    "17:30 Uhr",
    "18:30 Uhr",
    "19:30 Uhr"
  ];

  // Logic to build the WhatsApp Text
  const buildWhatsAppMessage = () => {
    const serviceName = selectedService.name;
    const price = selectedService.price;
    const nameStr = clientName.trim() ? clientName.trim() : "[Dein Name]";
    const dateStr = prefDate ? formatDate(prefDate) : "[Wunschdatum]";
    const timeStr = prefTime ? prefTime : "[Wunschzeit]";
    const notesStr = additionalNotes.trim() ? `\n\nZusätzliche Info/Wunsch: ${additionalNotes.trim()}` : "";

    return `Hallo Manuel! 👋\n\nIch möchte gerne einen Barber-Termin bei dir vereinbaren.\n\n✂️ Paket: ${serviceName} (CHF ${price}.-)\n👤 Name: ${nameStr}\n📅 Datum: ${dateStr}\n⏰ Uhrzeit: ${timeStr}${notesStr}\n\nDanke dir im Voraus!`;
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString("de-CH", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    } catch {
      return dateStr;
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setValidationError("Bitte gib deinen Namen an.");
      return;
    }
    if (!prefDate) {
      setValidationError("Bitte wähle ein Wunschdatum.");
      return;
    }
    if (!prefTime) {
      setValidationError("Bitte wähle eine Wunschuhrzeit.");
      return;
    }

    setValidationError(null);
    const message = buildWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WHATSAPP_RAW}?text=${encoded}`;
    window.open(waUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
      id="booking"
      className="bg-white border border-black/[0.04] rounded-3xl p-7 sm:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.012)] max-w-4xl mx-auto relative overflow-hidden"
    >
      {/* Luxurious Top Gradient Accent */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#98FFB4] via-[#D4AF37] to-[#A7DFFF]" />

      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-[0.2em] text-[#D4AF37] bg-[#D4AF37]/8 px-4.5 py-1.5 rounded-full border border-[#D4AF37]/15">
          DIGITAL CONCIERGE
        </span>
        <h3 className="font-display font-black text-3xl sm:text-4xl text-[#2D2D2D] mt-4 uppercase tracking-tight">
          Sichere dir deinen Slot
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto mt-3.5 leading-relaxed font-light">
          Wähle dein Paket & Wunschtermin aus. Unser System berechnet die Details und erstellt deine WhatsApp-Anfrage.
        </p>
      </div>

      {/* Modern validation message overlay */}
      <AnimatePresence>
        {validationError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 text-xs flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 shrink-0 text-orange-600" />
            <span className="font-semibold">{validationError}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSendWhatsApp} className="space-y-8">
        {/* Step 1: Package Choice Buttons */}
        <div>
          <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
            1. Service-Paket wählen
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SERVICES.map((srv) => {
              const isSelected = selectedService.id === srv.id;
              return (
                <button
                  type="button"
                  key={srv.id}
                  onClick={() => {
                    setSelectedService(srv);
                    setValidationError(null);
                  }}
                  className={`relative p-6 rounded-2xl text-left border cursor-pointer transition-all duration-350 ${
                    isSelected
                      ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_8px_20px_rgba(212,175,55,0.03)]"
                      : "border-black/[0.04] bg-[#FCFCFB] hover:border-[#A7DFFF]/40 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <span className="font-display font-bold text-slate-800 text-sm leading-tight">
                      {srv.name}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-slate-800 bg-[#98FFB4] px-2.5 py-1 rounded-full border border-[#8ae6a4] leading-none shrink-0 shadow-sm">
                      CHF {srv.price}
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-2 mt-2 font-light">
                    {srv.description}
                  </p>
                  {isSelected && (
                    <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
                      <Check className="w-2.5 h-2.5 text-white stroke-[3px]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Client Name */}
          <div>
            <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
              2. Dein Name / Spitzname
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                required
                placeholder="z.B. Janick"
                value={clientName}
                onChange={(e) => {
                  setClientName(e.target.value);
                  setValidationError(null);
                }}
                className="w-full bg-[#FCFCFB] border border-black/[0.05] rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_4px_15px_rgba(212,175,55,0.03)] transition-all duration-300"
              />
            </div>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
              3. Wunschdatum wählen
            </label>
            <div className="relative block">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                <Calendar className="w-4 h-4" />
              </span>
              <input
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={prefDate}
                onChange={(e) => {
                  setPrefDate(e.target.value);
                  setValidationError(null);
                }}
                className="w-full bg-[#FCFCFB] border border-black/[0.05] rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-800 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_4px_15px_rgba(212,175,55,0.03)] transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Slots grid or custom clock */}
        <div>
          <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
            4. Bevorzugte Uhrzeit auswählen
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5">
            {timeSlots.map((slot) => {
              const isSelected = prefTime === slot;
              return (
                <button
                  type="button"
                  key={slot}
                  onClick={() => {
                    setPrefTime(slot);
                    setValidationError(null);
                  }}
                  className={`py-3 px-1 rounded-xl font-mono text-[10px] font-semibold tracking-wider text-center border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-[#D4AF37] text-white border-[#D4AF37] shadow-[0_4px_12px_rgba(212,175,55,0.25)]"
                      : "bg-[#FCFCFB] border-black/[0.04] text-slate-500 hover:border-black/15"
                  }`}
                >
                  {slot.replace(" Uhr", "")}
                </button>
              );
            })}
          </div>
          <div className="relative mt-4">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]">
              <Clock className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Oder Wunsch-Uhrzeit selbst eintragen (z.B. Sa Vormittag)"
              value={prefTime && !timeSlots.includes(prefTime) ? prefTime : ""}
              onChange={(e) => {
                setPrefTime(e.target.value);
                setValidationError(null);
              }}
              className="w-full bg-[#FCFCFB] border border-black/[0.05] rounded-2xl py-4 pl-12 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_4px_15px_rgba(212,175,55,0.03)] transition-all duration-300"
            />
          </div>
        </div>

        {/* Optional Notes */}
        <div>
          <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
            Zusätzliche Wünsche / Bemerkungen (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="z.B. Möchte zusätzlich ein Muster reinrasieren oder Augenbrauen zupfen..."
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            className="w-full bg-[#FCFCFB] border border-black/[0.05] rounded-2xl py-4 px-5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_4px_15px_rgba(212,175,55,0.03)] transition-all duration-300 resize-none font-light"
          />
        </div>

        {/* WhatsApp Message Preview Frame */}
        <div className="bg-slate-50 border border-black/[0.04] rounded-2xl p-5 sm:p-6">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono uppercase tracking-[0.15em] mb-4 pb-2.5 border-b border-black/[0.03] font-bold">
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            Live Vorschau (WhatsApp Anfrage)
          </div>
          <div className="bg-white text-slate-600 rounded-xl p-4 sm:p-5 text-xs sm:text-sm font-mono whitespace-pre-line border border-black/[0.03] max-h-48 overflow-y-auto font-light leading-relaxed">
            {buildWhatsAppMessage()}
          </div>
        </div>

        {/* Warning / TWINT Note */}
        <div className="flex items-start gap-4 text-xs text-slate-600 leading-relaxed bg-[#D4AF37]/5 p-5 rounded-2xl border border-[#D4AF37]/10">
          <span className="mt-0.5 shrink-0 text-[#D4AF37] font-mono font-bold uppercase tracking-widest bg-white px-2.5 py-1 rounded text-[8px] border border-[#D4AF37]/15">INFO PAY</span>
          <p className="font-light text-slate-600 leading-normal">
            Manuel meldet sich unverzüglich bei dir zur Bestätigung. Du kannst ganz komfortabel bar oder via <b>TWINT</b> direkt vor Ort bezahlen. Cuts werden in <b>Beatenberg, CH</b> durchgeführt.
          </p>
        </div>

        {/* Main CTA */}
        <motion.button
          whileHover={{ 
            scale: 1.02, 
            boxShadow: "0 15px 35px rgba(152, 255, 180, 0.45)"
          }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-[#98FFB4] text-[#1e2022] font-display font-semibold py-4.5 px-6 rounded-2xl hover:bg-[#A7DFFF] transition-all duration-500 uppercase tracking-[0.15em] text-xs flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_5px_20px_rgba(152, 255, 180, 0.3)] border border-[#a5f7bc] hover:border-[#bde8ff]"
        >
          <MessageSquare className="w-4 h-4 text-[#D4AF37] " />
          Auf WhatsApp anfragen & Termin blockieren
        </motion.button>
      </form>
    </motion.div>
  );
}
