export default function Vision() {
  const pillars = [
    {
      number: '01',
      title: 'Created for the People',
      body: 'Our intelligent systems are created to power and improve the lives of people.',
    },
    {
      number: '02',
      title: 'Institutional Quality',
      body: "Our technology delivers performance to the people at an institutional standard.",
    },
    {
      number: '03',
      title: 'Enhancement of the People',
      body: 'Our technology is created to enhance the people, not replace them.',
    },
  ]

  return (
    <section id="vision" className="py-32 px-6 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-ember-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-ember-400 text-xs font-display font-600 tracking-widest uppercase mb-3">VISION</p>
          <h2 className="font-display font-800 text-white text-4xl md:text-5xl leading-tight mb-6">
            For the People.<br />
            <span className="text-ember-400">Not just for institutions.</span>
          </h2>
          <p className="font-body font-300 text-mist text-base md:text-lg leading-relaxed">
            Eldia Enterprises is built on a simple belief: the technology we create adds value and solves real problems that improve the lives of people.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="bg-steel p-8 md:p-10 group hover:bg-white/5 transition-colors duration-300">
              <span className="font-display font-800 text-ember-400/30 text-4xl mb-6 block group-hover:text-ember-400/60 transition-colors duration-300">
                {pillar.number}
              </span>
              <h3 className="font-display font-700 text-white text-xl mb-3">{pillar.title}</h3>
              <p className="font-body font-300 text-mist text-sm leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div className="mt-16 rounded-2xl border border-ember-500/20 bg-ember-500/5 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,107,53,0.3) 0%, transparent 70%)`
            }}
          />
          <p className="relative font-display font-700 text-white text-xl md:text-3xl leading-tight max-w-3xl mx-auto">
            "Building the next generation of intelligent systems — to help people break through their limitations one innovation at a time."
          </p>
          <p className="relative mt-4 font-body text-ember-400/70 text-sm">— Eldia Enterprises</p>
        </div>
      </div>
    </section>
  )
}
