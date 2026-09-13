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
                if (window.matchMedia('(max-width: 767px)').matches) {
                    progressRef.current.style.width = `${progress}%`;
                    progressRef.current.style.height = '100%';
                } else {
                    progressRef.current.style.height = `${progress}%`;
                    progressRef.current.style.width = '100%';
                }
            }

            requestAnimationFrame(updateProgress);
        };

        requestAnimationFrame(updateProgress);
    }, []);

    return (
        <div className="fixed bottom-[4.5rem] left-0 z-[9999] h-1 w-full overflow-hidden rounded-full bg-black/10 pointer-events-none dark:bg-white/10 md:bottom-auto md:left-auto md:right-4 md:top-1/2 md:h-[20vh] md:w-2 md:-translate-y-1/2">
            <div
                ref={progressRef}
                className="h-full w-0 bg-[var(--acid)] transition-all duration-75 md:h-0 md:w-full"
                style={{ width: '0%', height: '0%' }}
            />
        </div>
    );
}
