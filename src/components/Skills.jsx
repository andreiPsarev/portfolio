import "./Skills.css";

const icons = [
  "/images/icons/html.png",
  "/images/icons/css.png",
  "/images/icons/js.png",
  "/images/icons/react.png",
  "/images/icons/vscode.png",
  "/images/icons/github.png",
];

const iconsSub = [
  "/images/icons/python.png",
  "/images/icons/c.png",
  "/images/icons/java.png",
  "/images/icons/mariadb.png",
  "/images/icons/msql.png",
  "/images/icons/vsc.png",
  "/images/icons/github.png",
];

function Skills() {
  return (
    <section id="skills">
      <div className="skills-content">
        <h2 className="skills-header">Skills</h2>
        <p className="skills-text">
          Here are the core skills I’ve developed and the technologies I’ve
          worked with throughout my learning journey, which I continue to refine
          and improve.
        </p>
        <div className="skills-grid">
          {icons.map((icon, i) => (
            <img key={i} src={icon} alt="" className="skill-icon" />
          ))}
        </div>
        <p className="skills-text">
          Additionally, these are some skills and technologies I gained during
          my time at university. While they’re not directly focused on web
          development, they form a strong foundation for my technical
          background.
        </p>
        <div className="skills-grid">
          {iconsSub.map((icon, i) => (
            <img key={i} src={icon} alt="" className="skill-icon" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
