import React from "react";


const Awards = () => {
    return (
        <div className={""} id={"awards"}>
            <div className={"flex space-x-7 items-center"}>
                <div className={"gradient-color-2 text-5xl font-semibold"}>Awards</div>
                <div className={"hidden md:block w-full mt-2 border-b-[0.25px] border-gray-400"}></div>
            </div>
            <div className={"py-10"}>
                {/*<div className={"flex flex-col md:flex-row md:space-x-10 justify-around w-full"}>*/}
                {/*</div>*/}
                {/*<div className={"flex flex-col md:flex-row justify-around w-full"}>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Awards;