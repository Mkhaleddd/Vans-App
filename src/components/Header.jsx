import React from "react"
import { FiLogOut } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    return (
        <header aria-label="primary navigation">
            <a href="#content" className="skip-nav-link">skip navigation</a>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav >
                <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="/login" className="login-link">
                         <FaRegCircleUser />
                </Link>
                <button onClick={fakeLogOut} className="fake-logOut-btn">
                            <FiLogOut />
                </button>
                
            </nav>
        </header>
    )
}