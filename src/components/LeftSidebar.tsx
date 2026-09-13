"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/utils/gsap";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/allenbaby",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/allenbaby",
    icon: <FaLinkedin />,
  },
  // {
  //     label: 'Twitter',
  //     href: 'https://twitter.com/yourusername',
  //     icon: <FaTwitter />,
  // },
  {
    label: "Email",
    href: "mailto:allen.baby10@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/187ufdt48Gq9gSaM6MWBBQeb_3VL2B_kV/view?usp=sharing",
    icon: <FaDownload />,
  },
];

export default function LeftSidebar() {
  const iconRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const setRef = (el: HTMLAnchorElement | null, index: number) => {
    iconRefs.current[index] = el;
  };

  useLayoutEffect(() => {
    // Wait until next frame to ensure all refs are set
    requestAnimationFrame(() => {
      const elements = iconRefs.current.filter(Boolean);
      if (elements.length > 0) {
        gsap.from(elements, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          // stagger: elements.length > 1 ? 0.15 : 0,
          ease: "power2.out",
        });
      }
    });
  }, []);

  return (
    <aside className="fixed bottom-0 left-0 z-50 flex h-[4.5rem] w-full flex-row items-center justify-center border-t border-white/10 bg-[#070812]/90 px-2 backdrop-blur-xl md:left-0 md:top-0 md:h-screen md:w-16 md:flex-col md:border-r md:border-t-0 md:bg-black/70 md:px-0 md:py-8">
      {/* Icons */}
      <div className="flex w-full max-w-sm flex-row items-center justify-evenly md:flex-col md:justify-center md:gap-6">
        {socials.map((social, i) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            ref={(el) => setRef(el, i)}
            className="group relative flex h-12 w-12 items-center justify-center text-2xl text-gray-300 transition hover:-translate-y-1 hover:text-[var(--acid)]"
          >
            {social.icon}

            <span
              className="
                pointer-events-none absolute z-50
                whitespace-nowrap rounded-md
                bg-gray-900 px-2 py-1
                text-xs font-medium text-white
                opacity-0 transition-all duration-200
                group-hover:opacity-100

                bottom-full left-1/2 mb-3
                -translate-x-1/2 translate-y-1
                group-hover:translate-y-0

                md:bottom-auto md:left-full md:top-1/2
                md:ml-3 md:mb-0
                md:-translate-x-1 md:-translate-y-1/2
                md:group-hover:translate-x-0
            "
            >
              {social.label}
            </span>
          </a>
        ))}
      </div>

      {/* Email (Desktop only) */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <a
          href="mailto:ababy1@toromail.csudh.edu"
          className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          ababy1@toromail.csudh.edu
        </a>
      </div>
    </aside>
  );
}
