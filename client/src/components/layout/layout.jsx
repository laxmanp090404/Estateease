import React from 'react'
import './layout.scss'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
     <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
      {/* body is going to differ based on route so use outlet */}
      <div className="body">
        <Outlet/>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default layout