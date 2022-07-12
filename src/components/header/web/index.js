import React from 'react';
import './web.css';
function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fi fi-bs-rocket-lunch option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi fi-bs-gym option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi fi-bs-hourglass-end option-icon"></i>Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi fi-bs-world option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
