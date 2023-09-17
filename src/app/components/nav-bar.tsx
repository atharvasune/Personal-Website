"use client";
import { useState } from "react";
import Link from "next/link";

function NavLink({ path, text, currentPath }: { path: String, text: String, currentPath: String }) {
    let currentPathClass = currentPath === path ? "text-green-500 underline font-bold" : "text-white hover:text-green-500 hover:font-bold hover:underline";

    return (
        <Link href={`/${path}`}>
            <div>
                <text className={`text-xl font-mono ${currentPathClass}`}>
                    {text}
                </text>
            </div>
        </Link>
    )
}

export default function Navbar({ path, show }: { path: String, show: Boolean }) {
    const [open, setOpen] = useState(false);
    return !show ? <></> : (
        <>
            <nav className="h-14 p-6 pt-6 flex justify-between items-center border-b border-b-gray-400">
                <Link href="/">
                    <div className="flex justify-between items-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" fill="white" className="w-10 h-10 pt-1 hover:fill-green-500">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                    </div>
                </Link>
                <button className="lg:hidden hover:border hover:border-gray-400 p-2" onClick={() => setOpen(!open)}>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 17 14">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`hidden p-2 lg:w-2/5 lg:pr-6 lg:flex lg:justify-between lg:items-center lg:border-black`}>
                    {["About", "Blogs", "Projects", "Work", "Contact"].map((val, idx) => (
                        <NavLink path={val.toLowerCase()} text={val} currentPath={path} key={idx} />
                    ))}
                </div>
            </nav>
            <div className={`${!open ? "invisible fixed max-h-0" : "fixed visible max-h-96"} mt-1 overflow-hidden transition-all duration-[650ms] ease-in-out w-[94%] left-[3%] mx-auto bg-gray-800 z-20 border-b border-gray-500 lg:hidden rounded-xl`}>
                {["About", "Blogs", "Projects", "Work", "Contact"].map((val, idx) => (
                    <div key={idx} className={`w-full border-gray-500 p-3 ${val === "Contact"? "" : "border-b"} text-center`}>
                        <NavLink path={val.toLowerCase()} text={val} currentPath={path}  />
                    </div>
                ))}
            </div>
        </>
    );
}