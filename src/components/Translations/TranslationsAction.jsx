
import TranslationsActionItem from "./TranslationsActionItem"

let arr = []
export let listArray = []

//! In Case the user types numbers or other symbols.
var englishLetters = /^[A-Za-z]+$/;

const TranslationsAction = (sentence) => {

    //! Deleting content from Array
    arr = []
    
    //! Temporary array used where each character in "sentence" is an element 
    let characters = []

    //! Change to lowercase in case user types in capital letters, makes job easier later on.
    characters = sentence.toLowerCase().split("")

    //! Checks if input is an english letter, if not push the path to the white image to the array
    characters.forEach(element => {
        if(englishLetters.test(element)){
            arr.unshi(process.env.PUBLIC_URL + '/images/' + element + '.png')
        } else {
            arr.push(process.env.PUBLIC_URL + '/images/white.png')
        }
    });
    
    let addImages = arr.map((Element) => {
        return  < TranslationsActionItem image={Element} />
    })

    return addImages
}

export default TranslationsAction