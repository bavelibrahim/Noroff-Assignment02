const TranslationsActionItem = ({image, key, alt}) => {

    return (
        <img className="imgScale" src={image} key={key} alt={alt} ></img>
    )
}

export default TranslationsActionItem