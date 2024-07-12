import React from "react"
import { Await, Link, defer, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"

import ReactLoading from 'react-loading';

export async function loader() {

    return  defer({vans:getHostVans()})
}

export default function HostVans() {
    const vansPromise = useLoaderData()

    function renderHostVans(vans){
        const hostVansEls = vans.map(van => (
            <Link
                to={van.id}
                key={van.id}
                className="host-van-link-wrapper"
            >
                <div className="host-van-single" key={van.id}>
                        <img src={van.imageURL} alt={`Photo of ${van.name}`} />
             
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>
        ))
        return(
                <section>
                    {hostVansEls}
                </section>
        )
    }
   

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
            <React.Suspense fallback={<ReactLoading type={"bars"} color="fff"  className="loading-bar"/>}>
                <Await resolve={vansPromise.vans}>
                    {renderHostVans}
                </Await>
            </React.Suspense>
            </div>
        </section>
    )
}