import React from "react";

export default function BackgroundGlows() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      {/* Glow Circle 1: Soft Pastel Mint Green (#98FFB4) */}
      <div 
        id="glow-circle-1"
        className="absolute top-[-10%] left-[-10%] md:top-[5%] md:left-[10%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-[#98FFB4]/18 blur-[100px] md:blur-[140px] animate-glow-1"
      />
      
      {/* Glow Circle 2: Soft Sky Blue (#A7DFFF) */}
      <div 
        id="glow-circle-2"
        className="absolute top-[30%] right-[-5%] w-[350px] md:w-[550px] h-[350px] md:h-[550px] rounded-full bg-[#A7DFFF]/15 blur-[110px] md:blur-[150px] animate-glow-2"
      />

      {/* Glow Circle 3: Soft Premium Gold (#D4AF37) */}
      <div 
        id="glow-circle-3"
        className="absolute bottom-[-10%] left-[5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#D4AF37]/10 blur-[120px] md:blur-[160px] animate-glow-3"
      />

      {/* Fine-grain elegant organic overlay for luxury finish */}
      <div 
        id="luxury-grid-overlay"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.012)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"
      />
    </div>
  );
}

