import React, { useState, useEffect } from "react";
import { Scissors, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND_NAME, WHATSAPP_RAW } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.04] py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-10 h-10 rounded-xl bg-white border border-black/[0.05] flex items-center justify-center group-hover:border-[#D4AF37]/30 shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
            >
              <Scissors className="w-4 h-4 text-[#D3B455] rotate-45" />
            </motion.div>
            <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-[#2D2D2D]">
              {BRAND_NAME}
              <span className="text-[#98FFB4]">.</span>
            </span>
          </a>

          {/* Desktop Nav with interactive motion underline */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { label: "Services", href: "#services" },
              { label: "Über Manuel", href: "#story" },
              { label: "Rezensionen", href: "#reviews" },
              { label: "Termine", href: "#booking" },
              { label: "FAQ", href: "#faq" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="relative text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Trigger */}
          <div className="hidden sm:flex items-center gap-5">
            <motion.a
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${WHATSAPP_RAW}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/70 hover:bg-slate-50 text-slate-700 font-mono text-xs font-semibold py-2.5 px-5 rounded-full border border-black/[0.05] hover:border-[#A7DFFF]/40 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              +41 77 483 68 14
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.03, 
                y: -1, 
                boxShadow: "0 10px 25px rgba(152, 255, 180, 0.4)" 
              }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${WHATSAPP_RAW}?text=Hallo%20Manuel!%20Ich%20möchte%20gerne%20einen%20Schnitt%20bei%20dir%20buchen.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#98FFB4] text-[#1e2022] font-semibold text-[11px] py-3 px-6 rounded-full hover:bg-[#85e6a0] transition-all duration-300 uppercase tracking-widest font-display shadow-[0_4px_15px_rgba(152,255,180,0.25)] border border-[#a5f7bc]"
            >
              Jetzt buchen
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-500 hover:text-slate-900 transition-colors"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay using Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 h-screen z-40 bg-white/98 backdrop-blur-2xl md:hidden flex flex-col justify-center items-center"
          >
            {/* Absolute close button in mobile menu for better UX */}
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col gap-8 text-center" onClick={() => setMobileMenuOpen(false)}>
              {[
                { label: "Services", href: "#services" },
                { label: "Über Manuel", href: "#story" },
                { label: "Rezensionen", href: "#reviews" },
                { label: "Termine", href: "#booking" },
                { label: "FAQ", href: "#faq" },
              ].map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={idx}
                  href={link.href}
                  className="font-display font-medium text-xl text-slate-800 hover:text-[#D4AF37] transition-colors tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="mt-8 flex flex-col gap-4 px-6 max-w-sm mx-auto w-full">
                <a
                  href={`https://wa.me/${WHATSAPP_RAW}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-50 text-slate-800 py-3.5 px-6 rounded-full border border-black/5 font-mono text-xs shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  +41 77 483 68 14
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_RAW}?text=Hallo%20Manuel!%20Ich%20möchte%20gerne%20einen%20Schnitt%20bei%20dir%20buchen.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#98FFB4] text-[#1e2022] font-display font-bold py-3.5 px-8 rounded-full shadow-[0_4px_15px_rgba(152,255,180,0.3)] hover:bg-[#85e6a0] text-xs uppercase tracking-widest border border-[#a5f7bc]"
                >
                  JETZT TERMIN SICHERN
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
