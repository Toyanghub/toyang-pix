import React from "react";
import "./project-card.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label>{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i className="fi fi-bs-flame"></i> Sight
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i className="devicon-github-original colored"></i> Github
              </div>
            </a>
          )}
          {/* YOUTUBE BUTTON - inilipat sa loob ng project-links div para maayos layout */}
          {project.youtube && (
            <a className="project-link youtube-link" href={project.youtube}>
              <div className="link-button youtube-button">
                <i className="fi fi-bs-play"></i> YouTube
              </div>
            </a>
          )}
        </div>

        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;
