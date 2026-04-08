function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h3 className="section-title">Skills</h3>

        <div className="skills-grid">
          <div className="skill-card">
            <h4>Frontend</h4>
            <p>HTML, CSS, JavaScript, React, Angular, Vue</p>
          </div>

          <div className="skill-card">
            <h4>Backend</h4>
            <p>Node.js, Express, REST APIs, Authentication</p>
          </div>

          <div className="skill-card">
            <h4>Database</h4>
            <p>MySQL</p>
          </div>

          <div className="skill-card">
            <h4>Tools</h4>
            <p>Git, GitHub, VS Code, Thunder Client, Netlify</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;