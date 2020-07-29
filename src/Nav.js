import React, {useState, useEffect} from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const [drop, handleDrop] = useState(false);

  useEffect(() => {
    const scrollTrigger = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    const mouseDownTrigger = document.addEventListener("mousedown", () => {
      drop && handleDrop(false);
    });
    return () => {
      window.removeEventListener("scroll", scrollTrigger);
      document.removeEventListener("mousedown", mouseDownTrigger);
    };
  }, [drop]);

  const handleClick = () => {
    handleDrop(!drop);
  };

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <span className="dropdown__control" onClick={handleClick}>
        &#9660;
      </span>
      <ul className={`dropdown__menu ${drop && "dropped"}`}>
        <a className="dropdown__link" href="#home">
          Home
        </a>
        <a className="dropdown__link" href="#shows">
          TV Shows
        </a>
        <a className="dropdown__link" href="#movies">
          Movies
        </a>
        <a className="dropdown__link" href="#recent">
          Recently Added
        </a>
        <a className="dropdown__link" href="#list">
          My List
        </a>
      </ul>
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
