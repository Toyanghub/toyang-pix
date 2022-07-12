import React from 'react';
import Separator from '../../common/separator/';
import { SkillData } from '../../data/skills';
import SkillCard from './skill-card';
import './skills.css';
function Skills() {
  const data = SkillData;
  return (
    <div className="skills">
      <label className="section-title">Skills</label>
      <Separator />
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
