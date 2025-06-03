'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/utils/gsap'

export default function Projects() {
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
        <section
            id="projects"
            ref={sectionRef}
            className="min-h-screen py-20 bg-gray-50 px-6 dark:bg-transparent"
        >
            <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-12">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto dark:text-white">
                {[1, 2, 3].map((n) => (
                    <div
                        key={n}
                        className="bg-white dark:bg-gray-900 dark:text-white rounded-xl 
                        shadow-lg p-6 hover:shadow-xl transition"
                    >
                        <h3 className="text-xl text-black dark:text-white font-semibold mb-2">Project {n}</h3>
                        <p className="text-gray-600 dark:text-white">
                            Description of what the project does, what tools were used, and
                            why it’s cool.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
