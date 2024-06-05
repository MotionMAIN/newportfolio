import React, { useEffect } from 'react';
import Typed from 'typed.js';
import "../styles/TypeWriter.css";

const TypingEffect: React.FC = () => {
    useEffect(() => {
        const options = {
            strings: ["Web-Developer", "App-Developer", "Software-Engineer"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: true,
            cursorChar: '_',
            autoInsertCss: true,
        };

        const typed = new Typed('.multiText', options);

        return () => {
            typed.destroy();
        }
    }, []);

    return (
        <div className="wrapper">
            <div className="smallThicStaticText">Hello, I'm</div>
            <div className="bigStaticText">Jonas Lampe</div>
            <div className="typingWrapper">
                <span className="staticText">A</span>
                <span className="multiText"></span>
            </div>
            <div>
                <a href='https://github.com/MotionMAIN' target="_blank" rel="noreferrer">
                    <button className="buttons">Github</button>
                </a>

                <a href='https://x.com/MoTionVL' target="_blank" rel="noreferrer">
                    <button className="buttons">Twitter</button>
                </a>

                <a href='mailto:jonas.lampe@proton.me' target="_blank" rel="noreferrer">
                    <button className="buttons">E-Mail</button>
                </a>
            </div>
        </div>
    );
}

export default TypingEffect;
