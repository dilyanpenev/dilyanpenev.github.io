import FlipButton from "../components/FlipButton";

function AboutPage(props) {

    return (
        <div className="about-page">
            <section className="hero-section">
                <div className="hero-title">
                    <h3>About Me...</h3>
                </div>
                <div className="hero-wrapper">
                    <div className="hero-image">
                        <img src={"/images/about/me.jpeg"} alt={"me"} />
                    </div>
                    <div className="hero-intro">
                        <ul>
                            <li>Based in <span className="emphasys">Bulgaria</span></li>
                            <li><span className="emphasys">Computer Science graduate</span> from the University of Manchester</li>
                            <li>Experience as a <span className="emphasys">Full-stack Developer</span> in web development</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <FlipButton title="Get in touch" link="mailto:dilyanpenev@gmail.com" />
            </section>
        </div>
    );
}

export default AboutPage;