import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>About Me</span>
                <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti, repellat magni nostrum a adipisci? Corrupti explicabo u</p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">LIFE</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Entertainment</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Fashion</li>
                    <li className="sidebarListItem">Solo Travelling</li>
                    <li className="sidebarListItem">Tech Travel</li>
                    <li className="sidebarListItem">Regional travel</li>

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                </div>
            </div>
        </div>
    )
}
