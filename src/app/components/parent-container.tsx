import React from "react";

import Link from "next/link";

function NavLink({ path, text, currentPath }: { path: String, text: String, currentPath: String }) {
    let currentPathClass = currentPath === path ? "text-green-500 underline font-bold" : "text-white hover:text-green-500 hover:font-bold hover:underline";

    return (
        <Link href={`/${path}`}>
            <text className={`text-xl font-mono ${currentPathClass}`}>
                {text}
            </text>
        </Link>
    )
}

function TopNav({ path, show }: { path: String, show: Boolean }) {
    return !show ? <></> : (
        <section className="h-14 p-6 pt-6 flex justify-between items-center">
            <Link href="/">
                <div className="flex justify-between items-center px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" fill="white" className="w-10 h-10 pt-1 hover:fill-green-500">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                </div>
            </Link>
            <div className="w-2/5 pr-6 flex justify-between items-center">
                {["About", "Blogs", "Projects", "Work", "Contact"].map(val => (
                    <NavLink path={val.toLowerCase()} text={val} currentPath={path} />
                ))}
            </div>
        </section>
    );
}


export default function ParentContainer({ show, path, children }: { show: Boolean, path: String, children: React.ReactNode }) {
    const lowerDivHeight = show ? "h-[calc(100vh-3.5rem)]" : "h-screen h-full";
    return (
        <main className="min-h-screen max-h-screen h-screen">
            <TopNav show={show} path={path} />
            <div className={`${lowerDivHeight} border border-white border-solid`}>
                {children}
            </div>
        </main>
    )
}