import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-grid">
        <div className="projects-info">
          <h2 className="projects-title">Projects</h2>

          <p className="projects-text">
            Below are the projects I developed during my learning journey. Each
            project includes a detailed README, and you can explore the
            repositories for more information.
          </p>
        </div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
