import React from "react";
import {Link} from "react-router-dom";

const Header = ()=>{
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to='/' className="navbar-brand">VBG</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/posts'>Post</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;