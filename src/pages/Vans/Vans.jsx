import React from "react"
import { useLoaderData,Await,defer } from "react-router-dom"
import { getVans } from "../../api"
import { renderVans } from "../../utils"
import ReactLoading from 'react-loading';
 

export function loader() {
        return defer({vans:getVans()})
    }

export default function Vans() {
    
    const vansPromise=useLoaderData();
   

    return (
        <section aria-labelledby="vans display" className="van-list-container">
            <h1 id="vans display">Explore our van options</h1>
           <React.Suspense fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
                <Await resolve={vansPromise.vans}>
                    {renderVans}
                </Await>
           </React.Suspense>
        </section>
    )
}