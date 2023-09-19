import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "300", style: "normal", subsets: ["latin"] });

export function AboutMe({ isActive }: { isActive: boolean }) {
    return (
        <section id="about-me" className={`w-[95%] md:w-4/5 lg:w-3/5 mx-auto mt-3 text-white text-justify ${roboto.className} ${isActive ? "block" : "hidden"}`}>
            <h2 className="text-white text-4xl font-mono underline text-center pb-4">Who am I?</h2>
            <p className="text-center text-lg font-mono font-thin mb-3">Hi there! I'm Atharva, a 24yr old software developer based in Hyderabad, India. </p>
            <p>I've been coding since I was 18 years old, and continue to be endlessly fascinated by the power of technology to change lives.</p>
            <p>I currently work at Oracle, where I build complex, large-scale distributed systems. Some of my notable projects have included creating digital assistants using natural language processing, designing high-performance search engines, and developing tools to improve developer productivity.</p>
            <p>While I enjoy working on challenging backend systems and infrastructure, I'm equally passionate about crafting intuitive user experiences. I pride myself on combining cutting-edge technology with elegant design in all my work.</p>
            <p>Please feel free to look around, and don't hesitate to <a href="/contact" className="underline text-cyan-400 hover:text-blue-600 text-lg">reach out</a> if you'd like to collaborate! I'm always open to taking on ambitious ideas with like-minded people."</p>

        </section>
    )
}

export function TechnicalSkills({isActive}: {isActive: boolean}) {
    return (
        <section id="skills" className={`w-[95%] md:w-4/5 mx-auto mt-3 text-white text-justify ${roboto.className} ${isActive ? "block" : "hidden"}`}>
            <h2 className="text-white text-4xl font-mono underline text-center pb-4">Technical Skills</h2>
            <p>Being a developer, a dedicated section for my technical skills had to be there....</p>
            <p>I am a full stack developer, developing highly scalable, distributed applications, with the past two years being heavily focussed on backend development. While at work I heavily use <span className="text-green-500 font-mono">
                Java</span>, I have experience in multiple frameworks, both front and backend, through multiple personal and university projects - </p>
            <ul className="font-mono mt-2 text-lg">
                <li>Python - Django, Flask, SQLAlchemy</li>
                <li>Java - Helidon MP, Helidon SE, Spring Boot</li>
                <li>Javascript - ReactJs, NextJs, ExpressJs.. the complete NodeJs Ecosystem</li>
            </ul>
            <p>Not just web development, I have some experience in <span className="font-bold font-mono text-lg">mobile development using both Flutter and Swift</span>.</p>
            <br />
            <p>Well developing an application is one thing, but when serving those applications, you need infra.. or as its more commonly known - cloud</p>
            <p>I have worked on <span className="font-mono text-lg font-bold">OCI (Oracle Cloud), AWS, Azure </span> and used various services provided by each be it <span className="font-mono text-lg">block storage, file storage, compute, managed Kubernetes deployments, database, serveless offerings and much more.</span></p>
            <p>And when comes cloud, you have to learn and work with both <span className="font-mono text-lg">Docker and Kubernetes</span></p>
            <hr />
            <p>Not just a developer here though, I have spent a fair share of my time working on data science and machine learning projects, giving me a good experience in those fields as well.</p>
            <ul>
                <li>Deep Learning Frameworks - PyTorch, Tensorflow</li>
                <li>Machine Learning & DS libraries - Scikit-learn, Numpy, Pandas, Matplotlib</li>
            </ul>

        </section>
    )
}