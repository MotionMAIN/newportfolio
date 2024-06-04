import "../styles/Toolbar.css";
import React, { RefObject } from 'react';

type ToolbarProps = {
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    aboutMeRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  }

function Toolbar({ skillsRef, projectsRef, aboutMeRef, contactRef }: ToolbarProps){
  const scrollToSection = (elementRef: RefObject<HTMLDivElement>) => {
    document.body.style.pointerEvents = 'none';

    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: 'smooth'
    });

    setTimeout(() => {
      document.body.style.pointerEvents = 'all';
    }, 1000);
  }

    return(
    <div className="toolbar">
        <ul>
            <li onClick={() => scrollToSection(skillsRef)} className="link text hover-underline-animation">Skills</li>
            <li onClick={() => scrollToSection(projectsRef)} className="link text hover-underline-animation">Projects</li>
            <li onClick={() => scrollToSection(aboutMeRef)} className="link text hover-underline-animation">About Me</li> 
            <li onClick={() => scrollToSection(contactRef)} className="link text hover-underline-animation">Contact</li>
        </ul>
        </div>    
    )
}

export default Toolbar;