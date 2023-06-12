import project1 from "../Projects/assets/images/ballerbootcamp.png";
import project2 from "../Projects/assets/images/kdd.png";
import project3 from "../Projects/assets/images/bitebuddy.png";
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
        description: 
        <>
        <span>This is the project that I created for our 1st project in the bootcamp. This is made mainly from HTML and CSS only. As for the modal, I use a CSS framework which is Bootstrap to implement it.</span><br/><br/>
        <span>In addition, I used GitHub for the deployment of this project and Figma for creating the wireframe.</span>

        </>,
        links: 
        <div className="links">
            <a href="https://jariel08.github.io/baller-bootcamp/" className="link-item"><FaExternalLinkAlt/></a>
            <a href="https://github.com/JAriel08/baller-bootcamp" className="link-item"><FaGithub/></a>
        </div>
        
    },
    {
        id: 2,
        image: project2,
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
        description: 
        <>
        <div>
            <span>This is the 2nd project that we did in the bootcamp, but this is already a team project wherein we are composed of 3 members. This project is made from HTML, CSS, and JavaScript.</span><br/><br/>
            
            <span>My role here is to create some pages of the website through HTML and CSS and some Javascript for the functionality.</span>
        </div>
        </>,
        links: 
        <div className="links">
            <a href="https://jariel08.github.io/korean-delight-davao/" className="link-item"><FaExternalLinkAlt/></a>
            <a href="https://github.com/JAriel08/korean-delight-davao" className="link-item"><FaGithub/></a>
        </div>
    },
    {
        id: 3,
        image: project3,
        name: "BiteBuddy",
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
                <div className="tech-item">
                    <span>ReactJS</span>
                </div>
                <div className="tech-item">
                    <span>Node.js</span>
                </div>
                <div className="tech-item">
                    <span>MySQL</span>
                </div>
            </div>  
        </>,
        description: 
        <>
        <div>
            <span>This is the last project that we made during the bootcamp and is considered as our capstone. We use ReactJS for the front end of the website, Node.js for the back end, and MySQL for our database. We are only 2 in the group in creating this project.</span><br/><br/>
            
            <span>My role here is to create the front end of the website and have proper communication on the back end since it is important that both are in sync to make sure the project goes well.</span><br /><br />

            <span>PS: The deployment of our capstone is not yet that good since we only put it in the Github as of now.</span>
        </div>
        </>,
        links: 
        <div className="links">
            <a href="https://jariel08.github.io/bitebuddy/" className="link-item"><FaExternalLinkAlt/></a>
            <a href="https://github.com/JAriel08/bitebuddy" className="link-item"><FaGithub/></a>
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
            <a href="https://jariel08.github.io/rock-paper-scissors-game/" className="link-item"><FaExternalLinkAlt className="link-logo"/></a>
            <a href="https://github.com/JAriel08/rock-paper-scissors-game" className="link-item"><FaGithub className="link-logo"/></a>
        </div>
    }
]

export default projects