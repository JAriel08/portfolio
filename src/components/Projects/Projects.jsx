import React from 'react';
import "../Projects/projects.css";
import projects from "../Projects/projectList";
import ProjectWorks from './ProjectWorks';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section className='project-section' id='projects'>
            <div className="project-container">
                <div className='project-header' data-aos="fade-down" id='projectHeader' data-aos-easing="linear" data-aos-duration="500">
                    <span>MY <span className='highlight'>PROJECTS</span></span>
                    <div className='underline'></div>
                </div>
                <div className="project-list" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                    {projects.map((project) => {
                        const {id, image, name, technologies, description, links} = project;
                        return (
                            <ProjectWorks 
                            key={id}
                            image={image} 
                            name={name}
                            technologies={technologies}
                            description={description}
                            links={links}
                            />
                        )
                    })}
                </div>
                <div className='all-projects'>
                    <Link to="/allprojects"><button>See All Projects</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Projects
