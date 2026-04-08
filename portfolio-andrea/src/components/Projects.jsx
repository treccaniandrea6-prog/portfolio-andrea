import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h3 className="section-title">Projects</h3>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <span className="project-tech">{project.tech}</span>

              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;