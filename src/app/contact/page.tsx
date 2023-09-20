import ParentContainer from "@/components/parent-container";
import {FaGithub, FaEnvelope, FaTwitter, FaMedium, FaLinkedinIn} from "react-icons/fa6"

function ContactLink({ text, link, icon }: { text: string, link: string, icon: JSX.Element }) {
    return (
        <div className="w-full border-b border-gray-600 flex justify-between md:p-4 py-2  items-center">
            <div className="w-[10%] max-w-[10%]">
                {icon}
            </div>
            <div className="w-[80%]">
                <a href={link} target="_blank" className="text-[#51FFE0] text-lg md:text-2xl hover:underline">
                    /{text}
                </a>
            </div>
        </div>
    )
}

export default function Contact() {
    const iconClassName = "text-white md:text-3xl text-xl"
    const contactLinks: any = {
        "mail": {
            text: "atharvasune@gmail.com",
            link: "mailto: atharvasune@gmail.com",
            icon: <FaEnvelope className={iconClassName} />

        },
        "github": {
            text: "atharvasune",
            link: "https://www.github.com/atharvasune",
            icon: <FaGithub className={iconClassName} />

        },
        "twitter": {
            text: "AtharvaSune",
            link: "https://www.twitter.com/AtharvaSune",
            icon: <FaTwitter className={iconClassName} /> 

        },
        "medium": {
            text: "atharvasune",
            link: "https://atharvasune.medium.com",
            icon: <FaMedium className={iconClassName} />

        },
        "linkedin": {
            text: "atharva-sune",
            link: "https://www.linkedin.com/in/atharva-sune",
            icon: <FaLinkedinIn className={iconClassName} />

        }
    }

    return (
        <ParentContainer show={true} path={"contact"} showBorder={false} className="flex flex-col items-center justify-center">
            <div className=" mb-[2%]">
                <text className="lg:text-4xl text-3xl text-white font-mono">
                    Contact Me at -
                </text>
            </div>
            <div className="p-6 h-fit w-[80%] md:w-[60%] lg:w-1/2 xl:w-[30%] max-w-[90%] mx-auto flex flex-col justify-center items-center border bg-[#201D1D] shadow-md shadow-[#555555] rounded-[20px]">
                {["mail", "linkedin", "github", "medium", "twitter"].map((val: string, idx) => {
                    return (
                        <ContactLink text={contactLinks[val].text} link={contactLinks[val].link} icon={contactLinks[val].icon} key={idx} />
                    )
                })}
            </div>

        </ParentContainer>
    )
}