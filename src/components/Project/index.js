import React from "react";
import "./style.scss";

function Project(props) {
  const { name, html_url, vercelUrl } = props.data;
  function visitProject(e) {
    if (e.target.className === "github") {
      return;
    }
    window.location = vercelUrl;
  }
  return (
    <div className="contentProjects" onClick={visitProject}>
      <div className="cardProject">
        <li>
          <img
            className="image"
            src={"./images/" + name + ".png"}
            alt={name}
          ></img>
          <span className="name">{name}</span>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            <img className="github" src="./images/github-logo.png" alt="github"></img>
          </a>
        </li>
      </div>
    </div>
  );
}

export default Project;
