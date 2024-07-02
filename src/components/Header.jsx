import React from "react"
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
            <nav class="navbar" role="navigation">
      <div class="navbar-container container">
          <input type="checkbox" />
          <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
          </div>
          <ul class="menu-items">
             <li><NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink></li>
                 <li> <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink></li>
              <li><NavLink 
                    to="/vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink></li>
                <li><Link to="/login" className="login-link" aria-label="log in ">
                         <FaRegCircleUser />
                </Link>
                </li>
              <li>
                 <button onClick={fakeLogOut} className="fake-logOut-btn">
                           Log out
                </button>
              </li>
          </ul>
          <Link className="site-logo" to="/Vans-App">#VanLife</Link>
      </div>
            </nav>
        </header>
    )
}