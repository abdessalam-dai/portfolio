import React from "react";

const Contact = () => {
    return (
        <div className={"py-12 border-t-[0.25px] border-gray-400"} id={"contact"}>
            <div className={"gradient-color-2 text-6xl text-center mt-7 font-semibold"}>Get In Touch</div>

            <div className={"text-center w-2/3 mt-2 mx-auto"}>
                <p className={"leading-8 text-xl text-[#ccd6f6]"}>
                    Have a question or want to work together ?
                </p>
                <div className={"mt-8"}>
                    <a href="mailto:abdessalam.dai@gmail.com"
                       className={'btn-slide py-3 px-6 text-md border-[1px] border-cpgreen-50 font-medium'}>
                        Contact</a>
                </div>
            </div>

        </div>
    );
}


export default Contact;