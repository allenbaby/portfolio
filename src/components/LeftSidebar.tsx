'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/utils/gsap'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'


const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/allenbaby',
        icon: <FaGithub />,
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/allenbaby',
        icon: <FaLinkedin />,
    },
    // {
    //     label: 'Twitter',
    //     href: 'https://twitter.com/yourusername',
    //     icon: <FaTwitter />,
    // },
    {
        label: 'Email',
        href: 'mailto:allen.baby10@gmail.com',
        icon: <FaEnvelope />,
    },
]

export default function LeftSidebar() {
    const iconRefs = useRef<(HTMLAnchorElement | null)[]>([])

    const setRef = (el: HTMLAnchorElement | null, index: number) => {
        iconRefs.current[index] = el
    }

    useLayoutEffect(() => {
        // Wait until next frame to ensure all refs are set
        requestAnimationFrame(() => {
            const elements = iconRefs.current.filter(Boolean)
            if (elements.length > 0) {
                gsap.from(elements, {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    // stagger: elements.length > 1 ? 0.15 : 0,
                    ease: 'power2.out',
                })
            }
        })
    }, [])

    return (
        <aside className="hidden md:flex fixed top-0 left-0 h-screen w-16 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 flex-col items-center justify-between py-8 shadow-md z-50">
            {/* Social Icons at Top */}
            <div className="flex flex-col gap-6">
                {socials.map((social, i) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        ref={(el) => setRef(el, i)}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            {/* Email Centered at Bottom, Vertical */}
            <div className="flex-1 flex items-center justify-center">
                <a
                    href="mailto:ababy1@toromail.csudh.edu"
                    className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap
                    hover:text-blue-600 dark:hover:text-blue-400 transition"
                    style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        transform: 'rotate(180deg)',
                    }}
                >
                    ababy1@toromail.csudh.edu
                </a>
            </div>
        </aside>
    )
}


