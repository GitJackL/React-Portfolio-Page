import React from 'react';
import { useParams } from 'react-router-dom';

function Project(props) {
  const { id } = useParams();
  const project = props.projects.find(p => p.id === Number(id));

  return (
    <div>
      <h2>{project.title}</h2>
      <p><a href={project.deployed}>Link to deployed version</a></p>
      <p><a href={project.github}>Link to GitHub repository</a></p>
      <img src={project.image} alt={project.title} />
    </div>
  );
}

export default Project;