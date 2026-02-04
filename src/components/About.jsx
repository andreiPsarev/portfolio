import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="about-block">
          <h2 className="about-title">About</h2>
          <p className="about-text">
            My name is Andrii Psarov. I studied Computer Science at Sumy State
            University (SSU), Ukraine, where I earned both my Bachelor’s and
            Master’s degrees.
          </p>
          <p className="about-text">
            Currently, I’m continuing to deepen my knowledge in web development,
            focusing on improving my practical skills and staying up to date
            with modern technologies. I’m actively learning, building projects,
            and refining my understanding of how real-world applications are
            designed and developed.
          </p>
          <p className="about-text">
            At the same time, I’m looking for a job opportunity where I can
            apply my skills, grow as a developer, and contribute to meaningful
            projects within a professional team.
          </p>
        </div>
        <img src="/images/hero-photo.png" alt="" className="about-photo" />
      </div>
    </section>
  );
}

export default About;
