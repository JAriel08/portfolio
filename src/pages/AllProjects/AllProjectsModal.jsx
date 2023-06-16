import React, { useState } from 'react'
import "./allprojects.css";
import { FaTimes } from 'react-icons/fa';

const AllProjectsModal = ({image, name, technologies, description, links}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <div className='my-project-container' >
            <div className='my-project-image'>
                <img src={image} alt={name}/>                        
            </div>
            <div className="see-more-button">
                <button onClick={() => setShowModal(!showModal)}>See More</button>
            </div>
        </div>


        {/* Modal */}
        
        <section className='all-projects-modal' id={showModal ? "show" : ""}>
            <div className="all-projects-modal-container">
                <div className="all-projects-modal-image">
                    <img src={image} alt={name} />
                </div>
                <div className="all-projects-modal-name">
                    <span>{name}</span>
                </div>
                <div className="all-projects-modal-desc">
                    <span>{description}</span>
                </div>
                <div className="all-projects-modal-links">
                    <span>{links}</span>
                </div>
                <div className="all-projects-modal-tech">
                    <span>{technologies}</span>
                </div>
                <FaTimes className='close-all-projects-modal' onClick={() => setShowModal(!showModal)}/>
            </div>
            
        </section>
        
        </>
    )
}

export default AllProjectsModal
