const roles = [
    {
        company: 'California State University',
        role: 'Software Developer',
        period: 'March 2025 - Present',
        location: 'Los Angeles, California',
        points: [
            <>Built a centralized <strong>student-services platform</strong> with searchable case histories, staff dashboards, permission-based workflows, REST APIs, and PostgreSQL persistence, reducing average case resolution time by <strong>approximately 35%</strong>.</>,
            <>Added <strong>Redis-backed session and data caching, query optimization, lazy loading, and frontend request deduplication</strong>, cutting repeated backend calls by <strong>over 50%</strong> and key page load times from <strong>3.8s to under 1.7s</strong>.</>,
        ],
    },
    {
        company: 'Fusion Practices',
        role: 'Software Engineer',
        period: 'February 2022 - January 2025',
        location: 'Mumbai, India',
        points: [
            <>Re-architected a high-traffic research management workflow across the frontend, API, and database layers, introducing <strong>Redis caching, PostgreSQL indexing, and request-level data reuse</strong> to reduce p95 response time from <strong>2.3s to 260ms</strong>.</>,
            <><strong>Owned full-stack development</strong> for GrantsNow using React and Node.js REST APIs, scaling to <strong>1,000+ university staff</strong> and <strong>£1M+</strong> in signed contract value.</>,
            <>Designed a resilient <strong>enterprise integration layer</strong> for research, finance, and HR data with background jobs, idempotent writes, retries, reconciliation, and administrator-facing status dashboards, cutting unresolved synchronization failures by <strong>more than 80%</strong>.</>,
            <>Overhauled delivery with <strong>Docker, automated integration tests, database migration checks, and CI/CD</strong>, reducing release validation from several hours to <strong>under 30 minutes</strong> with automated rollback paths.</>,
        ],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <div className="section-heading"><h2>Experience</h2><p>Education, research & enterprise systems</p></div>
                <div className="roles">
                    {roles.map((role, index) => (
                        <article key={role.company} className="role">
                            <div className="role-meta"><p>{role.period}</p><p>{role.location}</p></div>
                            <div className="role-content">
                                <h3>{role.company}</h3>
                                <p className="role-name">{role.role}</p>
                                <p className="role-summary">{index === 0 ? 'Student services with searchable case histories, staff dashboards, and permission-based workflows.' : 'Full-stack development for GrantsNow, research workflows, and enterprise integrations.'}</p>
                                <details className="notes"><summary>Work & outcomes</summary><ul>{role.points.map((point, i) => <li key={i}>{point}</li>)}</ul></details>
                            </div>
                            <div className="role-outcome">{index === 0 ? <>3.8s to &lt;1.7s<span>key page load times</span></> : <>2.3s to 260ms<span>p95 response time</span></>}</div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
