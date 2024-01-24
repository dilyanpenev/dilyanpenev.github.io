import { Link } from "react-router-dom";
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
                <div className="section-title">
                    <h4>Check out my <span className="link-animation"><Link to="/coding">coding</Link></span>, <span className="link-animation"><Link to="/renders">rendering</Link></span> and <span className="link-animation"><a href="https://public.tableau.com/app/profile/dilyan.penev" target="_blank" rel="noreferrer">data visualisation</a></span> projects</h4>
                </div>
                <div className="section-title">
                    <h4>or</h4>
                </div>
                <FlipButton title="Get in touch" link="mailto:dilyanpenev@gmail.com" />
            </section>
        </div>
    );
}

export default AboutPage;