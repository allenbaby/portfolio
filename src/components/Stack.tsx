'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { gsap } from '@/utils/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { FaExchangeAlt, FaJava, FaLock, FaServer, FaUsersCog, FaVial } from 'react-icons/fa';
import { SiGithubactions, SiHtml5, SiPython, SiRedis } from 'react-icons/si';

const techStacks = [{
    label: 'Frontend',
    data: [
        { name: 'JavaScript', icon: '/stack/javascript.svg' },
        { name: 'TypeScript', icon: '/stack/typescript.svg' },
        { name: 'Python', icon: <SiPython className="text-[#3776ab]" /> },
        { name: 'HTML / CSS', icon: <SiHtml5 className="text-[#e44d26]" /> },
        { name: 'React', icon: '/stack/react.svg' },
        { name: 'Next.js', icon: '/stack/nextjs.jpeg' },
        { name: 'Redux', icon: '/stack/redux.svg' },
        { name: 'Tailwind CSS', icon: '/stack/wind.svg' },
        { name: 'GSAP', icon: '/stack/gsap.gif' },
        { name: 'Framer Motion', icon: '/stack/framer.png' },
        { name: 'SASS', icon: '/stack/sass.svg' },
        { name: 'Bootstrap', icon: '/stack/bootstrap.svg' },
    ]
},
{
    label: 'Backend',
    data: [
        { name: 'Node.js', icon: '/stack/nodejs.svg' },
        { name: 'Express.js', icon: '/stack/expressjs.svg' },
        { name: 'Java', icon: <FaJava className="text-[#b07219]" /> },
        { name: 'REST APIs', icon: <FaServer className="text-[var(--coral)]" /> },
        { name: 'WebSockets', icon: <FaExchangeAlt className="text-[var(--violet)]" /> },
        { name: 'Authentication', icon: <FaLock className="text-[var(--acid)]" /> },
        { name: 'RBAC', icon: <FaUsersCog className="text-[var(--coral)]" /> },
    ]
},
{
    label: 'Database',
    data: [
        { name: 'MySQL', icon: '/stack/mysql.svg' },
        { name: 'PostgreSQL', icon: '/stack/postgressql.svg' },
        { name: 'MongoDB', icon: '/stack/mongodb.svg' },
        { name: 'Prisma', icon: '/stack/prisma.png' },
        { name: 'Redis', icon: <SiRedis className="text-[#d82c20]" /> },
    ]
},
{
    label: 'Tools',
    data: [
        { name: 'Git', icon: '/stack/git.svg' },
        { name: 'Docker', icon: '/stack/docker.svg' },
        { name: 'AWS', icon: '/stack/aws.png' },
        { name: 'GitHub Actions', icon: <SiGithubactions className="text-[#2088ff]" /> },
        { name: 'Playwright', icon: <FaVial className="text-[#2ead68]" /> },
    ]
}
];

export default function TechStack() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        itemRefs.current.forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top 85%',
                once: true,
                onEnter: () => {
                    gsap.to(el, {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: 'power2.out',
                    });
                },
            });
        });
    }, []);

    const renderTechSection = (
        label: string,
        data: { name: string; icon: string | ReactNode }[],
        key: string
    ) => (
        <div key={key}>
            <h3 className="mb-6 text-3xl font-black text-white sm:text-4xl">{label}<span className="text-[var(--acid)]">.</span></h3>
            <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
                {data.map((skill, i) => (
                    <div
                        key={`${skill.name}-${i}`}
                        ref={(el: HTMLDivElement | null) => {
                            if (el) itemRefs.current.push(el);
                        }}
                        className="skill-card glass-panel group flex min-w-0 items-center gap-4 rounded-2xl p-4 text-white opacity-0 translate-y-8 transition hover:-translate-y-1 hover:scale-[1.01] hover:border-[var(--acid)]/50"
                    >
                        {typeof skill.icon === 'string' ? (
                            <Image className="h-8 w-8 shrink-0 object-contain" src={skill.icon} alt={skill.name} width={32} height={32} unoptimized={skill.icon === '/stack/gsap.gif'} />
                        ) : (
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center text-2xl" aria-hidden="true">{skill.icon}</span>
                        )}
                        <span className="min-w-0 break-words text-base font-medium sm:text-lg">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );


    return (
        <section ref={sectionRef} className="section-shell min-h-screen px-6 py-24">
            <div className="max-w-6xl mx-auto space-y-20">
                <div>
                    <p className="eyebrow mb-4">03 / The toolkit</p>
                    <h2 className="text-5xl font-black tracking-tight text-white sm:text-7xl">My stack<span className="text-[var(--acid)]">.</span></h2>
                </div>
                {techStacks.map((stack) => renderTechSection(stack.label, stack.data, stack.label))}
            </div>
        </section>
    );
}
