import { Outlet } from "react-router-dom";

import layout from './Layout.module.css';



import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import HeaderContainer from "./Header/HeaderContainer";


const Layout = () => {
    return (
        <div className={layout.appWraper}>
            <HeaderContainer />
            <Navbar />
            <div className={layout.appWraperContent}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;