import { Outlet } from 'react-router-dom'
import Header from '../components/Header';

function PageWrapper(props) {
    return (
        <div className='page-wrapper'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default PageWrapper;