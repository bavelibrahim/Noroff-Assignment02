import { Link } from "react-router-dom"
import { storageRemove, storageSave } from "../../utils/storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { removeTranslation } from "../../api/translation"

const ProfileActions = () => {

    const { user, setUser} = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Do you want to log out?')){
            storageRemove(STORAGE_KEY_USER)
            setUser(null)        
        }
    }

    const handleClearTranslations = async () => {

        if (!window.confirm('Do you want to clear the translations?\nThis cannot be undone')){
            return
        }

        const [ clearError ] = await removeTranslation(user.id)

        if (clearError !== null) {
            return
        }

        const updatedUser = {
            ...user,
            translations: []
        }

        storageSave(updatedUser)
        setUser(updatedUser)

    }
    
    return (
        <div class="textCenter">
            <button class="button-24" onClick={handleClearTranslations}>Clear Translations</button>
            <p></p>
            <button class="button-24" onClick={handleLogoutClick}>Log Out</button>
        </div>
    )
}

export default ProfileActions