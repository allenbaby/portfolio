import ThemeToggle from './ThemeToggle'

const socials = [
  { label: 'GitHub', href: 'https://github.com/allenbaby' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/allenbaby' },
  { label: 'Email', href: 'mailto:allen.baby10@gmail.com' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1MlbhgNJ3xOWyKbX4SY0AQ4oDbdM0IKwc/view?usp=sharing' },
]

export default function LeftSidebar() {
  return (
    <header className="site-header container">
      <a className="wordmark" href="#main" aria-label="Allen Baby, home">Allen Baby</a>
      <nav aria-label="Main navigation">
        <a href="#projects">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-tools">
        <details className="links-menu">
          <summary>Links</summary>
          <div className="links-menu-panel">
            {socials.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">{social.label}</a>)}
            <a href="mailto:ababy1@toromail.csudh.edu">ababy1@toromail.csudh.edu</a>
          </div>
        </details>
        <ThemeToggle />
      </div>
    </header>
  )
}
