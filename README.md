# Eldia Enterprises Website

A polished, production-ready Next.js website for Eldia Enterprises, featuring AiCheck and GroupLink.

## 🚀 Getting Started in VS Code

### 1. Prerequisites
Make sure you have **Node.js** installed (v18+).  
Download it at: https://nodejs.org

### 2. Open the project
```bash
# In VS Code, open the terminal (Ctrl + ` or Cmd + `)
cd eldia-enterprises
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run the dev server
```bash
npm run dev
```

Then open **http://localhost:3000** in your browser. 🎉

---

## 📁 Project Structure

```
eldia-enterprises/
├── app/
│   ├── layout.js       # Root layout + fonts
│   ├── page.js         # Main page (assembles all sections)
│   └── globals.css     # Global styles + animations
├── components/
│   ├── Navbar.js       # Sticky navigation with mobile menu
│   ├── Hero.js         # Full-screen hero section
│   ├── Products.js     # AiCheck + GroupLink cards
│   ├── Vision.js       # Company philosophy & mission
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## ✏️ Customizing Content

| What to change | Where |
|---|---|
| Company tagline | `components/Hero.js` |
| Product descriptions | `components/Products.js` |
| Mission statement | `components/Vision.js` |
| Contact form action | `components/Contact.js` (replace setTimeout with real API) |
| Colors | `tailwind.config.js` → `colors` |
| Fonts | `app/layout.js` |

---

## 🌐 Deploying for Free (Vercel)

1. Push this folder to a GitHub repo
2. Go to **https://vercel.com** → New Project
3. Import your repo → Deploy

That's it. Your site is live at a free `.vercel.app` URL. You can also connect a custom domain.

---

## 📬 Hooking Up the Contact Form

In `components/Contact.js`, replace the `setTimeout` mock with a real service:

**Option A — Formspree (easiest, free):**
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: new FormData(e.target),
})
```

**Option B — Resend (developer-friendly):**
Create an API route at `app/api/contact/route.js` and use the Resend SDK.

---

## 🎨 Design System

| Token | Value |
|---|---|
| `ember-400` | `#FF6B35` (orange spark — main accent) |
| `ember-500` | `#E8531F` (CTA buttons) |
| `obsidian` | `#0A0A0B` (page background) |
| `steel` | `#111114` (card backgrounds) |
| `mist` | `#9A9AAF` (body text) |
| Display font | Syne (headings) |
| Body font | DM Sans (paragraphs) |
