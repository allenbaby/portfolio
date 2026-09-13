'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/utils/gsap'

const education = [
    {
        school: 'California State University, Dominguez Hills',
        degree: 'Master of Science in Computer Science',
        period: 'January 2025 - December 2026 (Expected)',
        location: 'Los Angeles, California',
    },
    {
        school: 'College of Engineering Trivandrum',
        degree: 'Bachelor of Technology in Electronics and Communication Engineering',
        period: 'August 2017 - August 2021',
        location: 'Trivandrum, India',
    },
]

export default function Education() {
    const sectionRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const context = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 32 },
                { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', once: true } }
            )
        }, sectionRef.current)

        return () => context.revert()
    }, [])

    return (
        <section ref={sectionRef} className="section-shell px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <p className="eyebrow mb-4">05 / Education</p>
                <h2 className="mb-12 text-5xl font-black tracking-tight text-white sm:text-7xl">Still learning<span className="text-[var(--acid)]">.</span></h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {education.map((item) => (
                        <article key={item.school} className="glass-panel rounded-[1.5rem] p-7 sm:p-9">
                            <p className="mb-5 text-sm text-[var(--ink-muted)]">{item.period}</p>
                            <h3 className="text-2xl font-bold text-white">{item.school}</h3>
                            <p className="mt-2 text-[var(--acid)]">{item.degree}</p>
                            <p className="mt-6 text-sm text-[var(--ink-muted)]">{item.location}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
