import React, { useState } from 'react';
import "../Projects/projects.css";
import {FaTimes} from "react-icons/fa";


const ProjectWorks = ({image, name, technologies, description, links}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <div className='my-works'>
            <div className='works-container'>
                <img src={image} alt="project" className='image'/>
                <div className='info'>
                    <a href="#projectHeader"><button type='button' className='button' onClick={() => setShowModal(!showModal)}>See More</button></a>
                </div>
            </div>
        </div>

        {/* Modal */}
            
                    <div className="modal-container" id={showModal ? "showModal" : ""}>
                        <div className='modal'>
                            <div className="modal-image">
                                <img src={image} alt={name} />
                            </div>
                            <div className='modal-title'>
                                <span>{name}</span>
                            </div>
                            <div className="modal-desc">
                                <span>{description}</span>
                            </div>
                            <div className="modal-links">
                                <span>{links}</span>
                            </div>
                            <div className="modal-technologies">
                                <span>{technologies}</span>
                            </div>
                        </div>
                        <div className='close'>
                            <FaTimes className='close-logo' onClick={() => setShowModal(!showModal)}/>
                        </div>
                    </div>
                
        </>
    )
}

export default ProjectWorks
