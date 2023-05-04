import { Outlet } from 'react-router-dom'
import Header from '../components/Header';

function PageWrapper(props) {
    return (
        <div className='page-wrapper'>
            <Header />
            <Outlet />
        </div>
    );
}

export default PageWrapper;