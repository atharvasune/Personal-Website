import ParentContainer from "../components/parent-container";
import BlogCard from "./blog-card";
import BlogsContainer from "./blogs-container";
import {XMLParser} from "fast-xml-parser";

async function fetchMediumPosts() {
    const parser: XMLParser = new XMLParser({allowBooleanAttributes: true});
    try {
        let response = await fetch("https://medium.com/feed/@atharvasune");
        let responseText = await response.text();
        let mediumResponse = parser.parse(responseText);
        return mediumResponse.rss.channel.item;
    } catch(err) {
        console.error(err);
    }
}

export default async function Blogs() {
    const mediumPosts = await fetchMediumPosts();

    return (
        <ParentContainer show={true} path={"blogs"}>
            <BlogsContainer>
                {mediumPosts.map((val) => (
                    <BlogCard />
                ))}
                <BlogCard />
            </BlogsContainer>
        </ParentContainer>
    )
}