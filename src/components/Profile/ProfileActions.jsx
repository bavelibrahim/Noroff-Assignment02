import { Link } from "react-router-dom"

const ProfileActions = () => {

    const handleLogoutClick = () => {
        if (window.confirm('Do you want to log out?')){
            //! TODO Event to parent
        }
    }

    return (
        <ul>
            <li><Link to="/translations">Translations</Link></li>
            <li><button>Clear Translations</button></li>
            <li><button onClick={handleLogoutClick}>Log Out</button></li>
        </ul>
    )
}

export default ProfileActions