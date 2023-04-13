import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const user = true
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
          <li className='navListItem'><Link className="link" to="/">Home</Link></li>
          <li className='navListItem'><Link className="link" to="/">About</Link></li>
          <li className='navListItem'><Link className="link" to="/">Contact</Link></li>
          <li className='navListItem'><Link className="link" to="/addblog">AddBlog</Link></li>
          <li className='navListItem'>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="navRight">
        {
          user ? (
            <Link to = "/setting">
            <img className='navImage' src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            </Link>
          ) : (
            <ul className="navList">
              <li className="navListItem">
              <Link to="/login" className="link">LOGIN</Link></li>
             <li className="navListItem"><Link to="/register" className="link">REGISTER</Link> </li>
            </ul>

          )
        }
        <i class="navSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Navbar
