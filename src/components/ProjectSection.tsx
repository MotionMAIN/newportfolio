import React from "react";
import '../styles/ProjectSection.css';
import ProjectImage1 from "../assets/Portfolio.png"; // Beispielbild
import ProjectImage2 from "../assets/MotionSync.png"; // Beispielbild

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  offset: string;
}

const projects: Project[] = [
  {
    title: "Portfolio",
    description: "This portfolio is a short overview of my skills and my projects that I've done.",
    image: ProjectImage1,
    link: "https://github.com/MotionMAIN/newportfolio",
    offset: "translateY(40px)",
  },
  {
    title: "MotionSync",
    description: "A time management application for ensuring efficient work hour logging and analysis.",
    image: ProjectImage2,
    link: "https://github.com/username/project2",
    offset: "translateY(-40px)",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <div className="projectsSection">
      <div className="projectsGrid">
        {projects.map((project, index) => (
          <div className="projectCard" key={index} style={{ transform: project.offset }}>
            <img src={project.image} alt={project.title} className="projectImage" />
            <h4 className="projectTitle">{project.title}</h4>
            <p className="projectDescription">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectLink">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
