import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="fi fi-ss-bolt"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects" onClick={() => setIsOpen(false)}>
            <i className="fi fi-bs-rocket-lunch option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills" onClick={() => setIsOpen(false)}>
            <i className="fi fi-bs-gym option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work" onClick={() => setIsOpen(false)}>
            <i className="fi fi-bs-hourglass-end option-icon"></i>Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact" onClick={() => setIsOpen(false)}>
            <i className="fi fi-bs-world option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
