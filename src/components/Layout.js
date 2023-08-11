import React from "react";
import { Link, Outlet } from "react-router-dom";


const Layout=()=>{
    return(
        <div className="contents">
            <header>
                <Link to="/">Profile</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/CONTACT1">CONTACT1</Link>

            </header>
            <Outlet />
    </div>
        
    );
}

export default Layout;