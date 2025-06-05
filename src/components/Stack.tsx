'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/utils/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

const techStacks = {
    frontend: [
        { name: 'JavaScript', icon: '/svg/javascript.svg' },
        { name: 'TypeScript', icon: '/svg/typescript.svg' },
        { name: 'React', icon: '/svg/react.svg' },
        { name: 'Next.js', icon: '/svg/nextjs.jpeg' },
        { name: 'Redux', icon: '/svg/redux.svg' },
        { name: 'Tailwind CSS', icon: '/svg/wind.svg' },
        { name: 'GSAP', icon: '/svg/gsap.gif' },
        { name: 'Framer Motion', icon: '/svg/framer.svg' },
        { name: 'SASS', icon: '/svg/Sass.svg' },
        { name: 'Bootstrap', icon: '/svg/bootstrap.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: '/svg/nodejs.svg' },
        { name: 'Nest.js', icon: '/svg/nestjs.svg' },
        { name: 'Express.js', icon: '/svg/expressjs.svg' },
    ],
    database: [
        { name: 'MySQL', icon: '/svg/mysql.svg' },
        { name: 'PostgreSQL', icon: '/svg/postgresql.svg' },
        { name: 'MongoDB', icon: '/svg/mongodb.svg' },
        { name: 'Prisma', icon: '/svg/prisma.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/svg/Git.svg' },
        { name: 'Docker', icon: '/svg/docker.svg' },
        { name: 'AWS', icon: '/svg/AWS.svg' },
    ],
};

export default function TechStack() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        itemRefs.current.forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top center',
                end: 'top center',
                scrub: true,
                onEnter: () => {
                    gsap.to(el, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' });
                },
                onLeaveBack: () => {
                    gsap.to(el, { y: 30, opacity: 0, duration: 0.6, ease: 'power2.out' });
                },
            });
        });
    }, []);

    const renderTechSection = (label: string, stack: { name: string; icon: string }[]) => (
        <div>
            <h3 className="text-4xl font-extrabold text-gray-300 mb-6">{label}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {stack.map((tech, i) => (
                    <div
                        key={tech.name}
                        ref={(el: HTMLDivElement | null) => {
                            if (el) itemRefs.current[i] = el;
                        }}
                        className="flex items-center space-x-4 bg-white/10 backdrop-blur p-4 rounded-lg shadow 
            dark:bg-black/40 opacity-0 translate-y-8"
                    >
                        <Image src={tech.icon} alt={tech.name} width={32} height={32} />
                        <span className="text-lg text-white font-medium">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section ref={sectionRef} className="min-h-screen py-20 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto space-y-20">
                {renderTechSection('FRONTEND', techStacks.frontend)}
                {renderTechSection('BACKEND', techStacks.backend)}
                {renderTechSection('DATABASE', techStacks.database)}
                {renderTechSection('TOOLS', techStacks.tools)}
            </div>
        </section>
    );
}
