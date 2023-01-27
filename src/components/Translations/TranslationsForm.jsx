import { useState } from "react"
import TranslationsAction from "./TranslationsAction";

const TranslationsForm = () => {

    const [ message, setMessage ] = useState()

    const [images, setImages] = useState()

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        setImages(TranslationsAction(message))
    }

    /*const addImages = images.map((Element) => {
        return  < TranslationsActionItem image={Element} />
    })*/

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