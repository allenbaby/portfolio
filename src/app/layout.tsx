import './globals.css'
import type { Metadata } from 'next'
import { Martian_Mono } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import ScrollProgress from '@/components/ScrollProgress'
import LeftSidebar from '@/components/LeftSidebar'

const terminal = Martian_Mono({ subsets: ['latin'], variable: '--font-martian', display: 'swap', axes: ['wdth'] })

export const metadata: Metadata = {
  title: 'Allen Baby | Software Engineer',
  description: 'Allen Baby, software engineer. Selected projects, full-stack engineering experience, and contact.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={terminal.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#main">Skip to content</a>
          <LeftSidebar />
          <ScrollProgress />
          <SmoothScrollProvider>
            <main id="main">{children}</main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
