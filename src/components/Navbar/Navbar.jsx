import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="navLeft">
            <i className="navIcon fa-brands fa-square-facebook"></i>
            <i className="navIcon fa-brands fa-square-twitter"></i>
            <i className="navIcon fa-brands fa-square-instagram"></i>
            <i className="navIcon fa-brands fa-square-pinterest"></i>
        </div>
        <div className="navCenter">
           <ul className='navList'>
            <li className='navListItem'>Home</li>
            <li className='navListItem'>About</li>
            <li className='navListItem'>Contacts</li>
            <li className='navListItem'>Add Blog</li>
            <li className='navListItem'>LOGOUT</li>
            </ul> 
        </div>
        <div className="navRight">
            <img className='navImage' src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <i class="navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar
