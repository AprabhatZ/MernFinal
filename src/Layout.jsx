import Nav from 'common/navbar/Navbar';
import Footer from 'common/footer/Footer';
import {Outlet} from 'react-router-dom';
import Try from 'common/navbar/Try';

function Layout(){
    return(
        <>
            <Nav/>
            {/* <Try /> */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;