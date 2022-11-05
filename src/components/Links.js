import React from "react";

const Links = () => {
    return (
        <div className={"hidden md:block fixed z-30 bottom-10 right-10"}>
            <ul className={"flex flex-col space-y-5"}>
                <li>
                    <a href={"https://github.com/abdessalam-dai/"}
                       title={"GitHub"}
                       target={"_blank"}
                       rel="noreferrer"
                       className={"text-[#ccd6f6] hover:text-white transition-all"}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="icon icon-tabler icon-tabler-brand-github"
                             width="28" height="28" viewBox="0 0 24 24" strokeWidth={"2"} stroke="currentColor"
                             fill="none" strokeLinecap={"round"} strokeLinejoin={"round"}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href={"https://www.linkedin.com/in/abdessalam-dai"}
                       title={"LinkedIn"}
                       target={"_blank"}
                       rel="noreferrer"
                       className={"text-[#ccd6f6] hover:text-white transition-all"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin"
                             width="28" height="28" viewBox="0 0 24 24" strokeWidth={"2"} stroke="currentColor"
                             fill="none" strokeLinecap={"round"} strokeLinejoin={"round"}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                            <line x1="8" y1="11" x2="8" y2="16"></line>
                            <line x1="8" y1="8" x2="8" y2="8.01"></line>
                            <line x1="12" y1="16" x2="12" y2="11"></line>
                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href={"mailto:abdessalam.dai@gmail.com"}
                       title={"Email"}
                       className={"text-[#ccd6f6] hover:text-white transition-all"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-at" width="28"
                             height="28" viewBox="0 0 24 24" strokeWidth={"2"} stroke="currentColor" fill="none"
                             strokeLinecap={"round"} strokeLinejoin={"round"}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Links;