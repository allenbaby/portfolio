"use client"
import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const updateProgress = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${distance > 0 ? window.scrollY / distance : 0})`
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => { window.removeEventListener('scroll', updateProgress); window.removeEventListener('resize', updateProgress) }
  }, [])
  return <div className="scroll-progress" aria-hidden="true"><div ref={progressRef} /></div>
}
