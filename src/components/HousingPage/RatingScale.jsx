import pink_star from "../../images/pink_star.png";
import gray_star from "../../images/gray_star.png";
import "./HousingPage.css";


export default function RatingScale(props) {
    const scaleValue = props.scaleValue

    const range = [1, 2, 3, 4, 5]

    return (
        <div className="hoster_ratings">
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                    <img key={rangeElem.toString()} className="hoster_ratings_star"src={pink_star} alt="étoile notation pleine"/> 
                    : <img key={rangeElem.toString()} className="hoster_ratings_star" src={gray_star} alt="étoile notation vide"/>
            )}
        </div>
    )
}
