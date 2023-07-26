import React, { useState, useEffect } from 'react';
import Tree, { AnimatedTree } from 'react-tree-graph';


const SkillTree = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('api/skills')
      .then(response => response.json())
      .then(data => {
        setSkills(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const frontArray = [];
  const backendArray = [];
  const databaseArray = [];

  skills.forEach(skill => {
    switch (skill.type) {
      case 'Frontend':
        frontArray.push({ name: skill.name });
        break;
      case 'Backend':
        backendArray.push({ name: skill.name });
        break;
      case 'Database':
        databaseArray.push({ name: skill.name });
        break;
      default:
        break;
    }
  });

  const data = {
    name: 'Skills',
    children: [
      {
        name: 'Frontend',
        children: frontArray,
      },
      {
        name: 'Backend',
        children: backendArray,
      },
      {
        name: 'Database',
        children: databaseArray,
      },
    ],
  };

  return (
    <div>
      <div className="custom-container">
        <AnimatedTree
          className="pl-5"
          data={data}
          height={400}
          width={800}
          svgProps={{
            className: 'custom',
          }}
          animated
        />
      </div>
    </div>
  );
};

export default SkillTree;
