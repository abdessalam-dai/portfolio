import React from "react";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";


const About = () => {
    return (
        <div className={"section flex flex-row justify-center w-full h-auto md:h-[calc(100vh_-_75px)]"}
             id={"about"}>
            <div className={"flex flex-col justify-between w-full md:w-2/3"}>
                <div className={"pt-16"}>
                    <div className={"text-md text-[#ccd6f6] relative mb-6"}>
                        <div
                            className={"w-9 h-9 z-10 absolute -top-2 -left-2 opacity-90 bg-cpgreen-50 rounded-full"}></div>
                        <span className={"z-20 absolute top-0 left-2"}><span className={"text-gray-800"}>HE</span>LLO THERE. I'M</span>
                    </div>
                    <div className={"ml-10 gradient-color-1 text-5xl text-[#e1e4f0] font-semibold"}>Abdessalam Dai</div>
                    <div className={"ml-10 text-md text-gray-300 font-semibold"}>COMPUTER SCIENCE STUDENT - 3rd Year</div>
                    <p className={"mt-6 leading-8 text-[#ccd6f6] text-lg"}>
                        I'm currently in my third year of Computer Science at the
                        <a href={"https://www.utc.fr/"} className={"text-cpgreen-50"} target={"_blank"} rel="noreferrer"> University of Technology of Compiègne</a>.
                         I'm a driven individual who has a passion for learning about AI and data science. I have a lot of experience in web development. I can effectively work in a team and have strong problem-solving abilities.
                    </p>
                </div>
                <div className={"hidden md:block text-center w-full"}>
                    <a href={"#projects"}
                       className={"block w-40 mx-auto py-3 px-5 text-sm font-medium"}>
                        <div>LEARN MORE</div>
                        <FontAwesomeIcon icon={faChevronDown} className={"mt-1.5"} size={"lg"}/>
                    </a>
                </div>
            </div>
        </div>
    );
}


export default About;
