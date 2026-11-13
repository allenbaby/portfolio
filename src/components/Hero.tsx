"use client"
import GlyphPortrait from './GlyphPortrait'

export default function Hero() {
  const handleScrollToProjects = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    window.history.replaceState(null, '', '#projects')
  }
  return (
    <section className="hero container" aria-labelledby="hero-name">
      <div className="intro-copy">
        <h1 id="hero-name">Allen Baby.<br />Software engineer.</h1>
        <p>Secure web applications, from interface to infrastructure.</p>
        <div className="hero-actions">
          <a className="button" href="#projects" onClick={handleScrollToProjects}>View projects</a>
          <a className="text-link" href="#about">More about me</a>
        </div>
      </div>
      <GlyphPortrait />
    </section>
  )
}
