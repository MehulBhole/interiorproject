
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

import "./AppLayout.css";
const AppLayout=()=>{

    return(
        <div className="layout">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    )

}

export default AppLayout;
