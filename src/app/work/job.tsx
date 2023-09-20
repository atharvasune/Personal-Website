import { Job } from "@/types";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "300", style: "normal", subsets: ["latin"] });

function Project({ proj }: { proj: any }) {
    return (
        <div className="w-full md:w-[80%] lg:w-[75%] pl-2 md:pl-4 lg:pl-8 py-2 text-justify text-white">
            <div className="text-lg text-white">
                {proj.projectName}
            </div>
            <hr className="mb-2" />
            <div>
                {proj.description}
            </div>
            <div className="flex justify-start items-center w-full flex-wrap p-2 pl-0 pt-1">
                {proj.techStack.map((tech: any, idx: number) => (
                    <div key={idx} className="rounded-full text-sm mr-2 bg-gray-500 text-black px-2 py-1 mb-1 md:mb-0">
                        #{tech}
                    </div>
                ))}
            </div>
        </div>
    )
}


function Role({ role }: { role: any }) {
    return (
        <div className={`w-full text-white ${roboto.className}`}>
            <div className="text-white font-mono text-xl font-medium">
                {role.role}
            </div>
            <div className="text-white font-sans text-base itaclic font-thin">
                {role.team}
            </div>
            <hr className="w-full md:w-[80%] mt-1"/>
            {role.projects.map((proj: any, idx: number) => (
                <Project proj={proj} key={idx} />
            ))}

        </div>
    )
}

export default function Job({ job, isActive }: { job: any, isActive: boolean }) {
    return (
        <div className={`${isActive ? "block" : "hidden"} mx-auto w-[100%] md:w-[90%] rounded-xl h-full flex flex-col overflow-y-auto`}>
            <section id="general" className="w-full flex-grow-0 text-center rounded-lg mb-2 bg-[#28282B]">
                <div className="w-full text-white font-mono text-2xl mb-1">
                    {job.company}
                </div>
                <div className={"text-white italic text-base " + roboto.className}>
                    {job.started} - {job.isCurrent ? "Present" : job.ended}
                </div>
            </section>

            <section id="roles" className="w-full flex-grow overflow-y-auto border border-gray-950 p-2 lg:p-6 rounded-lg bg-[#28282B]">
                {job.roles.map((role: any, idx: number) => (
                    <Role role={role} key={idx} />
                ))}
            </section>
        </div>
    )
}