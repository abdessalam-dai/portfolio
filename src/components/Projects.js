import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';

import Carousel from 'better-react-carousel'

import tmdb1 from "../assets/imgs/projects/TMDb/1.png";
import tmdb2 from "../assets/imgs/projects/TMDb/2.png";
import tmdb3 from "../assets/imgs/projects/TMDb/3.png";
import tmdb4 from "../assets/imgs/projects/TMDb/4.png";
import tmdb5 from "../assets/imgs/projects/TMDb/5.png";

import weratedogs1 from "../assets/imgs/projects/WeRateDogs/1.png";
import weratedogs2 from "../assets/imgs/projects/WeRateDogs/2.png";

import pisa1 from "../assets/imgs/projects/PISA2012/1.png";
import pisa2 from "../assets/imgs/projects/PISA2012/2.png";
import pisa3 from "../assets/imgs/projects/PISA2012/3.png";
import pisa4 from "../assets/imgs/projects/PISA2012/4.png";
import pisa5 from "../assets/imgs/projects/PISA2012/5.png";


import vsfsd1 from "../assets/imgs/projects/vsfsd/1.jpg";
import vsfsd2 from "../assets/imgs/projects/vsfsd/2.png";
import vsfsd3 from "../assets/imgs/projects/vsfsd/3.png";
import vsfsd4 from "../assets/imgs/projects/vsfsd/4.png";
import vsfsd5 from "../assets/imgs/projects/vsfsd/5.png";
import vsfsd6 from "../assets/imgs/projects/vsfsd/6.png";
import vsfsd7 from "../assets/imgs/projects/vsfsd/7.png";
import vsfsd8 from "../assets/imgs/projects/vsfsd/8.png";
import vsfsd9 from "../assets/imgs/projects/vsfsd/9.png";
import vsfsd10 from "../assets/imgs/projects/vsfsd/10.png";
import vsfsd11 from "../assets/imgs/projects/vsfsd/11.png";
import vsfsd12 from "../assets/imgs/projects/vsfsd/12.png";


import chexam1 from "../assets/imgs/projects/chexam/1.jpg";
import chexam2 from "../assets/imgs/projects/chexam/2.jpg";
import chexam3 from "../assets/imgs/projects/chexam/3.jpg";
import chexam4 from "../assets/imgs/projects/chexam/4.jpg";
import chexam5 from "../assets/imgs/projects/chexam/5.jpg";
import chexam6 from "../assets/imgs/projects/chexam/6.jpg";
import chexam7 from "../assets/imgs/projects/chexam/7.jpg";
import chexam8 from "../assets/imgs/projects/chexam/8.jpg";


import mars_rover1 from "../assets/imgs/projects/mars_rover/1.png";


const Project = (props) => {
    return (
        <div className={"project bg-[#132648] shadow-md p-7"}>
            <div
                className={`flex flex-col space-y-5 ${props.keyNum % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center project-body`}>
                <div className={"w-full md:w-1/2"}>
                    {props.project.images.length > 0 &&
                    <Carousel cols={1} rows={1} gap={10} showDots={true} dotColorActive={'#64ffda'} loop>
                        {props.project.images.map((image, i) =>
                            <Carousel.Item key={i} className={"flex justify-center items-center"}>
                                <img src={image} alt={""} className={"w-full h-full"}/>
                            </Carousel.Item>
                        )}
                    </Carousel>
                    }
                </div>
                <div className={"flex flex-col space-y-5 w-full md:w-1/2 px-0 md:px-8"}>
                    <div className={"project-name text-2xl font-semibold text-right "}>{props.project.name}</div>
                    <div className={"leading-6 text-[#ccd6f6] text-md"}>
                        <p>
                            {props.project.description}
                        </p>
                    </div>
                    <div className={"text-center flex justify-center space-x-3"}>
                        {
                            props.project.link !== "#" &&
                            <a href={props.project.link}
                               target={"_blank"}
                               rel="noreferrer"
                               className={`btn-slide mt-1 py-2 px-4 text-sm border-[1px] border-cpgreen-50 font-medium`}>
                                Link <FontAwesomeIcon className={"ml-1"} icon={faArrowUpRightFromSquare}/>
                            </a>
                        }

                        <a href={props.project.gitHubLink}
                           target={"_blank"}
                           rel="noreferrer"
                           className={"btn-slide mt-1 py-2 px-4 text-sm border-[1px] border-cpgreen-50 font-medium"}>
                            GitHub <FontAwesomeIcon className={"ml-1"} icon={faCode}/>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <ul className={"flex flex-row flex-wrap space-x-3 text-[#ccd6f6] text-sm justify-center mt-7"}>
                    {props.project.technologies.map((technology, i) =>
                        <li className={"hover:text-cpgreen-100 transition-all"} key={i}>{technology}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}


const Projects = () => {
    const projects = [
        {
            name: "Data Analysis: PISA survey",
            description: "In addition to examining differences between countries and genders, I also analyzed the effects of parental companionship on student success in the PISA survey dataset. I looked at how students with different levels of parental involvement performed on various measures of skills and knowledge, and how these performance differences varied by country and gender.",
            link: "#",
            linkDisplay: "No link",
            gitHubLink: "https://github.com/abdessalam-dai/PISA2012",
            technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
            images: [
                pisa1, pisa2, pisa3, pisa4, pisa5
            ]
        },
        {
            name: "Data Wrangling: WeRateDogs Twitter",
            description: "The WeRateDogs dataset contains information about tweets featuring dog ratings and photos. Additional data was collected using the Requests and Tweepy libraries and was then cleaned and analyzed using various techniques to generate insights and conclusions. These insights can be used to answer questions about dog ratings on Twitter, including which breeds are most popular and which ratings are most common.",
            link: "#",
            linkDisplay: "No link",
            gitHubLink: "https://github.com/abdessalam-dai/WeRateDogs-Twitter",
            technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Requests", "Tweepy"],
            images: [
                weratedogs1, weratedogs2
            ]
        },
        {
            name: "Data Investigation: TMDb movies",
            description: "I performed necessary data cleaning on the dataset, " +
                "and then analyzed it to answer a variety of questions. " +
                "These included movie release trends," +
                "actor and director prevalence, production companies, genre popularity and success, " +
                "and relationships between different factors. " +
                "Through this analysis, " +
                "I was able to gain a better understanding of " +
                "the movie industry and identify trends and patterns within the data.",
            link: "#",
            linkDisplay: "No link",
            gitHubLink: "https://github.com/abdessalam-dai/TMDb-Movies",
            technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
            images: [
                tmdb1, tmdb2, tmdb3, tmdb4, tmdb5
            ]
        },
        {
            name: "Library management system",
            description: "We designed and implemented a database to store and manage information on a wide range of library resources, as well as user information for both library staff and members. We also developed a Python console application to allow for the management of library activities, including cataloging, consultations, user management, and loans. Using the database, we created statistics on borrowed documents, which allowed us to generate lists of popular documents and gain insights into library usage patterns. ",
            link: "#",
            linkDisplay: "No link",
            gitHubLink: "https://gitlab.utc.fr/daiabdes/nf18_td3_g2_a22",
            technologies: ["Python", "PostgreSQL", "UML"],
            images: [

            ]
        },
        {
            name: "Chexam",
            description: "Chexam is a combination of two words: Check + Exam. " +
                "It was developed during the Code-Rally hackathon " +
                "at ESTIN B??jaia, where my team has won the first place. " +
                "Chexam is a Web application where teachers can publish copies of exams. " +
                "It provides students with fast and unlimited access to their scanned copies, " +
                "allowing them to understand their mistakes.",
            link: "#",
            linkDisplay: "No link",
            gitHubLink: "https://github.com/abdessalam-dai/SmashingBugs/",
            technologies: ["Python", "Django", "OpenCV", "SQLite", "Tailwind CSS", "JavaScript"],
            images: [
                chexam2, chexam1, chexam3, chexam4, chexam5, chexam6,
                chexam7, chexam8,
            ]
        },
        {
            name: "Visual SFSD",
            description: "For a period of 3 months, me and a group of students built Visual SFSD " +
                "during our 4th semester at ESTIN as a school project. " +
                "Visual SFSD is a Web application made to help computer science students around the globe " +
                "to visualize file structures at its base level, it provides a set of " +
                "algorithms and tools to test with and most importantly visualize with. SFSD is a shortcut " +
                'term for "File & Data Structures".',
            link: "https://vsfsd.estin.dz/",
            linkDisplay: "vsfsd.estin.dz",
            gitHubLink: "https://github.com/abdessalam-dai/Visual-SFSD",
            technologies: ["JavaScript", "D3.js", "Tailwind CSS", "Django", "SQLite"],
            images: [
                vsfsd9, vsfsd1, vsfsd2, vsfsd3, vsfsd4, vsfsd5, vsfsd6,
                vsfsd7, vsfsd8, vsfsd10, vsfsd11, vsfsd12
            ]
        },
        {
            name: "Mars Rover",
            description: "Mars Rover is a contest that was organized by Sololearn " +
                "in which I ranked 3rd among hundreds of contestants. " +
                "A rover is a space exploration vehicle designed to move across the surface of a planet, " +
                "they can collect dust, rocks, and take pictures. " +
                "This project allows us to simulate and visualize an " +
                "autonomous rover by implementing its CPM (Command Processing Module). " +
                "The CPM allows to control the rover remotely.",
            link: "https://mars-rover-sl-contest.netlify.app/",
            linkDisplay: "mars-rover-sl-contest.netlify.app",
            gitHubLink: "https://github.com/abdessalam-dai/Mars-Rover-Sololearn-Contest",
            technologies: ["JavaScript", "jQuery", "HTML5", "CSS3"],
            images: [
                mars_rover1
            ]
        },
    ];

    return (
        <div className={"section mt-10"} id={"projects"}>
            <div className={"flex space-x-7 items-center"}>
                <div className={"gradient-color-2 text-5xl font-semibold"}>Projects</div>
                <div className={"hidden md:block w-full mt-2 border-b-[0.25px] border-gray-400"}></div>
            </div>
            <div className={"projects-container flex flex-col space-y-10 md:space-y-16 py-14"}>
                {projects.map((project, i) =>
                    <Project project={project} key={i} keyNum={i}/>
                )}
            </div>
        </div>
    );
}


export default Projects;
