import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className='header'>
       <div className="headerTitles">
        <span className='headerTitleSm'>Bhartiya Yatra </span>
        <span className='headerTitleLg'>Blog</span>
       </div>
       <img className='headerImg' src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}

export default Header
