import React, { useRef } from 'react';
import Toolbar from './components/Toolbar'
import "./App.css"
import "./styles/SkillsSection.css"
import "./styles/TypeWriter.css";
import ScrollToTop from './components/ScrollToTop';
import TypingEffect from './components/TypingText';
import SkillsSection from './components/SkillsSection';
import 'animate.css';

function App() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
      <div className="App" style={{ minHeight: '100vh', backgroundColor: '#121212 ' }}>
        <ScrollToTop/>

        <div className='homeSection'>
        <Toolbar skillsRef={skillsRef} projectsRef={projectsRef} aboutMeRef={aboutMeRef} contactRef={contactRef}/>

        <div className='wrapper'>
        <TypingEffect/>
        </div>
        <div className='rightContent'>
          
        </div>
        </div>

        <div ref={skillsRef} className='skillsSection'>
          <h3 className='sectionHeader'>Skills</h3>
          <SkillsSection/>
        </div>
        <div ref={projectsRef} className='projectsSection'>
          <h3 className='sectionHeader'>Projects</h3>
        </div>
        <div ref={aboutMeRef} className='aboutMeSection'>
          <h3 className='sectionHeader'>Aboute Me</h3>
        </div>
        <div ref={contactRef} className='contactSection'>
          <h3 className='sectionHeader'>Contact</h3>
        </div>

      </div>
  );
}

export default App;
