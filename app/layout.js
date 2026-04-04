import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
})

export const metadata = {
  title: 'Eldia Enterprises — Building Tomorrow\'s Platforms',
  description: 'Eldia Enterprises is a technology holding company behind AiCheck and GroupLink — intelligent platforms shaping the future of digital interaction.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
