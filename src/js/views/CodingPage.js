import { SectionData } from "../../assets/texts/coding_sections";
import TagList from "../components/TagList"

function CodingPage(props) {

    return (
        <div className="renders-page">
            {SectionData.map(section => {
                return CodingPageSection({
                    key: section.id,
                    title: section.title,
                    description: section.description,
                    tags: section.tags,
                    image_path: section.image_paths[0]
                })
            })}
        </div>
    );
}

function CodingPageSection(props) {
    return (
        <div key={props.key} className={`renders-page__section`}>
            <div className="section-text">
                <h2 className="section-text__title">{props.title}</h2>
                <p className="section-text__description">{props.description}</p>
                <h4 className="section-text__subtitle">Technologies used:</h4>
                <TagList tags={props.tags} />
            </div>
            <div className="section-image"><img src={props.image_path} alt={props.title} /></div>
        </div>
    );
}

export default CodingPage;