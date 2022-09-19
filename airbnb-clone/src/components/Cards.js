import React from 'react'


export default function Cards(props) {
  let badgeText
  if (props.openSpot === 0) {
    badgeText = "Offline"
  } else{
    badgeText = "Online"
  }
  return (
    <div class="card--container">
      <div className="cars--con">
        <img src={props.carditem.coverImg} alt="error loading" className='card--logo' />
        
        {badgeText && <div className="status--bar">{badgeText}</div>}
        <div className="star--container">
          <img src={props.starimg} alt="error" className='star--logo' />
          <span> {props.carditem.stats.rating} </span>
          <span className='span-text'> ({props.carditem.stats.reviewCount})	&bull; {props.carditem.location}</span>
          <p className='star--p'>{props.carditem.title}</p>
          <p className='star--price'> <b>From ${props.carditem.price}</b>  / person</p>
        </div>
      </div>
    </div>
  )
}

