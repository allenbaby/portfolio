'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/utils/gsap'
import ScrollSmoother from 'gsap/ScrollSmoother'

const headlineQuotes = [
    'I put fun in functions.',
    'Bugs fear my debugger.',
    'Deploy now. Panic later.',
    'Servers fear my confidence.',
    'Code first. Coffee second.',
    'Debugging, but make it fashion.',
    'Turning ideas into buttons.',
    'Fluent in APIs and sarcasm.',
    'Bugs judged. Zero harmed.',
    'I came. I saw. Refactored.',
    'Databases need love too.',
    'Commits with plot twists.',
    'Automate the boring stuff.',
    'Pixels follow instructions.',
    'Quick fixes become systems.',
    'The backend is online.',
    'Problems become pull requests.',
    'Shipping with confidence.',
    'CSS and I made peace.',
    'Computers do little jobs.',
]

export default function Hero() {
    const heroRef = useRef<HTMLDivElement | null>(null)
    const [headlineIndex, setHeadlineIndex] = useState(0)

    useEffect(() => {
        const interval = window.setInterval(() => {
            setHeadlineIndex((current) => (current + 1) % headlineQuotes.length)
        }, 3600)

        return () => window.clearInterval(interval)
    }, [])

    useEffect(() => {
        if (heroRef.current) {
            gsap.fromTo(
                heroRef.current,
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                }
            )
        }
    }, [])

    const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const target = document.querySelector('#projects')
        const smoother = ScrollSmoother.get()

        if (target && smoother) {
            smoother.scrollTo(target, true, 'power2.out')
        }
    }

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 pb-20 text-center md:pb-0"
        >
            <div className="glow-orb absolute -right-24 top-24 h-72 w-72 rounded-full bg-[var(--violet)]/30" />
            <div className="glow-orb absolute -left-32 bottom-12 h-80 w-80 rounded-full bg-[var(--coral)]/20" style={{ animationDelay: '-3s' }} />
            <div className="relative z-10 w-full max-w-[96rem]">
                <p className="eyebrow mb-6">Software engineer / full-stack builder</p>
                <h1 key={headlineQuotes[headlineIndex]} aria-live="polite" className={`hero-headline intro-swap mb-7 w-full px-2 text-6xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-8xl lg:text-[9rem] ${headlineQuotes[headlineIndex].length > 24 ? 'hero-headline-long' : ''}`}>
                    <span className="hero-gradient block bg-gradient-to-r from-[var(--acid)] via-white to-[var(--coral)] bg-clip-text text-transparent">{headlineQuotes[headlineIndex]}</span>
                </h1>
                <p className="mx-auto mb-10 max-w-xl text-base leading-7 text-[var(--ink-muted)] sm:text-lg">
                    I&apos;m Allen Baby, a software engineer with 4+ years of experience building secure, cloud-ready web experiences.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--acid-button)] px-7 py-4 font-bold text-[#070812] transition hover:-translate-y-1 hover:bg-white"
            >
                View selected work <span className="transition group-hover:translate-x-1">↗</span>
            </a>
                    <a href="#about" className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-white/60 hover:bg-white/10">More about me</a>
                </div>
            </div>
            <div className="relative z-10 mt-10 flex items-center gap-3 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.24em] text-white/40 lg:absolute lg:bottom-8 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2">
                <span className="h-px w-10 bg-white/30" /> Scroll to explore <span className="h-px w-10 bg-white/30" />
            </div>
        </section>
    )
}
