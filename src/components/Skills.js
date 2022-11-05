import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode, faDatabase, faGears, faCheck, faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";


const SkillSet = (props) => {
    return (
        <div className={"py-5 px-8"}>
            <div
                className={"flex items-center space-x-2"}>
                <FontAwesomeIcon icon={props.icon} size={"lg"}/>
                <div className={"text-2xl font-semibold"}>{props.title}</div>
            </div>
            <ul className={"mt-4 space-y-2"}>
                {props.skills.map((skill, i) =>
                    <li key={i} className={"flex space-x-2 text-[#ccd6f6] items-center"}>
                        <FontAwesomeIcon icon={faCheck} size={"sm"} className={"text-cpgreen-50"}/>
                        <span className={"text-md"}>{skill.name}</span>
                    </li>
                )}
            </ul>
        </div>
    );
}

const Skills = () => {
    const skills = {
        dataAnalysisAndML: [
            {name: "Python / Pandas / NumPy"},
            {name: "R"}
        ],
        frontEnd: [
            {name: "JavaScript / React / D3.js / jQuery"},
            {name: "CSS / Tailwind CSS / Bootstrap"},
            {name: "HTML"}
        ],
        backEnd: [
            {name: "Django"},
            {name: "PHP"},
        ],
        dataBases: [
            {name: "SQL / Sqlite"},
        ],
        programming: [
            {name: "Python"},
            {name: "C"},
            {name: "x86 Assembly"}
        ],
        tools: [
            {name: "Git / GitHub"},
            {name: "Jetbrains"},
            {name: "Jupyter"},
            {name: "Suite Office"},
            {name: "Notion"},
        ]
    }

    return (
        <div className={""} id={"skills"}>
            <div className={"flex space-x-7 items-center"}>
                <div className={"gradient-color-2 text-5xl font-semibold"}>Skills</div>
                <div className={"hidden md:block w-full mt-2 border-b-[0.25px] border-gray-400"}></div>
            </div>
            <div className={"py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"}>
                <SkillSet title={"Data Analysis & Machine Learning"} skills={skills.dataAnalysisAndML}
                          icon={faDatabase}/>
                <SkillSet title={"Front-End Development"} skills={skills.frontEnd} icon={faLaptopCode}/>
                <SkillSet title={"Back-End Development"} skills={skills.backEnd} icon={faDatabase}/>
                <SkillSet title={"Databases"} skills={skills.dataBases} icon={faDatabase}/>
                <SkillSet title={"Programming Languages"} skills={skills.programming} icon={faGears}/>
                <SkillSet title={"Tools"} skills={skills.tools} icon={faScrewdriverWrench}/>

            </div>
        </div>
    );
}


export default Skills;
