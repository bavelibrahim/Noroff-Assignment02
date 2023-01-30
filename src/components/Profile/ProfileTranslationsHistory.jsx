import ProfileTranslationsHistoryItem from "./ProfileTranslationsHistoryItem"

const ProfileTranslationsHistory = ({ translations }) => {

    let translationsList = []


    //! Checks if the array length in the api is more than 10 and prints accordingly 
    if (translations.length > 10) {
        translationsList = translations.slice(translations.length - 10, translations.length).map((translations, index) => <ProfileTranslationsHistoryItem key={index} item={translations}/>)
    } else {
        translationsList = translations.map((translations, index) => <ProfileTranslationsHistoryItem key={index} item={translations}/>)

    }

    return (
        <>
        <h4 class="textCenter">Last 10 Translations</h4>
        <section>
            <ul class="textCenter">
                {translationsList}
            </ul>
        </section>
        </>
    )
}

export default ProfileTranslationsHistory