"use client"
import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return <button className="theme-toggle" onClick={toggleTheme} type="button" aria-label={theme === 'dark' ? 'Use bright terminal theme' : 'Use dim terminal theme'}>{theme === 'dark' ? 'Bright' : 'Dim'}</button>
}
