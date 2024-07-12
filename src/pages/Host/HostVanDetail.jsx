import React from "react"
import {  Await, Link, NavLink, Outlet,defer,useLoaderData } from "react-router-dom"
import { getVan } from "../../api"
import ReactLoading from 'react-loading';

export async function loader({params,request}) {

    return  defer({currentVan: getVan(params.id)})
    }
export default function HostVanDetail() {
    const currentVanPromise=useLoaderData();

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span>
            </Link>
            <div className="host-van-detail-layout-container">
            <React.Suspense fallback={<ReactLoading type={"bars"} color="fff"  className="loading-bar"/>}>
                    <Await resolve={currentVanPromise.currentVan}>
                    {(currentVan)=>{                              
                    return(
                    <>
                
                                    <div className="host-van-detail">
                                    <picture>
                                        <source srcSet={currentVan.imageURL} type="image/webp"/>
                                        <img src={currentVan.imageURL} alt={`Image of ${currentVan.name}`} />
                                    </picture>
                                        <div className="host-van-detail-info-text">
                                            <i
                                                className={`van-type van-type-${currentVan.type}`}
                                            >
                                                {currentVan.type}
                                            </i>
                                            <h3>{currentVan.name}</h3>
                                            <h4>${currentVan.price}/day</h4>
                                        </div>
                                    </div>
                              
                                
                         </>   
                            )}}
                        
                      
                    </Await>
                </React.Suspense>
            

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <React.Suspense fallback={<h2>Loading...</h2>}>
                    <Await resolve={currentVanPromise.currentVan}>
                    {(currentVan)=><Outlet  context={{currentVan}}/>}
                        
                      
                    </Await>
                </React.Suspense>
                
            </div>
        </section>
    )
}
