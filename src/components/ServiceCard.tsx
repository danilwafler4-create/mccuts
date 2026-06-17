import React from "react";
import { Check, Clock, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { Service } from "../types";
import { WHATSAPP_RAW } from "../data";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const encWhatsAppText = encodeURIComponent(service.whatsAppText);
  const waLink = `https://wa.me/${WHATSAPP_RAW}?text=${encWhatsAppText}`;

  // Check which badge style to use
  const isBestseller = service.badge === "Bestseller";
  const isVip = service.badge === "VIP Komplettpaket";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        ease: [0.16, 1, 0.3, 1],
        duration: 0.8,
        delay: index * 0.1 
      }}
      whileHover={{ 
        y: -6, 
        scale: 1.01,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.04), 0 0 30px rgba(212, 175, 55, 0.04)"
      }}
      className={`relative group rounded-3xl premium-card flex flex-col justify-between h-full bg-white transition-all duration-500 overflow-hidden ${
        isBestseller
          ? "border-[#D4AF37]/35 shadow-[0_12px_40px_rgba(212,175,55,0.06)]"
          : "border-black/[0.04] hover:border-[#D4AF37]/20"
      }`}
    >
      {/* Decorative colored glow bar at the top of bestseller */}
      {isBestseller && (
        <div className="absolute top-0 inset-x-0 h-[3.5px] bg-gradient-to-r from-[#98FFB4] via-[#D4AF37] to-[#A7DFFF]" />
      )}

      {/* Popular badge */}
      {service.badge && (
        <span
          className={`absolute top-0 right-8 -translate-y-1/2 font-mono text-[9px] font-bold tracking-[0.16em] uppercase py-1 px-4 rounded-full border shadow-sm ${
            isBestseller
              ? "bg-[#98FFB4] text-slate-800 border-[#a5f7bc] shadow-[0_3px_10px_rgba(152,255,180,0.2)]"
              : isVip
              ? "bg-[#2D2D2D] text-white border-transparent"
              : "bg-slate-100 text-slate-600 border-black/5"
          }`}
        >
          {service.badge}
        </span>
      )}

      {/* Card Header & Price */}
      <div className="p-7 sm:p-10">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono tracking-[0.15em] text-[#D4AF37] block uppercase font-bold">
              PRESTIGE SERVICE
            </span>
            <h3 className="font-display font-black text-2xl text-slate-800 leading-tight">
              {service.name}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 font-mono font-medium">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              {service.durationMinutes} MINUTE FADE
            </span>
          </div>

          <div className="text-right">
            <span className="font-mono text-[9px] text-slate-400 block uppercase tracking-widest font-bold">CHF</span>
            <span className="font-display font-black text-3xl sm:text-4xl text-[#2D2D2D] leading-none">
              {service.price}.-
            </span>
          </div>
        </div>

        <p className="text-slate-500 text-xs sm:text-sm mb-8 leading-relaxed font-light">
          {service.description}
        </p>

        {/* Dynamic Spec List (Luxury Style) */}
        <div className="space-y-4 mb-8">
          <span className="block text-[9px] font-mono tracking-[0.15em] text-slate-400 uppercase font-bold">
            FEATURES & PRECISION DETAILS
          </span>
          <ul className="space-y-3.5">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-600">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-[#D4AF37]/8 flex items-center justify-center shrink-0 border border-[#D4AF37]/15">
                  <Check className="w-2.5 h-2.5 text-[#D4AF37]" />
                </div>
                <span className="leading-normal font-light">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-7 pb-7 sm:px-10 sm:pb-10 mt-auto">
        <motion.a
          whileHover={{ 
            scale: 1.02,
            boxShadow: isBestseller 
              ? "0 10px 25px rgba(152, 255, 180, 0.35)" 
              : "0 10px 25px rgba(167, 223, 255, 0.25)"
          }}
          whileTap={{ scale: 0.98 }}
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center gap-2.5 font-display text-xs font-semibold py-4.5 px-6 rounded-2xl uppercase tracking-[0.15em] transition-all duration-300 ${
            isBestseller
              ? "bg-[#98FFB4] text-slate-800 hover:bg-[#A7DFFF] shadow-[0_5px_15px_rgba(152,255,180,0.25)] border border-[#a5f7bc] hover:border-[#bde8ff]"
              : "bg-slate-50 hover:bg-[#98FFB4] text-slate-700 hover:text-slate-800 border border-black/5 hover:border-[#a5f7bc] shadow-sm"
          }`}
        >
          <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
          Auf WhatsApp buchen
        </motion.a>
      </div>
    </motion.div>
  );
}

