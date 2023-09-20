"use client";
import ParentContainer from "@/components/parent-container";
import Tab from "@/components/tab";
import React from 'react';
import companies from "./companies.json";
import Job from "./job";

export default function Work() {
    const [activeId, setActiveId] = React.useState(0);

    return (
        <ParentContainer show={true} path={"work"} showBorder={false} className="p-2">
            <div id="tab-container" className="w-full min-h-[50px] h-[7%] md:h-[5%] flex justify-around bg-[#28282B] rounded-md mb-[1%] p-2">
                    {["Oracle", "Amazon"].map((tabName, idx) => <Tab key={idx} name={tabName} id={idx} activeId={activeId} setActiveId={setActiveId}/>)}
            </div>            
            <div className="overflow-y-auto w-full mx-auto p-0.5 md:p-3 h-[91%]  rounded-lg">
                {companies.map((company, idx) => (
                    <Job key={idx} job={company} isActive={activeId == idx} />
                ))}
            </div>
        </ParentContainer>
    )
}