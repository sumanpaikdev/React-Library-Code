import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

// import Gmail from './Gmail'
// import Phone from './Phone'

export default function ContactContainer() {
  return (
    <div>
      <h1>Contact Container</h1>
      <ul>
        <li><Link to="/contact/gmail">Gmail</Link></li>
        <li><Link to="/contact/phone">Phone</Link></li>
      </ul>
      {/* <Routes>
        <Route path="/contact/gmail" element={<Gmail/>} />
        <Route path="/contact/phone" element={<Phone/>} />
      </Routes> */}
    </div>
  )
}
