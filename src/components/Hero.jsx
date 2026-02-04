import "./Hero.css";

function Hero() {
  return (
    <section id="hero">

      <div className="resume">
        <h1>AP</h1>
        <button className="resume-btn">Resume</button>
      </div>

      <div className="hero-content">
        <img src="/images/hero-photo.png" alt="" className="hero-photo"/>
        <div className="hero-block">
          <h2 className="hero-greeting">Hi, I'm</h2>
          <h1 className="hero-name">Andrii Psarov.</h1>
          <h3 className="hero-profession">A Front-End Developer</h3>
          <p className="hero-description">
            I'm a dedicated learner, constantly exploring new technologies and
            best practices to expand my skills and build innovative solutions.
          </p>
          <a className="pro-btn" href="#projects">See my work</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
