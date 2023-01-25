import ProfileTranslationsHistoryItem from "./ProfileTranslationsHistoryItem"

const ProfileTranslationsHistory = ({ translations }) => {
    
    const translationsList = translations.map(translations => 
        <ProfileTranslationsHistoryItem key={translations} item={ translations }/>)

    return (
        <section>
            <h4>Profile Translations History</h4>
            <ul>
                {translationsList}
            </ul>
        </section>
    )

}

export default ProfileTranslationsHistory