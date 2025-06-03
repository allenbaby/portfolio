import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import ScrollProgress from '@/components/ScrollProgress';
import ThemeToggle from '@/components/ThemeToggle';
import LeftSidebar from '@/components/LeftSidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Allen Baby Portfolio',
  description: 'GSAP + Tailwind + Dark Mode Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='overflow-y-scroll hide-scrollbar dark'>
      <body className={inter.className}>
        <ThemeProvider>
          {/* Global background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="fixed top-0 left-0 w-full h-full object-cover z-[-1] opacity-60"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Optional: Overlay for readability */}
          <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-[-1]" />

          {/* Fixed top-right theme toggle */}
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>

          {/* Fixed vertical left sidebar */}
          <div className="fixed top-0 left-0 h-full w-16 z-40">
            <LeftSidebar />
          </div>

          {/* Scroll Progress bar on the right */}
          <ScrollProgress />

          {/* Smooth scrolling content area */}
          <SmoothScrollProvider>
            <div className="pl-16">
              {children}
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
