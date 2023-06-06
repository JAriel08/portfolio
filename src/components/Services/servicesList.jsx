import {FaPenAlt, FaCode, FaMobileAlt} from "react-icons/fa";

export const services = [
    {
        id: 1, 
        logo: <FaPenAlt/>,
        title: "Web Design",
        description: 
        <>        
        <span>Making a web design is the first step that I do before proceeding in creating an actual website. I look from different resources to come up for a good design.</span><br/><br/>
        <span>
        In order to present it to the client, I use <strong>Figma</strong> to provide a draft for the design of the website.</span>
        </>

    },
    {
        id: 2, 
        logo: <FaCode/>,
        title: "Web Development",
        description: 
        <>        
        <span>In building the website, I make sure that the target audience is a considered factor so that it can be easily navigated. Also, I make sure to build its functionality accordingly to have a better user experience. </span><br/><br/>
        <span>
        I primarily use <strong> React</strong> as my framework for creating the front-end.</span>
        </>
    },
    {
        id: 3, 
        logo: <FaMobileAlt/>,
        title: "Web Responsiveness",
        description: 
        <>        
        <span>After creating the actual website, I make sure that it will look good on different screen sizes such as mobile, tablet, laptop, and desktop. This is to make sure that the content of the website will be delivered to the users accordingly. Also, it makes the website looks more professional.</span>
        </>
    }
]
