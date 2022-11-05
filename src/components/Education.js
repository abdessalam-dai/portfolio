import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker, faCalendar} from "@fortawesome/free-solid-svg-icons";


const School = (props) => {
    return (
        <li className={"flex bg-[#132648] shadow-md p-7"}>
            <div className={"flex flex-col space-y-2 justify-between  pb-3"}>
                <div className={"flex flex-col space-y-1"}>
                    <span className={"font-semibold text-lg"}>
                    <a href={props.website}
                       target={"_blank"}
                       rel={"noreferrer"}>
                        {props.name}
                    </a>
                </span>
                    <div className={"text-[#ccd6f6] font-bold"}>{props.diploma}</div>
                    <div className={"flex space-x-2 text-[#ccd6f6]"}>
                        <span className={""}>Classes: </span>
                        <div>{props.classes}</div>
                    </div>
                </div>

                <div className={"flex flex-col space-y-2 md:space-y-0 pt-2 text-sm md:flex-row md:justify-between"}>
                    <div className={"flex space-x-2 items-center  text-[#ccd6f6]"}>
                        <FontAwesomeIcon icon={faCalendar} className={"text-sm text-cpgreen-50"}></FontAwesomeIcon>
                        <span>{props.start} - {props.end}</span>
                    </div>
                    <div className={"flex space-x-2 items-center  text-[#ccd6f6]"}>
                        <FontAwesomeIcon icon={faMapMarker} className={"text-sm text-cpgreen-50"}></FontAwesomeIcon>
                        <span>{props.location}</span>
                    </div>
                </div>
            </div>
        </li>
    );
}

const Education = () => {
    return (
        <div className={""} id={"education"}>
            <div className={"flex space-x-7 items-center"}>
                <div className={"gradient-color-2 text-5xl font-semibold"}>Education</div>
                <div className={"hidden md:block w-full mt-2 border-b-[0.25px] border-gray-400"}></div>
            </div>
            <div className={"flex py-10"}>
                <ul className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
                    <School name={"University of Technology of Compiègne (UTC)"}
                            website={"https://www.utc.fr/"}
                            diploma={"Engineering degree in Computer Science"}
                            classes={"Databases, Artificial Intelligence, Data structures, Statistics"}
                            start={"2022"}
                            end={"2025"}
                            location={"Compiègne, France"}
                    />
                    <School name={"Higher School of Computer Science and Technologies (ESTIN)"}
                            website={"https://www.estin.dz/"}
                            diploma={"Preparatory Class in Computer Science"}
                            classes={"Algorithms, File structures, Object oriented programming, Computer architecture, Linux, x86 Assembly, Calculus, Linear algebra, Probabilities, Mathematical logic"}
                            start={"2020"}
                            end={"2022"}
                            location={"Bejaia, Algeria"}
                    />
                </ul>
            </div>
        </div>
    );
}


export default Education;