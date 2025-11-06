import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";


function Card({title,image,type,year}){
    return(
        <div className = "card-container">
            <div className="whishlist">
                <FontAwesomeIcon icon={regularHeart}/>
            </div>
            <div className ="image-container">
                <img src={image} alt={title}/>
            </div>
            <div className = "data-container">
                <h2>Title : {title}</h2>
                <p>Year : {year}</p>
                <p>Type : {type}</p>
            </div>
        </div>
    )
}
export default Card;