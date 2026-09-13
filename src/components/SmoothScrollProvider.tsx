// components/SmoothScrollProvider.tsx
'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: isTouchDevice ? 0.4 : 1.1,
      smoothTouch: 0,
      effects: !isTouchDevice,
    });

    return () => smoother.kill();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">        
        {children}
      </div>
    </div>
  );
}
