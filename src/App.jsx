import React, { useState } from 'react';

export default function App() {
  // 1: Editorial Asymmetric (Image 1)
  // 2: Zen Balance (Image 2)
  // 3: Exhibition Poster (Image 3)
  const [layout, setLayout] = useState('1');

  return (
    <div className="min-h-screen w-full bg-white text-[#0e1015] relative select-none overflow-x-hidden">
      {/* ------------------------------------------------------------------ */}
      {/* LAYOUT 1: Editorial Asymmetric (Inspired by Image 1 - Plura Slides) */}
      {/* ------------------------------------------------------------------ */}
      {layout === '1' && (
        <main className="min-h-screen w-full p-4 sm:p-8 md:p-12 flex flex-col justify-between">
          {/* Outer Hairline Border Frame (from Image 1 slide style) */}
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
              {/* Left Column: Heading & Subtext */}
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

              {/* Right Column: Perfectly Placed Phii Artwork with Soft Lavender Aura */}
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
      )}

      {/* ------------------------------------------------------------------ */}
      {/* LAYOUT 2: Zen Balance (Inspired by Image 2 - Wabi Sabi Stones)      */}
      {/* ------------------------------------------------------------------ */}
      {layout === '2' && (
        <main className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative">
          {/* Organic flowing curved brushstroke ribbon in background (like Image 2) */}
          <svg
            className="pointer-events-none absolute h-full w-full max-w-xl -z-10 opacity-15"
            viewBox="0 0 400 800"
            fill="none"
          >
            <path
              d="M180 -50 C 260 200, 80 400, 220 600 C 300 720, 200 850, 160 900"
              stroke="#0e1015"
              strokeWidth="56"
              strokeLinecap="round"
            />
          </svg>

          {/* Gentle lavender mist blur */}
          <div
            className="pointer-events-none absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-35 -z-10"
            style={{
              background: 'radial-gradient(circle, #c4a4ec 0%, #e8ddf8 50%, transparent 75%)',
              top: 'calc(50% - 130px)',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          {/* Central Balanced Composition */}
          <div className="flex flex-col items-center justify-center text-center max-w-3xl w-full">
            {/* The Image - Anchoring the center like the stacked stones */}
            <div className="relative mb-6">
              <img
                src="/phii.png"
                alt="phii artwork"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain block mx-auto transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Typography balanced with exquisite kerning (WABI · SABI style) */}
            <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.32em] text-[#0e1015] lowercase ml-3 sm:ml-4">
              phii
            </h1>

            <div className="w-12 h-[1px] bg-neutral-300 my-4" />

            <p className="font-light text-xs sm:text-sm md:text-base tracking-[0.28em] text-[#6b6777] uppercase max-w-md leading-relaxed">
              creative space for expression and expression
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-[#967bb6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a4ec] animate-pulse" />
              <span>coming soon</span>
            </div>
          </div>
        </main>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* LAYOUT 3: Japanese Poster (Inspired by Image 3 - Woodblock Print)   */}
      {/* ------------------------------------------------------------------ */}
      {layout === '3' && (
        <main className="min-h-screen w-full p-6 sm:p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
          {/* Left Vertical Japanese Stamp (from Image 3) */}
          <div className="absolute top-10 left-6 sm:left-12 flex flex-col items-center gap-3">
            <span className="font-serif text-lg sm:text-xl text-[#0e1015] tracking-[0.3em] writing-vertical opacity-85">
              わびさび
            </span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#c4a4ec] shadow-sm" />
          </div>

          {/* Main Stage */}
          <div className="my-auto pl-12 sm:pl-20 md:pl-28 max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text Block */}
            <div className="lg:col-span-6 z-10">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#967bb6] block mb-2">
                侘 · 寂
              </span>
              <h1 className="font-serif font-light text-6xl sm:text-7xl md:text-8xl tracking-[0.16em] text-[#0e1015] lowercase">
                phii
              </h1>
              <p className="mt-4 font-light text-xs sm:text-sm md:text-base tracking-[0.22em] text-[#555260] leading-relaxed max-w-sm lowercase">
                creative space for expression and expression
              </p>
              <div className="mt-8 flex items-center gap-2 text-[11px] font-mono tracking-[0.28em] uppercase text-[#967bb6]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4a4ec] animate-pulse" />
                <span>coming soon</span>
              </div>
            </div>

            {/* Art bleed (inspired by the woodcut contour in Image 3) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <div
                className="pointer-events-none absolute w-72 h-72 rounded-full blur-[80px] opacity-40 -z-10"
                style={{
                  background: 'radial-gradient(circle, #c4a4ec 0%, transparent 70%)',
                  top: '10%',
                }}
              />
              <img
                src="/phii.png"
                alt="phii artwork"
                className="w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] object-contain transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Minimal Bottom coordinate */}
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
            phii · creative space
          </div>
        </main>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Subtle In-Page Inspiration Switcher (01 Editorial, 02 Zen, 03 Poster) */}
      {/* ------------------------------------------------------------------ */}
      <nav
        aria-label="Design Inspiration Layout Switcher"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/80 shadow-xs text-[10px] font-mono"
      >
        <span className="px-2 text-neutral-400 uppercase tracking-widest hidden sm:inline">
          Inspiration:
        </span>
        {[
          { id: '1', label: '01 Editorial' },
          { id: '2', label: '02 Zen Balance' },
          { id: '3', label: '03 Exhibition' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setLayout(tab.id)}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
              layout === tab.id
                ? 'bg-[#0e1015] text-white shadow-xs'
                : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
