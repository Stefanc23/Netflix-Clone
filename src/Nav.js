import React, {useState, useEffect} from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <ul className="nav__menu">
        <a className="nav__link" href="#home">
          Home
        </a>
        <a className="nav__link" href="#shows">
          TV Shows
        </a>
        <a className="nav__link" href="#movies">
          Movies
        </a>
        <a className="nav__link" href="#recent">
          Recently Added
        </a>
        <a className="nav__link" href="#list">
          My List
        </a>
      </ul>
      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Avatar Icon"
      />
    </nav>
  );
}

export default Nav;
