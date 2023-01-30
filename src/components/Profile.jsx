import { setUseProxies } from "immer"
import { useEffect } from "react"
import { userById } from "../api/user"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"
import ProfileActions from "./Profile/ProfileActions"
import ProfileHeader from "./Profile/ProfileHeader"
import ProfileTranslationsHistory from "./Profile/ProfileTranslationsHistory"

const Profile = () => {

    const { user } = useUser()
    
    console.log("This is the translationslist:" + user.translations);

    return (
        <>
            <div class="textCenter">
            <h1 class="textCenter">Profile Page</h1>
            <ProfileHeader username={ user.username } />
            <ProfileActions />
            <div className="translationBox">
            <ProfileTranslationsHistory translations={user.translations}/>
            </div>
            </div>
        </>
    )
}

export default withAuth(Profile)