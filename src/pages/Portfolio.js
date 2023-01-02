import React from 'react';
import ProjectCard from '../components/ProjectCard';
// import BooksCard from '../assets/booksandbreweries.png';


function Portfolio(){
  const projects = [
    {   
        title: 'Project 1',
        id: 1,
        img: '',
        description:''
    },
    {
        title: 'Project 2',
        id: 2,
        img: '',
        description:''
    },
    {
        title: 'Project 3',
        id: 3,
        img: '',
        description:''
    },
    {
        title: 'Project 4',
        id: 4,
        img: '',
        description:''
    },
    {
        title: 'Project 5',
        id: 5,
        img: '',
        description:''
    },
    {
        title: 'Project 6',
        id: 6,
        img: '',
        description:''
    }
  ];
return (
    <div className = "portfolio-container"> 
        <h2> Recent Work</h2>
        <div>
            {projects.map(
               project => (
                <ProjectCard/>
               )
            )};
        </div>
    </div>
)
};

export default Portfolio;