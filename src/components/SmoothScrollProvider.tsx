// components/SmoothScrollProvider.tsx
'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">        
        {children}
      </div>
    </div>
  );
}
