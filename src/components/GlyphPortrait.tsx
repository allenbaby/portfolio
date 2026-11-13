"use client"
import { useEffect, useRef } from 'react'

const fallback = `
        allen             babybabybaby
       allenal            babybabybabyba
      allenalle           baby       baby
     allen allen          baby       baby
    allen   allen         babybabybabyba
   allen     allen        babybabybabyba
  allenallenallenal       baby       baby
 allen         allen      baby       baby
allen           allen     babybabybabyba
allen           allen     babybabybaby
`

export default function GlyphPortrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hostRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const host = hostRef.current
    if (!canvas || !host) return
    let disposed = false
    let paint: ((x?: number, y?: number) => void) | undefined
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const render = () => {
      const context = canvas.getContext('2d')
      if (!context) return
      const style = getComputedStyle(host)
      const family = style.fontFamily
      const source = document.createElement('canvas')
      source.width = 520; source.height = 520
      const sample = source.getContext('2d', { willReadFrequently: true })
      if (!sample) return
      sample.font = `700 410px ${family}`
      sample.textAlign = 'center'
      sample.textBaseline = 'middle'
      sample.fillStyle = style.getPropertyValue('--glyph-7').trim()
      sample.fillText('ab', 260, 246, 510)
      const cols = 92, rows = 50
      const pixels = sample.getImageData(0, 0, 520, 520).data
      const width = host.clientWidth, height = host.clientHeight
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * ratio; canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const cellWidth = width / cols, cellHeight = height / rows
      const colors = Array.from({ length: 8 }, (_, i) => style.getPropertyValue(`--glyph-${i}`).trim())
      const words = 'allenbabysoftwareengineer'
      paint = (x = -1000, y = -1000) => {
        context.clearRect(0, 0, width, height)
        context.textAlign = 'center'; context.textBaseline = 'middle'
        let glyph = 0
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const sx = Math.floor((col + 0.5) / cols * 520)
            const sy = Math.floor((row + 0.5) / rows * 520)
            const alpha = pixels[(sy * 520 + sx) * 4 + 3]
            if (alpha < 60) continue
            const px = (col + 0.5) * cellWidth, py = (row + 0.5) * cellHeight
            const texture = (Math.sin(col * 0.41 + row * 0.23) + Math.cos(row * 0.19)) / 4 + 0.5
            const hover = !reduced.matches && Math.hypot(px - x, py - y) < 72
            const level = hover ? 7 : Math.min(6, Math.floor(texture * 6) + 1)
            context.font = `400 ${cellWidth * (level < 3 ? 0.84 : 1.12)}px ${family}`
            context.fillStyle = colors[level]
            context.fillText(words[glyph++ % words.length], px, py)
          }
        }
      }
      paint()
      host.dataset.ready = 'true'
    }
    const resize = new ResizeObserver(() => render())
    resize.observe(host)
    const theme = new MutationObserver(() => render())
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    document.fonts.ready.then(() => { if (!disposed) render() })
    const move = (event: PointerEvent) => { const rect = host.getBoundingClientRect(); paint?.(event.clientX - rect.left, event.clientY - rect.top) }
    const leave = () => paint?.()
    host.addEventListener('pointermove', move)
    host.addEventListener('pointerleave', leave)
    return () => { disposed = true; resize.disconnect(); theme.disconnect(); host.removeEventListener('pointermove', move); host.removeEventListener('pointerleave', leave) }
  }, [])
  return <div ref={hostRef} className="glyph-portrait" aria-hidden="true"><pre>{fallback}</pre><canvas ref={canvasRef} /></div>
}
