const skills = ["HTML", "CSS", "JavaScript", "React", "NodeJS" ," Good Communication in English"];

export default function Skills() {
  return (
    <section id="skills" className="skills reveal">
      <h2>Skills</h2>
      <div className="skill-grid">
        {skills.map((s, i) => (
          <div className="card" key={i}>
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
