import React from "react"
import serviceData from  "./Data"
import { Link } from "react-router-dom"

export default function Services() {
    const services = serviceData.map(serviceItemData =>{
        return(
            <h3 key={serviceItemData._id}><Link to={`/services/details/${serviceItemData._id}`}>{serviceItemData.name}</Link> - {serviceItemData.price} - total Rating</h3>
        )
    })
    return(
        <div className="service-container">
            <h1>Services Details</h1>
            <p>This is a service items container.</p>
            {services}
        </div>
    )
}