import ParentContainer from "@/components/parent-container";
import BlogCard from "./blog-card";
import { XMLParser } from "fast-xml-parser";

type Item = {
    title: string,
    link: string,
    guid: string,
    category: [string],
    "dc:creator": string,
    pubDate: string,
    "atom:updated": string,
    "content:encoded": string,
    titleImg?: string
}

async function fetchMediumPosts() {
    const parser: XMLParser = new XMLParser({ allowBooleanAttributes: true });
    try {
        let response = await fetch("https://medium.com/feed/@atharvasune", {cache: 'no-store'});
        let responseText = await response.text();
        let mediumResponse = parser.parse(responseText);
        return mediumResponse.rss.channel.item;
    } catch (err) {
        console.error(err);
    }
}

export default async function Blogs() {
    let mediumPosts: Item[] = await fetchMediumPosts();
    const xmlParser: XMLParser = new XMLParser({allowBooleanAttributes: true, parseAttributeValue: true, ignoreAttributes: false})
    for (let item in mediumPosts) {
        try {
            mediumPosts[item]["titleImg"] = xmlParser.parse(mediumPosts[item]['content:encoded'])['figure']['img']['@_src'];
        } catch (err) {
            mediumPosts[item]["titleImg"] = xmlParser.parse(mediumPosts[item]['content:encoded'])['figure'][0]['img']['@_src'];
        }
    }

    return (
        <ParentContainer show={true} path={"blogs"} showBorder={false} className="overflow-y-auto">
            {mediumPosts.map(function (blog: Item, idx: Number) {
                return (
                <>
                    <BlogCard key={`${idx}`} title={blog.title} img={blog.titleImg} tags={blog.category} mediumLink={blog.link} />
                </>
            )})}
        </ParentContainer>
    )
}