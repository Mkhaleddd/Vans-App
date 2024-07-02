import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext()
    return (
        <picture>
                <source srcset={currentVan.imageURL} type="image/webp"/>
                <img src={currentVan.imageURL} className="host-van-detail-image" />
        </picture>        
    )
}