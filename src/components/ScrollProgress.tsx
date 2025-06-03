'use client';

import { useEffect, useRef } from 'react';
import ScrollSmoother from 'gsap/ScrollSmoother';

export default function ScrollProgress() {
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const smoother = ScrollSmoother.get();
        if (!smoother) return;

        const contentElement = document.getElementById('smooth-content');
        if (!contentElement) return;

        const updateProgress = () => {
            const scrollTop = smoother.scrollTop();
            const scrollHeight = contentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / scrollHeight) * 100;

            if (progressRef.current) {
                progressRef.current.style.height = `${progress}%`;
            }

            requestAnimationFrame(updateProgress);
        };

        requestAnimationFrame(updateProgress);
    }, []);

    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 h-[20vh] w-2 
        dark:bg-white/10 bg-black/10
        rounded-full z-[9999] overflow-hidden pointer-events-none">
            <div
                ref={progressRef}
                className="bg-blue-500 w-full transition-all duration-75"
                style={{ height: '0%' }}
            />
        </div>
    );
}
