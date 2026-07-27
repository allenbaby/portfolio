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
    href: "https://drive.google.com/file/d/1GeezdB0bzzJ4ladhxLqHBTOlYCmHzoV-/view?usp=sharing",
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
    <aside className="flex fixed z-50 bg-white dark:bg-black border-t md:border-r border-gray-200 dark:border-gray-800 w-full h-16 bottom-0 md:top-0 md:left-0 md:w-16 md:h-screen flex-row md:flex-col items-center justify-center px-4 md:px-0 md:py-8">
      {/* Icons */}
      <div className="flex gap-6 flex-row md:flex-col justify-around md:justify-center items-center w-full">
        {socials.map((social, i) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            ref={(el) => setRef(el, i)}
            className="
            group relative
            text-gray-600 dark:text-gray-300
            hover:text-blue-600 dark:hover:text-blue-400
            transition text-2xl
        "
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
