import { useState } from "react"
import { AddTranslation } from "../../api/translation";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import TranslationsAction from "./TranslationsAction";

const TranslationsForm = () => {

    const [ message, setMessage ] = useState()
    const { user, setUser} = useUser()

    const [images, setImages] = useState()

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = async () => {
        setImages(TranslationsAction(message))

        console.log('Translation is: ' + message);

        //! Adding Translation to the translation list for the user. 
        const [error, updatedUser] = await AddTranslation(user, message)

        if (error !== null) {
            return
        }

        //! Server state and state for the UI will be in sync
        storageSave(STORAGE_KEY_USER, updatedUser )

        //! Updating context state
        setUser(updatedUser)

        console.log('Error: ', error)
        console.log('Updated user Result: ', updatedUser)
    }

    return (
        <div><div className="textCenter">
            <input className="center"
            type="text"
            id="inputField"
            name="Type here...."
            onChange={handleChange}
            ></input>
            
            <button className="button-7" onClick={ handleClick }>Translate</button>
            </div>
            <p></p>
            <div className="textCenter">
                <p>You have typed:</p>
                <p>{message}</p>
            </div>
            <h3 className="textCenter">Translation below:</h3>
            <div className="translationBox">
            {images}
            </div>
        </div>
    )
}

export default TranslationsForm