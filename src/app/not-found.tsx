import Link from "next/link";

export default function NotFound() {
    return (
        <main className="grid gap-5 h-[calc(100%-10rem)] place-content-center">

            <div className="text-white text-4xl font-sans text-center">
            Hey, I am working on this part of the website.
            </div>

            <div className="text-white text-4xl font-sans text-center">
            It will be ready soon.
            </div>

            <div className="text-green-700 text-4xl underline font-mono text-center">
                <Link href="/">
                    Back Home
                </Link>
            </div>

        </main>
    )
}