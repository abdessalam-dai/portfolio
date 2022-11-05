import React from "react";

import {useState, useEffect} from 'react';
import Scrollspy from 'react-scrollspy';


const Navigation = () => {
    const [navVisible, setNavVisible] = useState(false);
    const [animationClass, setAnimationClass] = useState('animate-hide');

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    });

    const listenToScroll = () => {
        let heightToShowFrom = 60;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > heightToShowFrom) {
            !navVisible &&      // to limit setting state only the first time
            setNavVisible(true);
            setAnimationClass('animate-show');
        } else {
            setNavVisible(false);
            setAnimationClass('animate-hide');
        }
    };

    return (
        <>
            <div className={`navigation invisible md:visible fixed ${animationClass} z-30 top-0 left-12 flex items-center h-screen`} id={"navigation"}>
                <Scrollspy items={['about', 'projects', 'skills', 'education', 'certifications', 'awards', 'contact']}
                           currentClassName="active-nav-link"
                           className={"flex flex-col space-y-5"}
                >
                    <li>
                        <a href={"#about"}
                           title={"About"}>
                        </a>
                    </li>
                    <li>
                        <a href={"#projects"}
                           title={"Projects"}>
                        </a>
                    </li>
                    <li>
                        <a href={"#skills"}
                           title={"Skills"}>
                        </a>
                    </li>
                    <li>
                        <a href={"#education"}
                           title={"Education"}>
                        </a>
                    </li>
                    <li>
                        <a href={"#certifications"}
                           title={"Certifications"}>
                        </a>
                    </li>
                    {/*<li>*/}
                    {/*    <a href={"#awards"}*/}
                    {/*       title={"Awards"}>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    <li>
                        <a href={"#contact"}
                           title={"Contact"}>
                        </a>
                    </li>
                </Scrollspy>
            </div>
        </>
    );
}

export default Navigation;