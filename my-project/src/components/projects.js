import React from 'react';
import Project from './project';
import projectsData from './projects.json';

function Projects() {
  const projects = projectsData.map((project) => (
    <Project
      key={project.id}
      projects={[project]}
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
