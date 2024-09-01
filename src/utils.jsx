
import { useState } from "react";
import {Link,useSearchParams} from "react-router-dom"
import { FaSearch } from "react-icons/fa";

export  function renderVans (vans){
    const [searchParams,setSearchParams]=useSearchParams()
    const [q, setQ] = useState("");
    const typeFilter=searchParams.get("type");
    const searchedVans=vans.filter(van=>van.name.toLowerCase().includes(q)>0 )
    const displayedVans = typeFilter
        ? searchedVans.filter(van => van.type === typeFilter)
        : searchedVans
    
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
    const search=(e)=>{
         setSearchParams(prev=>{  
         return {...prev,q}})  
       setQ(e.target.value)
    }
    
    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link
                to={van.id}
            
                aria-label={`View details for ${van.name}, 
                priced at $${van.price} per day`}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter,
                    q:q
                }}
            >
                <div className="img-wrapper">
                        <img src={van.imageURL}  alt={`Image of ${van.name}`}/>
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
            onClick={()=>handleChangeFilter("type","simple")}
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
<div class="box">
    
        <input 
         type="text"
          class="input" 
          name="search" 
          onmouseout="this.value = ''; this.blur();"
          value={q}
          onChange={(e)=>search(e)}
        />
    <FaSearch />

</div>
     
    </div>
    <div className="van-list">
        {vanElements}
    </div>
    </>
    )
}



