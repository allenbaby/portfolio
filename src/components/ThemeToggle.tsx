'use client'

import { useTheme } from '@/context/ThemeContext'
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={theme === 'dark' ? 'Toggle light mode' : 'Toggle dark mode'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/10 text-lg text-gray-700 shadow-sm backdrop-blur-md transition hover:scale-105 hover:bg-black/15 dark:border-white/10 dark:bg-white/10 dark:text-gray-100 dark:hover:bg-white/15"
      title={theme === 'dark' ? 'Toggle light mode' : 'Toggle dark mode'}
    >
      {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
    </button>
  )
}
