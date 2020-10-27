import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext';
import Project from '../Project';
import './style.scss'

function Projects() {
    const {repos} = useContext(ThemeContext)
    return (
        <div className="projectsContent">
            <h2 className="projectTitle">Proyectos</h2>
            <ul className="nameOf">
                {repos.map((project, key) => {
                    return <Project data={project} key={key} />
                })}
            </ul>
        </div>
    
    )
}

export default Projects;