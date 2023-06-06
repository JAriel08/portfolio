import project1 from "../Projects/assets/images/ballerbootcamp.png"
import project4 from "../Projects/assets/images/rock-paper-scissor.png"
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";
import "../Projects/projectList.css";


const projects = [
    {
        id: 1,
        image: project1,
        name: "BallerBootcamp",
        technologies: 
        <>
            <div className="tech">
                <div className="tech-item">
                    <span>HTML</span>
                </div>
                <div className="tech-item">
                    <span>CSS</span>
                </div>
            </div>  
        </>,
        description: "The purpose of this website is to provide basketball enthusiasts an opportunity to learn the fundamentals of basketball and to help them improve their skills to achieve their goals.",
        links: 
        <div className="links">
            <a href="https://jariel08.github.io/baller-bootcamp/" className="link-item"><FaExternalLinkAlt/></a>
            <a href="https://jariel08.github.io/baller-bootcamp/" className="link-item"><FaGithub/></a>
        </div>
        
    },
    {
        id: 2,
        image: project1,
        name: "Korean Delight Davao ",
        technologies: 
        <>
            <div className="tech">
                <div className="tech-item">
                    <span>HTML</span>
                </div>
                <div className="tech-item">
                    <span>CSS</span>
                </div>
                <div className="tech-item">
                    <span>JavaScript</span>
                </div>
            </div>  
        </>,
        description: "The purpose of this website is to provide basketball enthusiasts an opportunity to learn the fundamentals of basketball and to help them improve their skills to achieve their goals.",
        links: 
        <div className="links">
            <a href="https://jariel08.github.io/baller-bootcamp/" className="link-item"><FaExternalLinkAlt/></a>
            <a href="https://jariel08.github.io/baller-bootcamp/" className="link-item"><FaGithub/></a>
        </div>
    },
    {
        id: 3,
        image: project1,
        name: "BallerBootcamp",
        technologies: 
        <>
            <div className="tech">
                <div className="tech-item">
                    <span>HTML</span>
                </div>
                <div className="tech-item">
                    <span>CSS</span>
                </div>
            </div>  
        </>,
        description: "The purpose of this website is to provide basketball enthusiasts an opportunity to learn the fundamentals of basketball and to help them improve their skills to achieve their goals.",
        links: 
        <div className="links">
            <a href="https://jariel08.github.io/baller-bootcamp/" className="link-item"><FaExternalLinkAlt/></a>
            <a href="https://jariel08.github.io/baller-bootcamp/" className="link-item"><FaGithub/></a>
        </div>
    },
    {
        id: 4,
        image: project4,
        name: "Rock-Paper-Scissor",
        technologies: 
        <>
            <div className="tech">
                <div className="tech-item">
                    <span>HTML</span>
                </div>
                <div className="tech-item">
                    <span>CSS</span>
                </div>
                <div className="tech-item">
                    <span>JavaScript</span>
                </div>
            </div>  
        </>,
        description: "This is the mini-game that I created during our bootcamp where we were assigned to create a rock-paper-scissor game to further develop our JavaScript skill.",
        links: 
        <div className="links">
            <a href="https://jariel08.github.io/baller-bootcamp/" className="link-item"><FaExternalLinkAlt className="link-logo"/></a>
            <a href="https://jariel08.github.io/baller-bootcamp/" className="link-item"><FaGithub className="link-logo"/></a>
        </div>
    }
]

export default projects