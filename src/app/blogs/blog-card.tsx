import Image from "next/image"

export default async function BlogCard() {

    return (
        <div className="flex justify-between items-center p-2 w-full min-w-full max-w-full border-b-gray-500 border rounded-b my-14">
            <Image
                src={"https://images.pexels.com/photos/10229299/pexels-photo-10229299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                width={275}
                height={275}
                alt="Image of Blog"
                className="rounded"
            />

            <section className="p-1 w-3/5 max-w-3/5 lg:w-2/3 lg:max-w-2/3">
                <div className="p-1">
                    <div>
                        <text className="text-white text-2xl font-mono underline mb-1">
                            Blog Post 1
                        </text>
                    </div>
                    <div>
                        <text className="break-words text-white mt-1 font-sans">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum sagittis risus, et vulputate dui facilisis vitae.
                            Phasellus placerat eu arcu condimentum vehicula. Nunc quis posuere metus. Quisque iaculis odio turpis, ut sodales libero tempus non.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus
                        </text>
                    </div>
                </div>
                <div className="p-1 mx-auto flex justify-end w-full lg:justify-center lg:mt-3">
                    <button className="rounded-full py-1 px-3.5 bg-cyan-500 hover:bg-cyan-400">
                        <text className="text-white font-mono text-lg">
                        Read More
                        </text>
                    </button>
                </div>
            </section>

        </div>
    )
}