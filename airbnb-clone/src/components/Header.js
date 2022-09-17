import React from 'react'

export default function Header(props) {
  return (
    <div className="header--container">
      <img src={props.headerImage} alt="error loading" className='header--logo'/>
    </div>
  )
}
