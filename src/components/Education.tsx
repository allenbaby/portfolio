const education = [
    {
        school: 'California State University, Dominguez Hills',
        degree: 'Master of Science in Computer Science',
        period: 'January 2025 - December 2026 (Expected)',
        location: 'Los Angeles, California',
    },
    {
        school: 'College of Engineering Trivandrum',
        degree: 'Bachelor of Technology in Electronics and Communication Engineering',
        period: 'August 2017 - August 2021',
        location: 'Trivandrum, India',
    },
]

export default function Education() {
    return (
        <section id="education" className="section education-section">
            <div className="container">
                <div className="section-heading"><h2>Education</h2></div>
                <div className="education-list">
                    {education.map(item => <article key={item.school}><h3>{item.school}</h3><div><p className="degree">{item.degree}</p><p>{item.period}</p><p>{item.location}</p></div></article>)}
                </div>
            </div>
        </section>
    )
}
