export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/eldia-logo.png"
            alt="Eldia"
            className="w-6 h-6 object-contain"
            style={{ mixBlendMode: 'lighten' }}
          />
          <span className="font-display font-700 text-white/60 text-sm">ELDIA ENTERPRISES</span>
        </div>

        <p className="font-body text-xs text-white/20">
          © {new Date().getFullYear()} Eldia Enterprises. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {['AiCheck', 'GroupLink'].map(name => (
            <span key={name} className="font-body text-xs text-white/30 hover:text-white/60 transition-colors cursor-pointer">
              {name}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
