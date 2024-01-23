import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

function BarLoader(props) {

    const [barOut, setBarOut] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setBarOut(true);
    }, [location.pathname]);

    const createBar = () => {
        let content = []
        for (let i = 0; i < 4; i++) {
            content.push(<div key={i} className={barOut ? 'bar barOut' : 'bar none'}></div>)
        }
        return content
    }

    return (
        <div className="bar-loader" >
            {createBar()}
            <div key="4" onAnimationEnd={() => setBarOut(false)} className={barOut ? 'bar barOut' : 'bar none'}></div>
        </div >
    );
}

export default BarLoader;