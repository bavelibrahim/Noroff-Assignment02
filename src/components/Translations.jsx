import withAuth from "../hoc/withAuth"
import TranslationsForm from "./Translations/TranslationsForm"

const Translations = () => {
    return (
        <>
            <h1 className="textCenter">Translation Page</h1>
            <section className="center">
                <TranslationsForm/>
            </section>
        </>
    )
}

export default withAuth(Translations)