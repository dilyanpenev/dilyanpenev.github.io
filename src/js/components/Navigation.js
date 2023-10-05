import { Link } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="nav" >
            <div className="nav__links">
                <div className="animation-wrapper">
                    <h3><Link to="/projects">Projects</Link></h3>
                </div>
                <div className="animation-wrapper">
                    <h3><Link to="/renders">Renders</Link></h3>
                </div>
                <div className="animation-wrapper">
                    <h3><a href="https://public.tableau.com/app/profile/dilyan.penev" target="_blank" rel="noreferrer">Tableau</a></h3>
                </div>
            </div >
            <div className="nav__socials">
                <div className="animation-wrapper">
                    <a href="https://github.com/dilyanpenev" target="_blank" rel="noreferrer"><i className="icon fa fa-github"></i></a>
                </div>
                <div className="animation-wrapper">
                    <a href="https://www.linkedin.com/in/dilyan-penev/" target="_blank" rel="noreferrer"><i className="icon fa fa-linkedin-square"></i></a>
                </div>
            </div>
        </div >
    );
}

export default Navigation;