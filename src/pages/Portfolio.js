import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useState } from 'react';

function Portfolio(){
  const [projects] = useState( [
    {   
        title: 'bookandbreweries',
        description:'',
        link:'',
        repolink: '',
    },
    {
        title: 'bookandbreweries',
        description:'',
        link:'',
        repolink: '',
    },
    {
        title: 'bookandbreweries',
        description:'',
        link:'',
        repolink: '',
    },
    {
        title: 'bookandbreweries',
        description:'',
        link:'',
        repolink: '',
    },
    {
        title: 'bookandbreweries',
        description:'',
        link:'',
        repolink: '',
    },
    {
        title: 'bookandbreweries',
        description:'',
        link:'',
        repolink: '',
    }
  ]);
return (
    <div className = "portfolio-container"> 
        <h2> Recent Work</h2>
        <div>
            {projects.map((project)=>(
            <ProjectCard
            projects={projects}
            />
            ))};
        </div>
    </div>
)
};

export default Portfolio;