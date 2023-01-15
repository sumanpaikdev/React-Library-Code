import React from "react"
import Data from "./Data"
import { useParams, useNavigate } from "react-router-dom"

export default function serviceItem() {
    const {serviceID} = useParams()
    const thisService = Data.find(itemData => itemData._id === serviceID)

    const navigate = useNavigate()
    function handleClick() {
      navigate("/services")
    }
    return(
        <div className="service-item-container">
            <h1>Service Item Details Instruction</h1>
            <p>All details of service items.</p>

            <h2>{thisService.name} - {thisService.price}</h2>
            <p>{thisService.description}</p>

            <img className="picture" src={thisService.picture} width="200px" height="200px" />
            <button onClick={handleClick}>Go back to services</button>
        </div>
    )
}