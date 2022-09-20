import React from 'react'

export default function Place(props) {
  return (
    <div className="place--container">
        <div className="left--container">
            <img src={props.details.imageUrl} alt="errod loading" className='left--image' />
        </div>
        <div className="right--container">
            <div className="first--location">
                    <img src={props.point} alt="" className='location--image'/>
                    <span className='city--name'>{props.details.location}</span>
                    <a className='map--link' href={props.details.googleMapsUrl}>View on Google Maps</a>
                
            </div>
            <div className="heading--part">
                <h1 className="mane--h1">{props.details.title}</h1>
            </div>
            <div className="content--part">
                <h4>{props.details.startDate} - {props.details.endDate}</h4>
                <p>{props.details.description}</p>
            </div>
        </div>
    </div>
  )
}
