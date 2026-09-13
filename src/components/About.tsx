'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/utils/gsap'

export default function About() {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        once: true,
                    }
                }
            )
        }
    }, [])

    return (
        <section id='about'
            ref={sectionRef}
            className="section-shell min-h-screen flex items-center justify-center px-6 py-24"
        >
            <div className="glass-panel max-w-4xl rounded-[2rem] p-8 text-left sm:p-14">
                <p className="eyebrow mb-5">01 / The short version</p>
                <h2 className="mb-7 text-4xl font-black tracking-tight text-white sm:text-6xl">Engineering with a point of view.</h2>
                <p className="max-w-2xl text-lg leading-8 text-[var(--ink-muted)] sm:text-xl">
                    I’m a Software Engineer with 4+ years of industry experience building scalable web applications and AI-driven interfaces.
                    I specialize in secure authentication and authorization, including JWT-based auth and role-based access control.
                    I also build and maintain cloud CI/CD deployments, with a focus on reliable releases, performance, and developer experience.
                    My toolkit includes JavaScript, React.js, Node.js, Next.js, Python, and cloud-based solutions.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-white/80">
                    <span className="rounded-full border border-white/15 px-4 py-2">4+ years shipping</span>
                    <span className="rounded-full border border-white/15 px-4 py-2">JWT + RBAC</span>
                    <span className="rounded-full border border-white/15 px-4 py-2">Cloud CI/CD</span>
                </div>
            </div>
        </section>
    )
}
