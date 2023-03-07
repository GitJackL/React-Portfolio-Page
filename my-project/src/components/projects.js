import React from 'react';
import Project from './Project';
import ProjectsData from './projects.json';


function Projects() {
  const projects = ProjectsData.projects.map((project) => (
    <Project
      key={project.id}
      id={project.id}
      title={project.title}
      deployed={project.deployed}
      github={project.github}
      image={project.image}
    />
  ));

  return (
    <div>
      <h2>Projects</h2>
      {projects}
    </div>
  );
}

export default Projects;