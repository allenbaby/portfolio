'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/utils/gsap'

export default function Contact() {
    const contactRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (contactRef.current) {
            gsap.fromTo(
                contactRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: contactRef.current,
                        start: 'top 80%',
                        toggleActions: 'play reverse play reverse',
                    }

                }
            )
        }
    }, [])

    return (
        <section
            id="contact"
            ref={contactRef}
            className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-transparent"
        >
            <div className="max-w-xl w-full ">
                <h2 className="text-4xl text-black dark:text-white font-bold text-center mb-8">Contact Me</h2>
                <form className="grid gap-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-4 border dark:bg-gray-900 dark:opacity-75 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-4 border dark:bg-gray-900 dark:opacity-75 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        rows={4}
                        placeholder="Your Message"
                        className="p-4 border dark:bg-gray-900 dark:opacity-75 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}
