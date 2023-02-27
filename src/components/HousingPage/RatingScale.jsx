import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./HousingPage.css";

const star = <FontAwesomeIcon icon={faStar} />
const starGrey = <FontAwesomeIcon icon={faStar} />

export default function RatingScale(props) {
    const scaleValue = props.scaleValue

    const range = [1, 2, 3, 4, 5]

    return (
        <div className="hoster_ratings">
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()} className="hoster_ratings_star">{star}</span> 
                    : <span key={rangeElem.toString()} className="hoster_ratings_star hoster_ratings_star_grey">{starGrey}</span>
            )}
        </div>
    )
}
