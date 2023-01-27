import ProfileTranslationsHistoryItem from "./ProfileTranslationsHistoryItem"

const ProfileTranslationsHistory = ({ translations }) => {
    
    const translationsList = translations.map(translations => <ProfileTranslationsHistoryItem key={translations} item={ translations }/>)

    return (
        <section>
            <h4 class="textCenter">Profile Translations History</h4>
            <ul class="center">
                {translationsList}
            </ul>
        </section>
    )
}

export default ProfileTranslationsHistory