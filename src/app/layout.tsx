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
  icons: {
    icon: "/portfolio.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-y-scroll hide-scrollbar dark">
      <body className={inter.className}>
        <ThemeProvider>
          {/* Background video and overlay */}
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
          <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-[-1]" />

          {/* Theme toggle */}
          <div className="fixed top-1 right-1" style={{ zIndex: 9999 }}>
            <ThemeToggle />
          </div>


          {/* Sidebar */}
          <LeftSidebar />

          {/* Scroll progress on the right with background */}
          <div className="fixed top-0 right-0 h-full w-10 z-50
                          bg-transparent md:bg-white dark:md:bg-black
                          border-l border-transparent md:border-gray-200 dark:md:border-gray-800
                        ">
            <ScrollProgress />
          </div>


          {/* Main content area with responsive padding */}
          <SmoothScrollProvider>
            <main className="
                              pt-0 pb-16      /* padding bottom for mobile sidebar */
                              md:pl-16        /* padding left for desktop sidebar */
                              md:pb-0         /* remove bottom padding on desktop */
                              mr-0 md:mr-8    /* no right margin on mobile, margin on desktop */
                            ">
              {children}
            </main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html >
  )
}
