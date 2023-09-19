import ParentContainer from "../components/parent-container";
import ProjectCard from "./project-card";
import { GitHubResponse } from "./types";



async function getProjects(): Promise<GitHubResponse[] | undefined> {
    const tailWindColorList: string[] = ["red", "pink", "purple", "indigo", "deep-purple", "blue", "light-blue", "teal", "cyan", "deep-orange", "brown", "grey"];
    let i = 0;
    try {
        const headers = new Headers()
        headers.append("Authorization", `token ${process.env.GITHUB_API_TOKEN}`);
        let githubResponses: GitHubResponse[] = await (await fetch("https://api.github.com/users/atharvasune/repos", { headers: headers })).json();
        githubResponses = githubResponses.filter((githubResponse) => githubResponse.private === false && !(githubResponse.name === "youtube-dl"))
        return githubResponses;

    } catch (err: any) {
        console.error(err)
    }
}

async function getImages(numberOfImages: number) {
    const headers = new Headers();
    headers.append("Authorization", process.env.PEXELS_API_KEY ? process.env.PEXELS_API_KEY : "");
    const response = await (await fetch(`https://api.pexels.com/v1/search?query=artificial+intelligence&per_page=${numberOfImages}`, {
        headers: headers
    })).json()
    return response.photos;
    
}

async function getLanguages(languages_url: string) {
    try {
        return await (await fetch(new URL(languages_url))).json();
    } catch (err: any) {
        console.error(err);
    }
}

export default async function Projects() {
    const githubResponses: GitHubResponse[] | undefined = await getProjects();
    const images: any = await getImages(githubResponses?githubResponses.length: 15);
    return (
        <ParentContainer show={true} path={"projects"} showBorder={false} className="overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-10 py-4 pt-8 justify-items-center w-full" >
            {githubResponses ?
                <>
                    {githubResponses.map(async (githubResponse, idx) => {
                        const languages = await getLanguages(githubResponse.languages_url);
                        return (
                            <ProjectCard key={`${idx}`} projectName={githubResponse.name} languages={languages} githubUrl={githubResponse.html_url} description={githubResponse.description} imgURL={images[idx]['src']['original']} />
                        )
                    })}
                </>
                : <></>}
        </ParentContainer>
    )
}