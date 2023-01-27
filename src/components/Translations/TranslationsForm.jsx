import { useState } from "react"
import { AddTranslation } from "../../api/translation";
import { useUser } from "../../context/UserContext";
import TranslationsAction from "./TranslationsAction";

const TranslationsForm = () => {

    const [ message, setMessage ] = useState()
    const { user } = useUser()

    const [images, setImages] = useState()

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = async () => {
        setImages(TranslationsAction(message))

        //! Adding Translation to the translation list for the user. 
        console.log('Translation is: ' + message);
        const [error, result] = await AddTranslation(user, message)
        console.log('Error: ', error)
        console.log('Result: ', result)

    }

    return (
        <div className="textCenter">
            <input
            type="text"
            id="inputField"
            name="Type here...."
            onChange={handleChange}
            ></input>
            <button onClick={ handleClick }>Translate</button>
            <p></p>
            <p className="textCenter">You have typed:</p>
            <p>{message}</p>
            <h3 className="textCenter">Translation below:</h3>
            <div className="translationBox">
            {images}
            </div>
        </div>
    )
}

export default TranslationsForm