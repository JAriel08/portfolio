import React from 'react';
import skills from "../About/assets/listSkill";
import "../About/skills.css";

const Skills = () => {
    return (
        <div className="skills-container">
            <div className='skills'>
            {skills.map((skill) => {
                const {title, logo} = skill;
                return (
                    <>
                    <div className='box'>
                        <div className='skill-logo'>
                            <span>{logo}</span>
                        </div>
                        <div className='skill-name'>
                            <span>{title}</span>
                        </div>
                    </div>
                    </>
            )
            })}
            </div>
        </div>
        )
    }

export default Skills
