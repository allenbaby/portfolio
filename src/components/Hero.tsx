'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/utils/gsap'
import ScrollSmoother from 'gsap/ScrollSmoother'

export default function Hero() {
    const heroRef = useRef<HTMLDivElement | null>(null)

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
                        toggleActions: 'play none none reverse',
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
            className="
                min-h-screen flex flex-col items-center justify-center text-center px-6
                bg-white from-blue-100 to-white bg-gradient-to-b
                dark:bg-transparent dark:bg-none dark:from-transparent dark:to-transparent"
        >
            <h1 className="text-5xl font-extrabold mb-4 text-black dark:text-white">
                Hi, I'm Allen Baby
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl dark:text-white">
                I build fast, beautiful web experiences with code and creativity.
            </p>
            <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-block px-6 py-3 bg-blue-600 text-white 
                dark:text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
            >
                View Projects
            </a>
        </section>
    )
}
