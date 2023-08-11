import React from "react";
import { Link, Outlet } from "react-router-dom";


const Layout=()=>{
    return(
        <div className="contents">
            <header>
                <Link to="/">Profile</Link>
                <Link to="/Profile">Skills</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/contact">contact</Link>

            </header>
            <Outlet />
    </div>
        
    );
}

export default Layout;