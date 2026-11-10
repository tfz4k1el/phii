export default function App() {
  return (
    <main className="min-h-screen w-full bg-white text-[#0e1015] relative select-none overflow-x-hidden flex items-center justify-center px-6 py-12 sm:px-12 md:px-16 lg:px-20">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Heading, Subtext & Status */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#967bb6] mb-3">
            01 Space
          </span>
          <h1 className="font-serif font-light text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.14em] text-[#0e1015] lowercase leading-none">
            phii
          </h1>
          <div className="w-8 h-[1px] bg-neutral-300 my-6" />
          <p className="font-light text-xs sm:text-sm md:text-base tracking-[0.22em] text-[#5c5867] uppercase leading-relaxed max-w-md">
            creative space for expression and expression only
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
            width="420"
            height="420"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-contain transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </main>
  );
}
