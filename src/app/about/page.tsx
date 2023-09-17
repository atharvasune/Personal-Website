import ParentContainer from "../components/parent-container";
import NotFound from "../not-found";
export default function About() {
    return (
        <ParentContainer show={true} path={"about"} showBorder={false}>
            <NotFound />
        </ParentContainer>
    )
}