import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-[#0e1015] relative select-none overflow-x-hidden">
      <main className="min-h-screen w-full p-4 sm:p-8 md:p-12 flex flex-col justify-between">
        {/* Outer Hairline Border Frame (Inspired by Japanese Editorial Design) */}
        <div className="relative flex-1 border border-neutral-300/80 p-6 sm:p-10 md:p-16 flex flex-col justify-between">
          {/* Top Folio Header */}
          <header className="flex items-center justify-between text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a4ec]" />
              <span className="text-[#0e1015] font-serif tracking-[0.2em] lowercase text-sm">phii</span>
              <span className="opacity-40">/ 01</span>
            </div>
            <span className="hidden sm:inline opacity-50">creative sanctuary</span>
          </header>

          {/* Asymmetric Core: Left Text, Right Large Organic Subject */}
          <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext & Status */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#967bb6] mb-3">
                01. Space
              </span>
              <h1 className="font-serif font-light text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.14em] text-[#0e1015] lowercase leading-none">
                phii
              </h1>
              <div className="w-8 h-[1px] bg-neutral-300 my-6" />
              <p className="font-light text-xs sm:text-sm md:text-base tracking-[0.22em] text-[#5c5867] uppercase leading-relaxed max-w-md">
                creative space for expression and expression
              </p>
              <div className="mt-8 flex items-center gap-2 text-[11px] font-mono tracking-[0.28em] uppercase text-[#967bb6]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4a4ec] animate-pulse" />
                <span>coming soon</span>
              </div>
            </div>

            {/* Right Column: Phii Artwork with Soft Lavender Aura */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end relative">
              {/* Ethereal lilac glow from image */}
              <div
                className="pointer-events-none absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-[90px] opacity-40 -z-10"
                style={{
                  background: 'radial-gradient(circle, #c4a4ec 0%, #dfd0f5 40%, transparent 70%)',
                  top: '20%',
                }}
              />
              <img
                src="/phii.png"
                alt="phii artwork"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-contain transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Bottom Folio Footer */}
          <footer className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
            <span className="opacity-50">wabi-sabi · 侘寂</span>
            <span className="opacity-50">pure expression</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
