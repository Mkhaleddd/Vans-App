import React from "react"
import { Link, useLocation,useLoaderData,defer,Await } from "react-router-dom"
import { getVan} from "../../api"
import ReactLoading from 'react-loading';

export  function loader({params}){
    return defer({van:getVan(params.id)})
}
export default function VanDetail() { 
    const location = useLocation()
    const vanPromise=useLoaderData()
    const type = location.state?.type || "all"
    
    return (
        <div className="van-detail-container">
            <Link
                to={location.state.search===null || location.state.search==''?'..':`..?${location.state.search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
        <React.Suspense fallback={<ReactLoading type={"bars"} color="fff"  className="loading-bar"/>}>
            <Await resolve={vanPromise.van}>
                {(van)=>{
                    return(
                        <div className="van-detail">
                            <picture>
                            <source srcSet={van.imageURL} type="image/webp"/>
                            <img src={van.imageURL} alt={`Image of ${van.name}`}/>
                            </picture>
                            <i className={`van-type ${van.type} selected`}>
                                {van.type}
                            </i>
                            <h2>{van.name}</h2>
                            <p className="van-price"><span>${van.price}</span>/day</p>
                            <p>{van.description}</p>
                            <button className="link-button">Rent this van</button>
                        </div>
                    )
                }}
                </Await>
        </React.Suspense>    
            
        </div>
    )
}