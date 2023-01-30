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

    return (
        <>
            <div class="center">
            <h1 class="textCenter">Profile Page</h1>
            <ProfileHeader username={ user.username } />
            <ProfileActions />
            <ProfileTranslationsHistory translations={user.translations}/>
            </div>
        </>
    )
}

export default withAuth(Profile)