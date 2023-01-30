import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {
    
    const { user } = useUser()
    
    return (
        <nav className="textCenter">
            { user !== null && 
            <>
                <p>  { "Logged in as: " + user.username}</p>
                <NavLink to="/translations" className="navMargin">Translations </NavLink>
                <NavLink to="/p rofile" className="navMargin">Profile</NavLink>
            </>
            }

        </nav>
    )
}

export default Navbar