'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/utils/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

const techStacks = [{
    label: 'Frontend',
    data: [
        { name: 'JavaScript', icon: '/svg/javascript.svg' },
        { name: 'TypeScript', icon: '/svg/typescript.svg' },
        { name: 'React', icon: '/svg/react.svg' },
        { name: 'Next.js', icon: '/svg/nextjs.jpeg' },
        { name: 'Redux', icon: '/svg/redux.svg' },
        { name: 'Tailwind CSS', icon: '/svg/wind.svg' },
        { name: 'GSAP', icon: '/svg/gsap.gif' },
        { name: 'Framer Motion', icon: '/svg/framer.png' },
        { name: 'SASS', icon: '/svg/Sass.svg' },
        { name: 'Bootstrap', icon: '/svg/bootstrap.svg' },
    ]
},
{
    label: 'Backend',
    data: [
        { name: 'Node.js', icon: '/svg/nodejs.svg' },
        { name: 'Express.js', icon: '/svg/expressjs.svg' },
    ]
},
{
    label: 'Database',
    data: [
        { name: 'MySQL', icon: '/svg/mysql.svg' },
        { name: 'PostgreSQL', icon: '/svg/PostgresSQL.svg' },
        { name: 'MongoDB', icon: '/svg/mongodb.svg' },
        { name: 'Prisma', icon: '/svg/prisma.png' },
    ]
},
{
    label: 'Tools',
    data: [
        { name: 'Git', icon: '/svg/Git.svg' },
        { name: 'Docker', icon: '/svg/docker.svg' },
        { name: 'AWS', icon: '/svg/AWS.png' },
    ]
}
];

const techStacksArray = [techStacks]

export default function TechStack() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        itemRefs.current.forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top 85%',
                end: 'top 60%',
                scrub: false,
                onEnter: () => {
                    gsap.to(el, {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: 'power2.out',
                    });
                },
                onLeaveBack: () => {
                    gsap.to(el, {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                    });
                },
            });
        });
    }, []);

    const renderTechSection = (label: string, stack: { name: string; icon: string }[]) => (
        <div>
            <h3 className="text-4xl font-extrabold text-gray-300 mb-6">{label}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {stack.map((skill, i) => (
                    <div
                        key={skill.name}
                        ref={(el: HTMLDivElement | null) => {
                            if (el) itemRefs.current.push(el);
                        }}
                        className="flex items-center space-x-4 bg-white/10 backdrop-blur p-4 rounded-lg shadow dark:bg-black/40 opacity-0 translate-y-8"
                    >
                        <Image src={skill.icon} alt={skill.name} width={32} height={32} />
                        <span className="text-lg text-white font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section ref={sectionRef} className="min-h-screen py-20 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto space-y-20">
                {techStacks.map((stack, i) => renderTechSection(stack.label, stack.data))}
            </div>
        </section>
    );
}
