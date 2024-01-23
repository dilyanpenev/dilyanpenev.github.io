import Navigation from "./Navigation";

function Header(props) {
    return (
        <div className="header" >
            <div className="animation-wrapper title-wrapper">
                <h1><span className="text-platinum">D</span>ilyan <span className="text-platinum">P</span>enev</h1>
            </div>
            <Navigation />
        </div >
    );
}

export default Header;