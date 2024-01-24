import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header';
import BarLoader from '../components/BarLoader';

function PageWrapper(props) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div className='page-wrapper'>
            <Header />
            <main>
                <Outlet />
            </main>
            <BarLoader />
        </div>
    );
}

export default PageWrapper;