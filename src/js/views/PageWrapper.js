import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import BarLoader from '../components/BarLoader';

function PageWrapper(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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