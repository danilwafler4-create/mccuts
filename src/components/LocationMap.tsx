import React from "react";
import { MapPin, Compass, Navigation, ExternalLink, Globe } from "lucide-react";
import { motion } from "motion/react";
import { BARBER_LOCATION } from "../data";

export default function LocationMap() {
  // Beatenberg, Switzerland coordinates: ~46.6997° N, 7.7979° E
  const lat = 46.6997;
  const lon = 7.7979;
  
  // Custom styled OSM embed link centered around Beatenberg
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=7.7700%2C46.6850%2C7.8100%2C46.7120&layer=mapnik&marker=${lat}%2C${lon}`;
  const gmapsDirUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
      whileHover={{ y: -4 }}
      className="premium-card rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto overflow-hidden relative bg-white border border-black/[0.04] shadow-[0_15px_45px_rgba(0,0,0,0.012)]"
    >
      {/* Decorative top gold gradient accent */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Metadata & Coordinates */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] bg-[#D4AF37]/8 px-4 py-1.5 rounded-full border border-[#D4AF37]/15">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            STUDIO STANDORT
          </div>

          <div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#2D2D2D] uppercase tracking-tight">
              STUDIO BASE BEATENBERG
            </h3>
            <p className="text-slate-400 text-xs mt-1.5 font-mono tracking-wider font-semibold uppercase">
              BEATENBERG, SCHWEIZ
            </p>
          </div>

          <div className="space-y-5 pt-1">
            {/* Tech details panel */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-black/[0.04] space-y-3 font-mono text-xs text-slate-600 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Breitengrad:</span>
                <span className="text-slate-800 font-semibold">{lat}° N</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Längengrad:</span>
                <span className="text-slate-800 font-semibold">{lon}° E</span>
              </div>
              <div className="flex justify-between items-center border-t border-black/[0.03] pt-2.5">
                <span className="text-slate-400">Kanton:</span>
                <span className="text-[#D4AF37] font-bold">Bern (BE)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Höhe:</span>
                <span className="text-slate-800 font-semibold">1'149 m ü. M.</span>
              </div>
            </div>

            <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
              Direkt über dem wunderschönen Thunersee gelegen. Der Schnitt findet in privater, entspannter Atmosphäre statt. Genaue Wegbeschreibung folgt sofort nach deiner WhatsApp-Bestätigung.
            </p>

            {/* Navigation Button */}
            <a
              href={gmapsDirUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37] hover:text-slate-900 transition-all duration-300 group pt-1 border-b border-dashed border-[#D4AF37]/40 pb-0.5"
            >
              <Navigation className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              Route berechnen (Google Maps)
            </a>
          </div>
        </div>

        {/* Right: Map Iframe with Neon/Dark Filters */}
        <div className="lg:col-span-7 relative">
          {/* Subtle luxurious bounding corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/35 z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/35 z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/35 z-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/35 z-20 pointer-events-none" />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5 z-10 pointer-events-none" />

          {/* Map canvas frame */}
          <div className="relative rounded-2xl overflow-hidden border border-black/[0.04] bg-[#FCFCFB] h-[280px] sm:h-[340px] shadow-[0_4px_25px_rgba(0,0,0,0.012)]">
            <iframe
              title="MCCUTS Location Map"
              src={osmEmbedUrl}
              width="100%"
              height="100%"
              style={{
                // Cozy clean light desaturated layout style for premium appearance
                filter: "grayscale(12%) contrast(101%) saturate(102%) brightness(99%)",
                border: 0,
              }}
              loading="lazy"
              className="w-full h-full pointer-events-auto"
            />
          </div>

          {/* Location Badge Indicator inside map */}
          <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md border border-neutral-200/60 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#98FFB4] animate-ping" />
            <span className="text-[9px] font-mono font-bold uppercase text-slate-800 tracking-wider">
              MCCUTS BARBER STUDIO
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
