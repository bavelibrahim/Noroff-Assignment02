import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import ProfileActions from "./Profile/ProfileActions"
import ProfileHeader from "./Profile/ProfileHeader"
import ProfileTranslationsHistory from "./Profile/ProfileTranslationsHistory"

const Profile = () => {

    const { user } = useUser()

    return (
        <>
            <h1>Profile Page</h1>
            <ProfileHeader username={ user.username } />
            <ProfileActions />
            <ProfileTranslationsHistory translations={user.translations}/>
        </>
    )
}

export default withAuth(Profile)