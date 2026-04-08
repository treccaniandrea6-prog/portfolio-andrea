function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-content">
        <p className="hero-label">Full Stack Developer</p>

        <h2>
          I build modern web applications with clean UI and solid logic.
        </h2>

        <p className="hero-text">
          I am building real-world projects focused on frontend development,
          backend APIs, authentication, databases, and user experience.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;