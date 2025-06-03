'use client'

import { useTheme } from '@/context/ThemeContext'
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-400 dark:bg-gray-700 dark:opacity-75 transition"
      title={theme === 'dark' ? 'Toggle light mode' : 'Toggle dark mode'}
    >
      {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
    </button>
  )
}
