'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Replace this with your actual form submission (e.g. Resend, Formspree, etc.)
    setTimeout(() => setStatus('sent'), 1500)
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-ember-400 text-xs font-display font-600 tracking-widest uppercase mb-3">CONTACT</p>
        <h2 className="font-display font-800 text-white text-4xl md:text-5xl leading-tight mb-4">
          Let's build together
        </h2>
        <p className="font-body font-300 text-mist text-base leading-relaxed mb-12">
          If you are interested in partnering, investing, or learning more about our platforms, we'd love to hear from you.
        </p>

        {status === 'sent' ? (
          <div className="rounded-2xl border border-ember-500/20 bg-ember-500/10 p-10">
            <div className="text-4xl mb-4">✦</div>
            <p className="font-display font-700 text-white text-xl mb-2">Message Received</p>
            <p className="font-body text-mist text-sm">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-body text-xs text-mist mb-2 tracking-wider uppercase">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-steel border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm font-body placeholder-white/20 focus:outline-none focus:border-ember-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block font-body text-xs text-mist mb-2 tracking-wider uppercase">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full bg-steel border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm font-body placeholder-white/20 focus:outline-none focus:border-ember-500/50 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block font-body text-xs text-mist mb-2 tracking-wider uppercase">Subject</label>
              <input
                type="text"
                placeholder="Partnership, Investment, General Inquiry..."
                className="w-full bg-steel border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm font-body placeholder-white/20 focus:outline-none focus:border-ember-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="block font-body text-xs text-mist mb-2 tracking-wider uppercase">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your interest..."
                className="w-full bg-steel border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm font-body placeholder-white/20 focus:outline-none focus:border-ember-500/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 bg-ember-500 hover:bg-ember-400 disabled:opacity-60 text-white font-display font-600 text-sm rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:-translate-y-0.5"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
