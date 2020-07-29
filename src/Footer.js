import React from "react";
import "./Footer.css";
import tmdb from "./tmdb.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__center">
        <img src={tmdb} alt="powered by TMDB" />
        <span>
          &copy; {new Date().getFullYear()} Made with ❤️ by{" "}
          <a
            className="footer__link"
            href="https://github.com/Stefanc23/Netflix-Clone"
          >
            Stefano Christian W.
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
