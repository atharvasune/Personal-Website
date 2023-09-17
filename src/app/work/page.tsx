import ParentContainer from "../components/parent-container";
import NotFound from "../not-found";

export default function Work() {
    return (
        <ParentContainer show={true} path={"work"} showBorder={false}>
            <NotFound />
        </ParentContainer>
    )
}