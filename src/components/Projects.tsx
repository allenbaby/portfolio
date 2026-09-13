'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/utils/gsap'

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    const projectsArray = [
        {
            id: 2,
            link: 'https://repogenie.vercel.app/',
            github: 'https://github.com/allenbaby/repo-genie',
            title: 'Repo Genie - AI Codebase Generator',
            description: [<>Built an AI-assisted code generation system using <strong>Groq Qwen3.8-27B</strong> to convert natural-language prompts into structured, runnable applications.</>, <>Developed a multi-stage pipeline to parse model output into a virtual file system with dependency resolution, real-time editing, and <strong>live preview</strong> through Sandpack.</>, <>Integrated GitHub authentication and repository APIs to automatically create repositories and push complete generated codebases.</>],
        },
        {
            id: 3,
            link: 'https://playthat.vercel.app/',
            github: 'https://github.com/allenbaby/play-that',
            title: 'Headspace - Social Meditation Platform',
            description: [<>Built and deployed a full-stack application supporting authentication, guided audio content, favorites, streak tracking, social interactions, and persistent user data.</>, <>Engineered a timezone-aware streak algorithm using <strong>Luxon</strong> and transaction-safe database operations to enforce once-per-day completion and prevent duplicate writes.</>, <>Integrated <strong>Firebase Cloud Messaging</strong> for scheduled user notifications and reminder preferences.</>],
        },
        {
            id: 4,
            link: 'https://github.com/recloudstream/cloudstream/pull/391',
            title: 'CloudStream - Open-Source Android Application',
            description: [<>Developed a modular, network-aware video-quality control for a Kotlin Android application serving <strong>10,000+ monthly active users</strong>; the contribution passed review, was merged, and shipped to production.</>],
        },
    ]

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
        <section
            id="projects"
            ref={sectionRef}
            className="section-shell min-h-screen px-6 py-24"
        >
            <div className="mx-auto mb-12 flex max-w-6xl items-end justify-between gap-6">
                <div>
                    <p className="eyebrow mb-4">04 / Selected work</p>
                    <h2 className="text-5xl font-black tracking-tight text-white sm:text-7xl">Things I&apos;ve built.</h2>
                </div>
                <span className="hidden pb-2 text-right text-sm text-[var(--ink-muted)] sm:block">Click a project<br />to open it ↗</span>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto dark:text-white">
                {projectsArray.map((arr) => {
                    const hasLink = !!arr.link;

                    return (
                        <div
                            key={arr.id}
                            onClick={() => hasLink && window.open(arr.link, "_blank")}
                            className={`glass-panel group min-h-[19rem] rounded-[1.5rem] p-7 transition hover:-translate-y-2 hover:border-[var(--acid)]/60
                            ${hasLink && "cursor-pointer"}`}
                        >
                            <div>
                                <div className="mb-8 flex items-start justify-between gap-4">
                                    <h3 className="text-2xl font-bold">{arr.title}</h3>
                                    <div className="flex shrink-0 items-center gap-3">
                                        {arr.github && <a href={arr.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="text-xs font-bold text-[var(--ink-muted)] hover:text-[var(--acid)]">GitHub</a>}
                                        <span className="text-xl text-[var(--acid)] transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-sm leading-6 text-[var(--ink-muted)]">
                                    {arr.description.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
