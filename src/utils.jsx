
import {redirect,Link,useSearchParams} from "react-router-dom"

 


export  function renderVans (vans){
    const [searchParams,setSearchParams]=useSearchParams()
    const typeFilter=searchParams.get("type");
 
    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    function handleChangeFilter(key,value){
        if(key!="type") return; //early exist
        setSearchParams(prev=>{
        
        if ( value==null ){
            prev.delete(key) 
        }
        else{
           prev.set(key,value)
        }
            return prev
      })
    }
    
    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link
                to={van.id}
                aria-label={`View details for ${van.name}, 
                priced at $${van.price} per day`}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
            >
                <div className="img-wrapper">
                    <picture>
                    <source srcset={van.imageURL} type="image/webp"/>
                        <img src={van.imageURL}  alt={`Image of ${van.name}`}/>
                    </picture>
                </div>
             

                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
    return(
        <>
        <div className="van-list-filter-buttons">
        <button
            className={
            `van-type simple 
            ${typeFilter === "simple" ? "selected" : ""}`
            }   
            onClick={()=>handleChangeFilter({"type":"simple"})}
        >Simple</button>
        <button
            className={
                `van-type luxury 
                ${typeFilter === "luxury" ? "selected" : ""}`
            }
            onClick={()=>handleChangeFilter("type","luxury")}
        >Luxury</button>
        <button
            className={
                `van-type rugged 
                ${typeFilter === "rugged" ? "selected" : ""}`
            }
            onClick={()=>handleChangeFilter("type","rugged")}
        >Rugged</button>

      {typeFilter?  <button
        className="van-type clear-filters"
        onClick={()=>handleChangeFilter("type",null)}
    >clear filters</button>
    :null
      }

    </div>
    <div className="van-list">
        {vanElements}
    </div>
    </>
    )
}



export async function requireAuth(request) {
    const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!isLoggedIn) {
        const res= redirect(
            `/login?message=You must log in first.&redirectTo=${pathname}`
        )
        res.body=true 
        throw res
    }
    return null
}
