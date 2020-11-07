import React from "react";
import "./style.scss";

function Footer() {
  return (
    <div id="contact" className="contact">
      <h2>Contacto</h2>
      <div className="myContact">
        <div className="myMail circle">
          <a href="mailto:milyalvarez.26@gmail.com">
            <img
              className="gmail"
              src="https://i.postimg.cc/y8JWWqQz/gmail.png"
              alt="Logo Gmail"
            />
          </a>
        </div>
        <div className="myLinkedin circle">
          <a href="https://www.linkedin.com/in/milagros-%C3%A1lvarez-cisterna-9891501b0/">
            <img
              className="linkedin"
              src="https://i.postimg.cc/8zRSM0GN/linkedin.png"
              alt="Logo Linkedin"
            />
          </a>
        </div>
        <div className="myGithub circle">
            <a href="https://github.com/Mily26">
                <img className="github" src="./images/github-logo.png" alt="logo github"/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
