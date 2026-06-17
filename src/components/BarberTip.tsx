import React from "react";
import { Sparkles, Scissors } from "lucide-react";
import { motion } from "motion/react";

export default function BarberTip() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
      whileHover={{ y: -4 }}
      className="premium-card rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto overflow-hidden relative bg-white border border-black/[0.04] shadow-[0_15px_45px_rgba(0,0,0,0.012)]"
    >
      {/* Decorative top gold laser accent */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37]/45 to-transparent" />
      
      {/* Visual background badge */}
      <div className="absolute -right-8 -bottom-8 w-44 h-44 text-slate-100/40 pointer-events-none select-none">
        <Scissors className="w-full h-full rotate-45" />
      </div>

      <div className="space-y-8 relative z-10">
        {/* Header Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] bg-[#D4AF37]/8 px-4 py-2 rounded-full border border-[#D4AF37]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            STYLING TIPP DER WOCHE
          </div>
          <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em]">
            Edition #04 — Fade Konservierung
          </span>
        </div>

        {/* Inner Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
          {/* Left Large Headline */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#2D2D2D] uppercase tracking-tight leading-tight">
              SO BLEIBT DEIN FADE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#98FFB4] to-[#A7DFFF] gold-text-glow font-black">
                LÄNGER CLEAN.
              </span>
            </h3>
            <p className="text-slate-400 font-mono text-[10px] block uppercase tracking-widest">
              VON MANUEL STETTLER
            </p>
          </div>

          {/* Right Detailed Instructions */}
          <div className="md:col-span-7 space-y-5 text-slate-600 text-sm font-light leading-relaxed">
            <p>
              Ein frischer <strong className="text-[#2D2D2D] font-semibold">Skin Fade</strong> fühlt sich genial an — doch die ersten Millimeter wachsen schnell nach. Um den ultra-scharfen Kontrast deines Übergangs zuhause so lange wie möglich perfekt zu konservieren, beachte diese drei Goldenen Regeln:
            </p>

            {/* Checklist of steps */}
            <div className="space-y-4 pt-2 font-sans">
              <div className="flex items-start gap-4">
                <span className="font-mono text-[11px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-lg border border-[#D4AF37]/10 shrink-0 mt-0.5">01</span>
                <div>
                  <strong className="text-[#2D2D2D] font-semibold block mb-1">Matte Styling-Pulver bevorzugen:</strong>
                  <p className="font-light text-slate-500 text-xs sm:text-sm">
                    Für Fades ist Pomade oft zu schwer. Matte Styling-Powder verleihen deinem Deckhaar massives Volumen und Textur, ohne feine Rückstände auf den rasierten Seiten abzulagern.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-[11px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-lg border border-[#D4AF37]/10 shrink-0 mt-0.5">02</span>
                <div>
                  <strong className="text-[#2D2D2D] font-semibold block mb-1">Kaltes Wasser nach dem Cut:</strong>
                  <p className="font-light text-slate-500 text-xs sm:text-sm">
                    Wasche deine Haare am ersten Tag mit eher kühlem Wasser. Das schliesst die Poren der empfindlichen, frisch rasierten Nackenpartie und beugt unschönen Rötungen und Rasurbrand vor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-[11px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-lg border border-[#D4AF37]/10 shrink-0 mt-0.5">03</span>
                <div>
                  <strong className="text-[#2D2D2D] font-semibold block mb-1">Fönmündung nach unten richten:</strong>
                  <p className="font-light text-slate-500 text-xs sm:text-sm">
                    Föhne das Deckhaar immer von oben nach unten (Richtung Gesicht/Seiten). Das glättet die Schuppenschicht des Haares und lässt den Übergang zu den ultrakurzen Seiten harmonischer verschmelzen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Quote Footer */}
        <div className="pt-6 mt-4 border-t border-black/[0.04] flex items-center gap-3.5 text-xs text-slate-500">
          <div className="w-2 h-2 rounded-full bg-[#98FFB4] shrink-0 shadow-sm shadow-[#98FFB4]/50" />
          <p className="italic font-light">
            “Pflege fängt beim richtigen Föhnen an. Gerne zeige ich dir den optimalen Handgriff bei deinem nächsten Besuch.” — Manuel
          </p>
        </div>
      </div>
    </motion.div>
  );
}
