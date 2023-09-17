
import React from "react";
import Navbar from "./nav-bar";



export default function ParentContainer({ show, path, showBorder, className, children }: { show: Boolean, path: String, showBorder: Boolean, className?: string, children: React.ReactNode }) {
    const lowerDivHeight = show ? "h-[calc(100vh-3.5rem)]" : "h-screen h-full";
    const borderClasses = showBorder ? "border border-white border-solid" : "";
    return (
        <main className="min-h-screen max-h-screen h-screen transition-transform duration-300 ease-linear" suppressHydrationWarning>
            <Navbar show={show} path={path} />
            <div className={`${lowerDivHeight} ${borderClasses} overflow-y-auto ${className}`}>
                {children}
            </div>
        </main>
    )
}