import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-wrapper">
        <div className="contact-content">
          <h2 className="contact-header">Get in touch</h2>
          <p className="contact-text">
            I’m actively developing my web development skills, with a strong
            focus on modern frontend technologies and backend fundamentals. I’m
            open to full-time opportunities where I can continue learning, grow
            as a developer, and add value to a team.
          </p>
          <div className="contact-address">
            <div className="address">
              <img src="/images/icons/geo.png" alt="geo icon" />
              <p>Prague, Czech Republic</p>
            </div>

            <div className="phone">
              <img src="/images/icons/phone.png" alt="phone icon" />
              <p>1654138541</p>
            </div>
          </div>

          <button className="message-btn">Send me a message!</button>
        </div>

        <p className="developed">
          © 2025 - Developed and Designed by Andrii Psarov C. Temeña
        </p>
      </div>
    </section>
  );
}

export default Contact;
