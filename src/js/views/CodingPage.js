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
                    image_path: section.image_paths[0],
                    website_link: section.website_link,
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
                <TagList tags={props.tags} />
                <p className="section-text__description">{props.description}</p>
                <div className="section-text__more">
                    <a href={props.website_link} target="_blank" rel="noreferrer">
                        <div className="more-button">
                            <i className="icon fa fa-arrow-right" style={{ opacity: 0 }}></i>More info <span className="more-button__extra"><i className="icon fa fa-arrow-right"></i></span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="section-image"><img src={props.image_path} alt={props.title} /></div>
        </div>
    );
}

export default CodingPage;