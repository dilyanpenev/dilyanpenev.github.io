import { SectionData } from "../../assets/texts/render_sections";
import TagList from "../components/TagList"

function RendersPage(props) {

    return (
        <div className="renders-page">
            <section className="hero-section">
                <div className="hero-wrapper">
                    <h1 className="hero-title">
                        Rendering Projects
                    </h1>
                </div>
            </section>
            {SectionData.map(section => {
                return RendersPageSection({
                    key: section.id,
                    title: section.title,
                    inspiration: section.inspiration,
                    description: section.description,
                    tags: section.tags,
                    image_path: section.image_paths[0]
                })
            })}
        </div>
    );
}

function RendersPageSection(props) {
    return (
        <div key={props.key} className={`renders-page__section`}>
            <div className="section-text">
                <h2 className="section-text__title">{props.title}</h2>
                {props.inspiration !== "" &&
                    <h4 className="section-text__subtitle">Inspired by: {props.inspiration}</h4>
                }
                <TagList tags={props.tags} />
                <p className="section-text__description">{props.description}</p>
            </div>
            <div className="section-image"><img src={props.image_path} alt={props.title} /></div>
        </div>
    );
}

export default RendersPage;