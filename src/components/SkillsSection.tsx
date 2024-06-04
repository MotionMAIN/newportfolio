import React, { useEffect, useRef } from 'react';
import '../styles/SkillsSection.css';
import 'animate.css';

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
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
        }
      },
      {
        root: null,
        rootMargin: '0px',
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
    <div
      className="skill-box"
      ref={ref}
    >
      <img src={icon} alt="" className="skill-icon" />
      <div className="skill-title">{title}</div>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { title: 'JavaScript', icon: '/path/to/javascript-icon.png' },
    { title: 'TypeScript', icon: '/path/to/javascript-icon.png' },
    { title: 'CSS', icon: '/path/to/javascript-icon.png' },
    { title: 'HTML', icon: '/path/to/javascript-icon.png' },
    { title: 'C', icon: '/path/to/javascript-icon.png' },
    { title: 'C#', icon: '/path/to/javascript-icon.png' },
    { title: 'Flutter/Dart', icon: '/path/to/javascript-icon.png' },
  ];

  return (
    <div>
    <span className='languages-span'>Languages</span>
    <div className="skills-section">
      {skills.map((skill, index) => (
        <Skill key={index} title={skill.title} icon={skill.icon} index={index} />
      ))}
    </div>
    </div>
  );
};

export default SkillsSection;
