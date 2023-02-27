import React, { useState } from "react";
import leftArrow from "../../images/leftArrow.png";
import rightArrow from "../../images/rightArrow.png";
import "./Carousel.css";

export default function Carousel(props) {
    const [Index, setIndex] = useState(0);
    const imgSize = () => {
        const slideshowImg = document.querySelector(".carousel_container_img");
        if(!slideshowImg){
            return 0;
        }
        return slideshowImg.width;
    }
    const nextPicture = () => {
        if(Index === props.img.length - 1){
            setIndex(0)
        } else {
            setIndex(Index + 1)
        }
    }

    const prevPicture = () => {
        if(Index === 0){
            setIndex(props.img.length - 1)
        } else {
            setIndex(Index - 1)
        }
    }

    return (
        <div className="carousel">
            <div className="carousel_container" style={{transform: `translateX(-${Index * imgSize()}px)`}}>
                {props.img.map((picture, i) => 
                    <img className="carousel_container_img" alt="banniere-page-logement" src={picture} key={i} />
                )}
            </div>
            
            {props.img.length > 1 && <>
            <div className="carousel_controls">
                <img className="carousel_controls_arrows" onClick={prevPicture} src={leftArrow} alt=""/>
                <img className="carousel_controls_arrows" onClick={nextPicture} src={rightArrow} alt=""/>
            </div>
            <div className="carousel_counter">{Index + 1} / {props.img.length}</div>
            </>}
        </div>
    )
}
