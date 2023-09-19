

export default function Tab({ name, id, activeId, setActiveId }: { name: string, id: number, activeId: number, setActiveId: any }) {
    return (
        <div onClick={() => setActiveId(id)} className={`rounded-xl h-full py-1 px-2 text-white min-w-[20%] text-center ${activeId === id ? "flex-grow-2" : "flex-grow-1"} ${activeId === id ? " bg-gray-600" : "hover:bg-gray-600"} ${activeId === id ? "text-xl font-mono" : "text-lg font-sans hover:text-xl hover:font-mono"}`}>
            <text>
                {name}
            </text>
        </div>
    )
}