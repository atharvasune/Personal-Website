import Image from "next/image"

export default async function BlogCard({ title, tags, img, mediumLink }: { title: string, tags: string[], img?: string, mediumLink: string }) {
    const headers = new Headers()
    headers.append("Authorization", process.env.PEXELS_API_KEY ? process.env.PEXELS_API_KEY : "");
    if (img === undefined) {
        const response = await (await fetch("https://api.pexels.com/v1/curated", {
            headers: headers
        })).json()
        img = response['photos']["url"];
    }
    return (
        <div className="sm:flex justify-around w-11/12 lg:w-7/12 items-center xl:w-[50%] 2xl:w-[34%] mx-auto md:p-2 px-0  border border-gray-500 max-w-full rounded my-14 scale-100 transition-all duration-500 ease-in-out md:hover:scale-[1.1] md:hover:transition-all md:hover:duration-500 md:hover:ease-in-out md:hover:shadow-lg md:hover:shadow-gray-500">
            <div className="relative w-full h-[255px] rounded-t sm:w-[305px] lg:w-[225px] sm:h-[225px]">
                <Image
                    src={img ? img : ""}
                    fill
                    alt="Image of Blog"
                    className="rounded"
                />
            </div>

            <section className="p-1 w-full lg:w-[55%] lg:max-w-2/3 h-[200px] flex flex-col lg:items-start items-center justify-around">
                <div>
                    <text className="text-white text-xl md:text-2xl font-mono underline mb-1">
                        {title}
                    </text>
                </div>
                <div className="flex justify-start flex-wrap items-start">
                    {tags.map((tag, idx) => (
                        <div className="bg-slate-400 px-2 py-1 rounded-full text-sm mx-1 my-1" key={idx}>
                            #{tag}
                        </div>
                    ))}
                </div>
                <div className="p-0.5 mx-auto flex justify-center w-full lg:justify-center mt-3">
                    <a href={mediumLink} className="rounded-full py-1 px-3.5 bg-green-700 hover:bg-green-500-400 text-white font-mono text-lg" target="_blank">
                        Read More..
                    </a>
                </div>
            </section>

        </div>
    )
}