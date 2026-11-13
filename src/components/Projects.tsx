'use client'

export default function Projects() {
    const projectsArray = [
        {
            id: 2,
            link: 'https://repogenie.vercel.app/',
            github: 'https://github.com/allenbaby/repo-genie',
            title: 'Repo Genie - AI Codebase Generator',
            description: [<>Built an AI-assisted code generation system using <strong>Groq Qwen3.8-27B</strong> to convert natural-language prompts into structured, runnable applications.</>, <>Developed a multi-stage pipeline to parse model output into a virtual file system with dependency resolution, real-time editing, and <strong>live preview</strong> through Sandpack.</>, <>Integrated GitHub authentication and repository APIs to automatically create repositories and push complete generated codebases.</>],
        },
        {
            id: 3,
            link: 'https://playthat.vercel.app/',
            github: 'https://github.com/allenbaby/play-that',
            title: 'Headspace - Social Meditation Platform',
            description: [<>Built and deployed a full-stack application supporting authentication, guided audio content, favorites, streak tracking, social interactions, and persistent user data.</>, <>Engineered a timezone-aware streak algorithm using <strong>Luxon</strong> and transaction-safe database operations to enforce once-per-day completion and prevent duplicate writes.</>, <>Integrated <strong>Firebase Cloud Messaging</strong> for scheduled user notifications and reminder preferences.</>],
        },
        {
            id: 4,
            link: 'https://github.com/recloudstream/cloudstream/pull/391',
            title: 'CloudStream - Open-Source Android Application',
            description: [<>Developed a modular, network-aware video-quality control for a Kotlin Android application serving <strong>10,000+ monthly active users</strong>; the contribution passed review, was merged, and shipped to production.</>],
        },
    ]

    const summaries = [
        'Natural-language prompts to runnable applications, with live editing and GitHub publishing.',
        'Guided audio, social features, and timezone-aware meditation streaks.',
        'A network-aware video-quality control, merged and shipped to 10,000+ monthly users.',
    ]
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="section-heading"><h2>Projects</h2><p>Web applications & open source</p></div>
                <div className="project-index">
                    {projectsArray.map((arr, index) => (
                        <article key={arr.id} className="project-row">
                            <div className="project-title">
                                <h3><a href={arr.link} target="_blank" rel="noreferrer">{arr.title.split(' - ')[0]}</a></h3>
                                <p>{arr.title.split(' - ')[1]}</p>
                            </div>
                            <div className="project-description">
                                <p>{summaries[index]}</p>
                                <details className="notes"><summary>Engineering notes</summary><ul>{arr.description.map((point, i) => <li key={i}>{point}</li>)}</ul></details>
                            </div>
                            <div className="project-links">
                                <a href={arr.link} target="_blank" rel="noreferrer">{arr.github ? 'Visit project' : 'View contribution'}</a>
                                {arr.github && <a href={arr.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>GitHub</a>}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
