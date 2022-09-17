import React from 'react'

export default function Cards(props) {
  return (
    <div class="card--container">
        
            <img src={props.img} alt="error loading" className='card--logo' />
            {/* <div className="status--bar">out of stock</div> */}
        <div className="star--container">
            <img src={props.star} alt="error" className='star--logo'/> 
            <span> 5.0 </span>
            <span className='span-text'> (30)	&bull; USA</span>
            <p className='star--p'>Airbnb Place one React</p>
            <p className='star--price'> <b>From $136</b>  / person</p>
        </div>
    </div>
  )
}

   