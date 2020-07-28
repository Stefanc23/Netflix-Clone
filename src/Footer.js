import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Made with ❤️ by Stefano Christian W.
      </div>
    </footer>
  );
}

export default Footer;
