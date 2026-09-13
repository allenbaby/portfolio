'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Stack from '@/components/Stack'
import Education from '@/components/Education'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Stack />
      <Projects />
      <Education />
      <Contact />
    </>
  )
}
