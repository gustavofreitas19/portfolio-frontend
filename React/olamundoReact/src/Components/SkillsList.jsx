import React from 'react';

function SkillsList(props) {
  return (
    <div className="skills">
      <h3>Habilidades</h3>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;