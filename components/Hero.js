export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-ember-500/10 rounded-full blur-[120px] animate-[glowPulse_4s_ease-in-out_infinite]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-ember-400/5 rounded-full blur-[80px]" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="animate-fade-up font-display font-800 text-white leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
          Powering<br />
          <span className="text-ember-400 ember-text-glow">People</span><br />
          with the Future of Intelligent Systems
        </h1>

        <p className="animate-fade-up delay-200 font-body font-300 text-mist text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Eldia Enterprises creates next-generation digital tools and platforms that solve real-world problems
        </p>

        <div className="animate-fade-up delay-300 flex items-center justify-center">
          <a href="#contact"
            className="px-8 py-3.5 bg-ember-500 hover:bg-ember-400 text-white font-display font-600 text-sm rounded-full transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] hover:-translate-y-0.5">
            Contact Us
          </a>
        </div>

        <div className="animate-fade-up delay-500 mt-16 flex items-center justify-center gap-3 flex-wrap">
          <span className="text-mist/50 text-xs font-body tracking-widest uppercase">Subsidiaries</span>
          <div className="h-px w-6 bg-white/10" />
          <span className="text-xs font-display text-white/40 border border-white/10 px-3 py-1 rounded-full">AiCheck</span>
          <span className="text-xs font-display text-white/40 border border-white/10 px-3 py-1 rounded-full">GroupLink</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[float_2s_ease-in-out_infinite]">
        <div className="w-px h-12 bg-gradient-to-b from-ember-400/0 via-ember-400/50 to-ember-400/0" />
      </div>
    </section>
  )
}