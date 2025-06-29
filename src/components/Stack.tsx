'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/utils/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

const techStacks = [{
    label: 'Frontend',
    data: [
        { name: 'JavaScript', icon: '/stack/javascript.svg' },
        { name: 'TypeScript', icon: '/stack/typescript.svg' },
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
    ]
},
{
    label: 'Database',
    data: [
        { name: 'MySQL', icon: '/stack/mysql.svg' },
        { name: 'PostgreSQL', icon: '/stack/postgressql.svg' },
        { name: 'MongoDB', icon: '/stack/mongodb.svg' },
        { name: 'Prisma', icon: '/stack/prisma.png' },
    ]
},
{
    label: 'Tools',
    data: [
        { name: 'Git', icon: '/stack/git.svg' },
        { name: 'Docker', icon: '/stack/docker.svg' },
        { name: 'AWS', icon: '/stack/aws.png' },
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

    const renderTechSection = (
        label: string,
        data: { name: string; icon: string }[],
        key: string
    ) => (
        <div key={key}>
            <h3 className="text-4xl font-extrabold text-black dark:text-gray-300 mb-6">{label}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {data.map((skill, i) => (
                    <div
                        key={`${skill.name}-${i}`}
                        ref={(el: HTMLDivElement | null) => {
                            if (el) itemRefs.current.push(el);
                        }}
                        className="flex items-center space-x-4 text-black bg-white/50 backdrop-blur p-4 rounded-lg shadow 
                        dark:bg-black/40 dark:text-white opacity-0 translate-y-8"
                    >
                        <Image src={skill.icon} alt={skill.name} width={32} height={32} />
                        <span className="text-lg font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );


    return (
        <section ref={sectionRef} className="min-h-screen py-20 px-6 
            bg-gradient-to-b from-blue-100 to-white 
            dark:bg-transparent dark:from-transparent dark:to-transparent">
            <div className="max-w-6xl mx-auto space-y-20">
                {techStacks.map((stack) => renderTechSection(stack.label, stack.data, stack.label))}
            </div>
        </section>
    );
}
