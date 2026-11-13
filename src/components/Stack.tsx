const techStacks = [{'label': 'Frontend', 'data': ['JavaScript', 'TypeScript', 'Python', 'HTML / CSS', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'SASS', 'Bootstrap']}, {'label': 'Backend', 'data': ['Node.js', 'Express.js', 'Java', 'REST APIs', 'WebSockets', 'Authentication', 'RBAC']}, {'label': 'Database', 'data': ['MySQL', 'PostgreSQL', 'MongoDB', 'Prisma', 'Redis']}, {'label': 'Tools', 'data': ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Playwright']}]

export default function TechStack() {
    return (
        <section id="stack" className="section stack-section">
            <div className="container stack-layout">
                <h2>Toolkit</h2>
                <dl className="stack-list">
                    {techStacks.map(stack => <div key={stack.label}><dt>{stack.label}</dt><dd>{stack.data.map(name => <span key={name}>{name}</span>)}</dd></div>)}
                </dl>
            </div>
        </section>
    )
}
