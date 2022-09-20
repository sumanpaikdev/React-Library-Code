import React from 'react'

export default function Place(props) {
  return (
    <div className="place--container">
        <div className="left--container">
            <img src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGhvbmUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="errod loading" className='left--image' />
        </div>
        <div className="right--container">
            <div className="first--location">
                    <img src={props.point} alt="" className='location--image'/>
                    <span className='city--name'>JAPAN</span>
                    <a className='map--link' href="/">View on Google Maps</a>
                
            </div>
            <div className="heading--part">
                <h1 className="mane--h1">Mount Fuji</h1>
            </div>
            <div className="content--part">
                <h4>212 Jan, 2021 - 24 Jan, 2021</h4>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    </div>
  )
}
