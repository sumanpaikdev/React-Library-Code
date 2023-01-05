import React from 'react'
import './App.css'
import WhiteImage from './WhiteImage'

function App() {

  return (
    <div className="App">
      <WhiteImage
        imageSource={"https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"}
        // width={200}
        // height={300}
      />
    </div>
  )
}

export default App
