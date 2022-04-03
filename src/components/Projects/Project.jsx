import React from "react";
import { Code, Fire } from "../icons/Icons";

const Project = ({
  projectImage,
  projectName,
  linkToCode,
  linkToLiveProject,
  status,
  categoryString,
}) => {
  return (
    <div className="project-container">
      <div className="project">
        <div className="projects__image">
          <img
            src={projectImage}
            alt="project _image"
            className="project__image--img"
          />
        </div>
        <div className="project__status">{status}</div>
        <h2 className="project__name">{projectName}</h2>
        <p className="project__category">
          Category: <span className="categories">{categoryString}</span>
        </p>
        <div className="projects__links">
          <a href={linkToCode} className="project__links--link">
            <Code />
            visit code
          </a>
          <a href={linkToLiveProject} className="project__links--link">
            <Fire />
            live project
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
