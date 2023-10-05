import Navigation from "./Navigation";

function Header(props) {
    return (
        <div className="header" >
            <div className="animation-wrapper title-wrapper">
                <h1><span className="text-dark-blue">Dilyan Penev</span> Portfolio</h1>
            </div>
            <Navigation />
        </div >
    );
}

export default Header;