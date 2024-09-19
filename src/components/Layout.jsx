import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="site-wrapper">
             <div id="recaptcha-container" ></div>
            <Header />
            <main id="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}