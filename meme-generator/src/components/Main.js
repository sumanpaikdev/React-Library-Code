import React from 'react'

export default function Main() {
  // React.useState =
  return (
    <main className='main--container'>
        <form className='main--form'>
            <input className='main--input' type="text" placeholder='First text' />
            <input className='main--input' type="text" placeholder='Second text'/>
            <button className='main--button'>Get a new meme image  🖼</button>
        </form>
    </main>
  )
}
