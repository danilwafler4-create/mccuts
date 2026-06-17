import React from "react";
import { Star, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Review } from "../types";

interface ReviewCardProps {
  review: Review;
  index: number;
}

export default function ReviewCard({ review, index }: ReviewCardProps) {
  // Get initials for Avatar
  const initials = review.author
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        ease: [0.16, 1, 0.3, 1],
        duration: 0.8,
        delay: index * 0.08
      }}
      whileHover={{ 
        y: -4,
        scale: 1.005,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.03), 0 0 25px rgba(212, 175, 55, 0.02)"
      }}
      className="premium-card p-7 sm:p-10 rounded-3xl transition-all duration-500 group flex flex-col justify-between h-full hover:border-[#D4AF37]/25 bg-white"
    >
      <div>
        {/* Row 1: Star ratings */}
        <div className="flex items-center gap-1.5 mb-5">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
          ))}
          <span className="text-[10px] text-slate-400 font-mono ml-2 font-bold tracking-widest">5.0 SCORE</span>
        </div>

        {/* Narrative */}
        <p className="text-[#2D2D2D] text-sm sm:text-base leading-relaxed mb-6 font-light italic">
          "{review.text}"
        </p>
      </div>

      {/* Row 3: Author profile */}
      <div className="flex items-center gap-4 pt-6 border-t border-black/[0.04]">
        {/* Custom Avatar Gradient */}
        <div className="w-11 h-11 rounded-full bg-slate-50 border border-black/[0.04] flex items-center justify-center shrink-0">
          <span className="text-xs font-bold font-mono text-[#D4AF37]">
            {initials}
          </span>
        </div>

        {/* Author Bio */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <h4 className="font-display font-semibold text-sm text-[#2D2D2D] truncate">
              {review.author}
            </h4>
            <span className="text-[8px] tracking-[0.1em] font-mono text-slate-500 bg-[#98FFB4]/10 text-slate-700 px-2 py-0.5 rounded-full border border-[#98FFB4]/15 uppercase leading-none shrink-0 font-bold">
              Kunde
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-slate-400 font-mono text-[9px] mt-1.5">
            <span className="flex items-center gap-1 whitespace-nowrap text-slate-400 font-medium">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              {review.location}
            </span>
            <span className="text-black/5">•</span>
            <span className="text-slate-500 font-semibold">{review.haircutType}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

