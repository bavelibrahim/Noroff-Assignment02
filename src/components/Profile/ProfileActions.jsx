import { Link } from "react-router-dom"
import { storageRemove } from "../../utils/storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"

const ProfileActions = () => {

    const { setUser} = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Do you want to log out?')){
            storageRemove(STORAGE_KEY_USER)
            setUser(null)        
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