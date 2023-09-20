"use client";

import ParentContainer from "@/components/parent-container";
import Image from "next/image";
import Tab from "@/components/tab";
import { AboutMe, TechnicalSkills } from "./sections";
import React from "react";



export default function About() {
    const [activeId, setActiveId] = React.useState(0);

    return (
        <ParentContainer show={true} path={"about"} showBorder={false} className="overflow-y-auto md:overflow-hidden md:flex overflow-clip transition-all ease-in-out duration-500">
            <div className="w-[90%] mx-auto md:w-1/2 lg:w-2/5 h-fit my-3 md:my-0 md:h-full flex justify-center items-center flex-col">
                <div className="relative w-[100%] md:w-[70%] 2xl:w-[60%] aspect-[0.76] rounded-xl md:my-auto ">
                    <Image
                        src="https://lh3.googleusercontent.com/pw/AIL4fc-G6KBl3vFwWrJ4M5_xI0dMeleOF7JKrsyXFm5nBTbjXOweClrxK1asBwwgLgUSEAKSklmqXjWzV89kW9urfFusMlSw0LTXA4niiuk31yjaQ5dO2GaB2W0LelmpS6NFzydWpd3mm7XOC5naYBgjDIkfSQ=w797-h1063-s-no"
                        alt="Atharva Sune"
                        fill
                        className="rounded-xl aspect-auto"
                    />
                </div>
            </div>
            
            <div className="w-full md:w-1/2 lg:w-3/5 h-full flex justify-start items-center flex-col p-2">
                <div id="tab-container" className="w-full min-h-[50px] h-[7%] md:h-[5%] flex justify-around bg-[#28282B] rounded-md mb-[1%] p-2">
                    {["About", "Technical Skills"].map((tabName, idx) => <Tab key={idx} name={tabName} id={idx} activeId={activeId} setActiveId={setActiveId}/>)}
                </div>
                <div className="w-full text-center mx-auto p-3 h-fit md:h-[94%] bg-[#28282B] rounded-lg md:overflow-y-auto">
                    <AboutMe isActive={activeId === 0} />
                    <TechnicalSkills isActive={activeId == 1} />
                </div>
            </div>
        </ParentContainer>
    )
}