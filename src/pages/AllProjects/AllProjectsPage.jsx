import React, { useState } from 'react';
import "../AllProjects/allprojects.css"
import allMyProjects from './allMyProjects';
import { Link } from 'react-router-dom';
import {FaLongArrowAltLeft} from "react-icons/fa";
import AllProjectsModal from './AllProjectsModal';

const AllProjectsPage = () => {
    const [projects, setProjects] = useState(allMyProjects);

    return (
        <section className='all-projects-page'>
            <div className="all-projects-container">
                <div className='return-homepage'>
                    <Link to="/portfolio"><button><FaLongArrowAltLeft className='back'/>Return to Homepage</button></Link>
                </div>
                <div className='all-projects-title'>
                    <span> All My <span className='colored'>Projects</span></span>
                </div>
                <div className='my-projects-container'>
                {projects.map((project) => {
                    const {id, image, name, technologies, description, links} = project;
                    return (
                        <AllProjectsModal 
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
            </div>
        </section>
    )
}

export default AllProjectsPage
