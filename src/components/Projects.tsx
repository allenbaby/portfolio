'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/utils/gsap'

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    const projectsArray = [
        { id: 1, icon: '', title: 'GrantsNow', description: '• Engineered high-performance web applications by offloading CPU-intensive tasks toWebWorkers, improving page throughput and responsiveness by over 30%. • Engineered modular scraping pipelines in Python with multithreading and retry logic, capable of aggregating data from 50+ sites; new sources could be onboarded seamlessly by updating an Excel file with CSS selectors—no code changes required. • Integrated LLM-powered chat interface using OpenAI’s ChatGPT via Node.js middleware and Oracle Digital Assistant, streamlining user queries with intelligent, real-time responses.' },
        { id: 2, icon: '', title: 'LinkedIn Accelerator', description: '• Developed an application to scrape through LinkedIn and get the details of all Jobs and applicant details posted by the Company. • Reduced time-to-filter suitable candidates by over 30% for HR personnel by centralizing hiring data and eliminating manual search steps. • Enabled export of processed data to Excel and internal tools via REST API endpoints for seamless HR workflow integration.' },
        { id: 3, icon: '', title: 'CloudStream', description: '• Contributed to an open-source Android streaming app on GitHub with 10,000+ monthly active users. • Implementing a modular feature to control video streaming quality based on network type (Wi-Fi vs mobile data); PR was merged and deployed to production build apk.' },
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
                {projectsArray.map((arr) => (
                    <div
                        key={arr.id}
                        className="bg-white dark:bg-gray-900 dark:text-white rounded-xl 
                        shadow-lg p-6 hover:shadow-xl transition"
                    >
                        <div className="text-gray-600 dark:text-white">
                            <h3 className="text-xl font-bold text-white mb-2">{arr.title}</h3>
                            <ul className="list-disc pl-5 space-y-1 text-black dark:text-white">
                                {arr.description
                                    .split('•')
                                    .filter(Boolean)
                                    .map((point, index) => (
                                        <li key={index}>{point.trim()}</li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
