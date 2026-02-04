import { useEffect, useState } from "react";

import "./Header.css";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${hidden ? "hidden" : ""}`}>
      <nav>
        <a href="#hero" className="link-house">
          <img src="/images/icons/home.png" alt="" />
        </a>
        <ul>
          <li>
            <a href="#about" className="link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="link">
              Contact
            </a>
          </li>
        </ul>
        <button></button>
      </nav>
    </header>
  );
};

export default Header;
