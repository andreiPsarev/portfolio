const ProjectCard = ({ project }) => {
  return (
    <section className="project">
      <div className="project-preview">
        <div class="project-img-wrapper">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="project-img"
          />
        </div>
        <div className="project-overlay">
          <div className="overlay-top">
            {project.tech.map((tech) => (
              <img
                key={tech.name}
                src={tech.icon}
                alt={tech.name}
                title={tech.name}
              />
            ))}
          </div>

          <div className="overlay-bottom">
            {project.tech.map((tech) => (
              <p key={tech.name}>{tech.name}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="project-info">
        <div className="project-title">
          <h3>{project.title}</h3>

          <div className="project-icons">
            <a href={project.liveUrl} target="_blank">
              <img src="/images/icons/link.png" alt="link png" />
            </a>
            <a href={project.githubUrl} target="_blank">
              <img src="/images/icons/gh.png" alt="github png" />
            </a>
          </div>
        </div>

        <p>{project.description}</p>
      </div>
    </section>
  );
};

export default ProjectCard;
