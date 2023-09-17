import Image from "next/image"
export default async function ProjectCard({ projectName, languages, githubUrl, description, imgURL }: { projectName: string, languages: Object[], githubUrl: string, description: string | null, imgURL: string }) {
    return (
        <div suppressHydrationWarning className={`lg:w-2/3 w-3/4 border-2 bg-black border-gray-400 rounded-md min-h-[400px] flex flex-col justify-between relative scale-100 transition-all duration-500 ease-in-out md:hover:scale-[1.1] md:hover:transition-all md:hover:duration-500 md:hover:ease-in-out md:hover:shadow-lg md:hover:shadow-gray-500`}>
            <Image src={imgURL} fill className="-z-30" alt="Some background image"/>
            <div className="h-full w-full bg-black -z-10 fixed bg-opacity-60 rounded-md" /> 
            {/* <div className="w-full h-full -z-10 " /> */}
            <div className="w-full p-2">
                <div>
                    <text className="lg:text-xl xl:text-2xl font-mono text-white break-all">
                        {projectName}
                    </text>
                </div>
                <div className="py-2">
                    <text className="font-sans text-white">
                        {description}
                    </text>
                </div>
                <div className="w-full flex justify-start">
                    {Object.keys(languages).map((lang) => (
                        <div className="bg-slate-400 px-2 py-1 rounded-full text-sm mx-1 my-1">
                            {lang}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-center items-center p-2">
                <a href={githubUrl} target="_blank" className="rounded-full py-2 px-3 bg-indigo-600 hover:bg-indigo-400">
                    <text className="text-base font-sans text-white">
                        View Project
                    </text>
                </a>
            </div>
        </div>
    )
}