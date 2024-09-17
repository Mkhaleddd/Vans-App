import React from "react"
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink ,useNavigate} from "react-router-dom";
import {auth} from "../api"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
    const navigate=useNavigate()
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    const success=()=>toast.success('You are logged out', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
        
    async function handleLogout() {
        try {
          await auth.signOut();
          navigate( "/login");
          success();
        } catch (error) {
            return null
        }}
 
    return (
        <header aria-label="primary navigation">
            <a href="#content" className="skip-nav-link">skip navigation</a>
            <nav className="navbar" role="navigation">
      <div className="navbar-container container">
          <input type="checkbox"  aria-label="toggle"/>
          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items">
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
                 <button onClick={handleLogout} className="logOut-btn">
                           Log out
                </button>
              </li>
          </ul>
          <Link className="site-logo" to="/Vans-App">#VanLife</Link>
      </div>
            </nav>
            <ToastContainer />
        </header>
    )
}