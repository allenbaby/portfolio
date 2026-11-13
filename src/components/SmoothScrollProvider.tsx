export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return <div id="smooth-wrapper"><div id="smooth-content">{children}</div></div>
}
