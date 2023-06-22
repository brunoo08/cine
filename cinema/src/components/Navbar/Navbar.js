
import './Navbar.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="rowNavbar">
            <img src="../cine-logo.png" alt="logo" className='logo'/>
        </div>
        <div className="rowNavbar">
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/programmation'>Programmation</NavLink>
                <NavLink to='/commingsoon'>Comming Soon</NavLink>
                <NavLink to='/buytickets'>Buy Tickets</NavLink>
                <NavLink to='/aboutus'>About Us</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
        </div>
    </div>
    
  )
}

export default Navbar