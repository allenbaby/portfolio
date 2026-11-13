const roles = [
    {
        company: 'California State University',
        role: 'Software Developer',
        period: 'March 2025 - Present',
        location: 'Los Angeles, California',
        summary: 'E-learning platforms, secure authentication, student services, and scalable course APIs.',
        outcome: { value: '3.8s to <1.7s', label: 'key page load times' },
        points: [
            <>Owned the architecture and delivery of an <strong>e-learning platform</strong> with course enrollment, persistent lesson progress, completion tracking, and certificate eligibility backed by REST APIs and a relational data model.</>,
            <>Designed and implemented <strong>JWT authentication and session management</strong> for a platform supporting <strong>10,000+ users</strong>, with short-lived access tokens, rotating refresh tokens, concurrent device sessions, secure renewal, and per-session revocation.</>,
            <>Horizontally scaled question and course APIs using <strong>Nginx as a reverse proxy and load balancer</strong>, increasing k6-measured throughput <strong>5x from 20 to 100 RPS</strong> without increasing p95 latency.</>,
            <>Built <strong>timezone-aware course streaks</strong> validated against login and session activity, with live progress indicators that increased course completion by <strong>30%</strong>.</>,
            <>Built a centralized <strong>student-services platform</strong> with searchable case histories, staff dashboards, permission-based workflows, REST APIs, and PostgreSQL persistence, reducing average case resolution time by <strong>approximately 35%</strong>.</>,
            <>Added <strong>Redis-backed session and data caching, query optimization, lazy loading, and frontend request deduplication</strong>, cutting repeated backend calls by <strong>over 50%</strong> and key page load times from <strong>3.8s to under 1.7s</strong>.</>,
            <>Built a <strong>conversational AI experience for an Olympics website</strong> with grounded responses, model rotation, and token-aware throttling to maintain availability under provider limits, reducing bounce rate by <strong>15%</strong> as measured through Vercel Analytics.</>,
        ],
    },
    {
        company: 'Fusion Practices',
        role: 'Software Engineer',
        period: 'February 2022 - January 2025',
        location: 'Mumbai, India',
        summary: 'Full-stack development for GrantsNow, research workflows, enterprise integrations, and Python scraping pipelines.',
        outcome: { value: '2.3s to 260ms', label: 'p95 response time' },
        points: [
            <>Re-architected a high-traffic research management workflow across the frontend, API, and database layers, introducing <strong>Redis caching, PostgreSQL indexing, and request-level data reuse</strong> to reduce p95 response time from <strong>2.3s to 260ms</strong>.</>,
            <><strong>Owned full-stack development</strong> for GrantsNow using React and Node.js REST APIs, scaling to <strong>1,000+ university staff</strong> and <strong>£1M+</strong> in signed contract value.</>,
            <>Designed a resilient <strong>enterprise integration layer</strong> for research, finance, and HR data with background jobs, idempotent writes, retries, reconciliation, and administrator-facing status dashboards, cutting unresolved synchronization failures by <strong>more than 80%</strong>.</>,
            <>Built a configurable <strong>Python scraping pipeline for 200+ websites</strong>; Excel-based CSS selectors enabled no-code onboarding, while <strong>ThreadPoolExecutor cut runtime by 4x</strong>.</>,
            <>Overhauled delivery with <strong>Docker, automated integration tests, database migration checks, and CI/CD</strong>, reducing release validation from several hours to <strong>under 30 minutes</strong> with automated rollback paths.</>,
        ],
    },
    {
        company: 'ISRO - Indian Space Research Organization',
        role: 'SDE Intern',
        period: 'October 2020 - July 2021',
        location: 'Trivandrum, India',
        summary: 'An AI mental-wellness companion for astronauts, plus website and internal application development.',
        outcome: { value: 'AI companion', label: 'astronaut wellness prototype' },
        points: [
            <>Built a prototype <strong>AI mental-wellness companion for astronauts</strong> using BERT, FaceNet, BlenderBot, and React for sentiment analysis, facial recognition, and contextual dialogue.</>,
            <>Maintained <strong>ISRO websites and internal applications</strong>, resolving defects and delivering UI and functional enhancements through reusable, modular components.</>,
        ],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <div className="section-heading"><h2>Experience</h2><p>Education, enterprise & space research</p></div>
                <div className="roles">
                    {roles.map((role) => (
                        <article key={role.company} className="role">
                            <div className="role-meta"><p>{role.period}</p><p>{role.location}</p></div>
                            <div className="role-content">
                                <h3>{role.company}</h3>
                                <p className="role-name">{role.role}</p>
                                <p className="role-summary">{role.summary}</p>
                                <details className="notes"><summary>Work & outcomes</summary><ul>{role.points.map((point, i) => <li key={i}>{point}</li>)}</ul></details>
                            </div>
                            <div className="role-outcome">{role.outcome.value}<span>{role.outcome.label}</span></div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
