import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <a
                  href={skills.docUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="software-skill-link"
                >
                  {skills.imageSrc ? (
                    <img
                      src={skills.imageSrc}
                      alt={`${skills.skillName} icon`}
                      className={`software-skill-icon ${skills.skillName === "C++" ? "cpp-logo" : ""}`}
                    />
                  ) : (
                    <i className={skills.fontAwesomeClassname}></i>
                  )}
                  <p>{skills.skillName}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
