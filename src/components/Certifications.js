import React from "react";

import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SkillSet = (props) => {
    return (
        <div className={"py-5 px-8"}>
            <div
                className={"flex items-center space-x-2"}>
                <div className={"text-2xl font-semibold"}>{props.title}</div>
            </div>
            <ul className={"mt-4 space-y-2"}>
                {props.certificates.map((certificate, i) =>
                    <li key={i} className={"flex space-x-2 text-[#ccd6f6] items-center"}>
                        <FontAwesomeIcon icon={faCaretRight} size={"sm"} className={"text-cpgreen-50"} />
                        <a href={certificate.link}
                            target={"_blank"}
                            rel="noreferrer"
                            className={"text-md hover:text-cpgreen-50 transition-all"}>{certificate.name}</a>
                    </li>
                )}
            </ul>
        </div>
    );
}

const Certifications = () => {
    const certificates = {
        mlAndDl: [
            {
                name: "Data Analyst Nanodegree",
                link: "https://graduation.udacity.com/confirm/GYRKEHLZ"
            },
            {
                name: "Machine Learning",
                link: "https://www.coursera.org/account/accomplishments/certificate/JW3UV7L8RKGD"
            },
            {
                name: "Neural Networks and Deep Learning",
                link: "https://www.coursera.org/account/accomplishments/certificate/K4YQC4J8MXG9"
            },
            {
                name: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
                link: "https://www.coursera.org/account/accomplishments/certificate/KVHKNG4YY6BE"
            },
            {
                name: "Intermediate Machine Learning",
                link: "https://www.kaggle.com/learn/certification/abdessalamdai/intermediate-machine-learning"
            },
            {
                name: "Intro to Machine Learning",
                link: "https://www.kaggle.com/learn/certification/abdessalamdai/intro-to-machine-learning"
            }
        ],
        webDev: [
            {
                name: "Web Application Technologies and Django",
                link: "https://www.coursera.org/account/accomplishments/certificate/ZRMPJDFTPA2G"
            },
            {
                name: "Front-End Web Development with React",
                link: "https://www.coursera.org/account/accomplishments/certificate/SZJ8J42XRJUY"
            },
        ],
        programming: [
            {
                name: "Python Programming Basic",
                link: "https://ilearningx.huawei.com/portal/certificates/cb218a46e1b042169a466933d4970764"
            },
        ]
    }

    return (
        <div className={""} id={"certifications"}>
            <div className={"flex space-x-7 items-center"}>
                <div className={"gradient-color-2 text-5xl font-semibold"}>Certifications</div>
                <div className={"hidden md:block w-full mt-2 border-b-[0.25px] border-gray-400"}></div>
            </div>
            <div className={"py-10"}>
                <div className={"grid grid-cols-1 md:grid-cols-2"}>
                    <SkillSet title={"Machine Learning"} certificates={certificates.mlAndDl} />
                    <SkillSet title={"Web Development"} certificates={certificates.webDev} />
                    <SkillSet title={"Programming"} certificates={certificates.programming} />
                </div>
            </div>
        </div>
    );
}


export default Certifications;
