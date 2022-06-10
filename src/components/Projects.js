import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect( () => {
        fetch('https://gentle-mountain-57996.herokuapp.com/projects')
        .then(res => res.json())
        .then(data => {
            setProjects(data);
        })
    }, [] )

    return (
        <section>
            <h2 className='text-center text-4xl font-bold underline underline-offset-8 decoration-pink-500 text-pink-500 mb-10'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-5'>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    />)
                }
            </div>
        </section>
    );
};

export default Projects;