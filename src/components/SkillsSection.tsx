import React, { useEffect, useRef } from "react";
import "../styles/SkillsSection.css";
import JSIcon from "../assets/JavaScriptIcon.png";
import TSIcon from "../assets/TypeScriptIcon.png";
import CSSIcon from "../assets/CSSIcon.png";
import HTMLIcon from "../assets/HTMLIcon.png";
import CSharpIcon from "../assets/CSharpIcon.png";
import FlutterIcon from "../assets/FlutterIcon.png";
import CIcon from "../assets/CIcon.png";
import JavaIcon from "../assets/JavaIcon.png";
import "animate.css";

interface SkillProps {
  title: string;
  icon: string;
  index: number;
}

const Skill = ({ title, icon, index }: SkillProps & { index: number }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeIn");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="skill-box" ref={ref}>
      <img src={icon} alt="" className="skill-icon" />
      <div className="skill-title">{title}</div>
    </div>
  );
};

const SkillsSection = () => {
  const frontend = [
    { title: "JavaScript", icon: JSIcon },
    { title: "TypeScript", icon: TSIcon },
    { title: "CSS", icon: CSSIcon },
    { title: "HTML", icon: HTMLIcon },
  ];

  const backend = [
    { title: "C", icon: CIcon },
    { title: "C#", icon: CSharpIcon },
    { title: "Java", icon: JavaIcon },
  ];

  const mobile = [
    { title: "Flutter/Dart", icon: FlutterIcon },
  ];

  return (
    <div className="skills-div">
      <span className="languages-span">Frontend</span>
      <div className="skills-section">
        {frontend.map((skill, index) => (
          <Skill
            key={index}
            title={skill.title}
            icon={skill.icon}
            index={index}
          />
        ))}
      </div>

      <span className="languages-span">Backend</span>
      <div className="skills-section">
      {backend.map((skill, index) => (
          <Skill
            key={index}
            title={skill.title}
            icon={skill.icon}
            index={index}
          />
        ))}
      </div>

      <span className="languages-span">Mobile</span>
      <div className="skills-section">
      {mobile.map((skill, index) => (
          <Skill
            key={index}
            title={skill.title}
            icon={skill.icon}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
