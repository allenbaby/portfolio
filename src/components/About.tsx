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
                        toggleActions: 'play reverse play reverse',
                    }
                }
            )
        }
    }, [])

    return (
        <section id='about'
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-transparent"
        >
            <div className="max-w-2xl text-center">
                <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">About Me</h2>
                <p className="text-lg text-gray-600 dark:text-white">
                    I’m a Software Engineer with 3+ years of Industry experience building scalable web applications and AI-driven interfaces.
                    Expertise in JavaScript, React.js, Node.js, Next.js, Python, and cloud-based solutions. Proven track record of
                    reducing load times and improving deployment pipelines. Seeking SDE roles in agile environments focused on
                    performance and innovation.
                </p>
            </div>
        </section>
    )
}
