'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/utils/gsap'

const roles = [
    {
        company: 'California State University',
        role: 'Software Developer',
        period: 'March 2025 - Present',
        location: 'Los Angeles, California',
        points: [
            <>Built a centralized <strong>student-services platform</strong> with searchable case histories, staff dashboards, permission-based workflows, REST APIs, and PostgreSQL persistence, reducing average case resolution time by <strong>approximately 35%</strong>.</>,
            <>Added <strong>Redis-backed session and data caching, query optimization, lazy loading, and frontend request deduplication</strong>, cutting repeated backend calls by <strong>over 50%</strong> and key page load times from <strong>3.8s to under 1.7s</strong>.</>,
        ],
    },
    {
        company: 'Fusion Practices',
        role: 'Software Engineer',
        period: 'February 2022 - January 2025',
        location: 'Mumbai, India',
        points: [
            <>Re-architected a high-traffic research management workflow across the frontend, API, and database layers, introducing <strong>Redis caching, PostgreSQL indexing, and request-level data reuse</strong> to reduce p95 response time from <strong>2.3s to 260ms</strong>.</>,
            <><strong>Owned full-stack development</strong> for GrantsNow using React and Node.js REST APIs, scaling to <strong>1,000+ university staff</strong> and <strong>£1M+</strong> in signed contract value.</>,
            <>Designed a resilient <strong>enterprise integration layer</strong> for research, finance, and HR data with background jobs, idempotent writes, retries, reconciliation, and administrator-facing status dashboards, cutting unresolved synchronization failures by <strong>more than 80%</strong>.</>,
            <>Overhauled delivery with <strong>Docker, automated integration tests, database migration checks, and CI/CD</strong>, reducing release validation from several hours to <strong>under 30 minutes</strong> with automated rollback paths.</>,
        ],
    },
]

export default function Experience() {
    const sectionRef = useRef<HTMLElement | null>(null)
    const roleRefs = useRef<(HTMLElement | null)[]>([])

    useEffect(() => {
        if (!sectionRef.current) return

        const context = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } }
            )

            roleRefs.current.forEach((role) => {
                if (!role) return

                gsap.fromTo(
                    role,
                    { y: 28, opacity: 0.72 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: role,
                            start: 'top 78%',
                            once: true,
                            onEnter: () => {
                                const isDark = document.documentElement.classList.contains('dark')
                                gsap.to(role, {
                                    borderColor: isDark ? 'rgba(214, 255, 75, 0.65)' : 'rgba(102, 88, 216, 0.58)',
                                    boxShadow: isDark
                                        ? '0 0 2rem rgba(214, 255, 75, 0.2), inset 0 0 2rem rgba(214, 255, 75, 0.04)'
                                        : '0 0 2rem rgba(102, 88, 216, 0.22), inset 0 0 2rem rgba(221, 93, 98, 0.08)',
                                    duration: 0.7,
                                    ease: 'power2.out',
                                })
                                gsap.to(sectionRef.current, {
                                    backgroundColor: isDark ? 'rgba(214, 255, 75, 0.025)' : 'rgba(102, 88, 216, 0.045)',
                                    duration: 0.7,
                                })
                            },
                        },
                    }
                )

            })
        }, sectionRef.current)

        return () => context.revert()
    }, [])

    return (
        <section ref={sectionRef} className="experience-section section-shell px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <p className="eyebrow mb-4">02 / Experience</p>
                <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <h2 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-7xl">Systems that hold up under pressure<span className="text-[var(--acid)]">.</span></h2>
                    <p className="max-w-xs text-sm leading-6 text-[var(--ink-muted)]">Four-plus years building secure, measurable products across education, research, and AI tooling.</p>
                </div>
                <div className="space-y-6">
                    {roles.map((role, index) => (
                        <article
                            key={role.company}
                            ref={(element) => { roleRefs.current[index] = element }}
                            className="experience-card glass-panel relative rounded-[1.5rem] p-7 transition-transform duration-300 hover:-translate-y-2 sm:p-9"
                        >
                            <div className="mb-7 flex flex-col justify-between gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{role.company}</h3>
                                    <p className="mt-1 text-[var(--acid)]">{role.role}</p>
                                </div>
                                <div className="text-left text-sm text-[var(--ink-muted)] sm:text-right">
                                    <p>{role.period}</p>
                                    <p>{role.location}</p>
                                </div>
                            </div>
                            <ul className="grid gap-4 text-sm leading-6 text-[var(--ink-muted)] sm:grid-cols-2">
                                {role.points.map((point, index) => <li key={index} className="border-l-2 border-[var(--acid)]/60 pl-4">{point}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
