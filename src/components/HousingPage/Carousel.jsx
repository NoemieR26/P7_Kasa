import React, { useRef , useEffect , useState } from "react";
import angleLeft from "../../images/angleLeft.png";
import angleRight from "../../images/angleRight.png";
import "./Carousel.css";

export default function Carousel(props) {
    const [index, setIndex] = useState(0);

    //Défilement auto
    const timeoutRef = useRef(null);
    const delay = 5000;
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === props.img.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);

    //

    const imgSize = () => {
        const slideshowImg = document.querySelector(".carousel_container_img");
        if(!slideshowImg){
            return 0;
        }
        return slideshowImg.width;
    }
    
    const nextPicture = () => {
        if(index === props.img.length - 1){
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prevPicture = () => {
        if(index === 0){
            setIndex(props.img.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div className="carousel">
            <div className="carousel_container" style={{transform: `translateX(-${index * imgSize()}px)`}}>
                {props.img.map((picture, i) => 
                    <img className="carousel_container_img" alt="banniere-page-logement" src={picture} key={i} />
                )}
            </div>
            
            {props.img.length > 1 && <>
            <div className="carousel_controls">
                <img className="carousel_controls_angles" onClick={prevPicture} src={angleLeft} alt="flèche carrousel"/>
                <img className="carousel_controls_angles" onClick={nextPicture} src={angleRight} alt="flèche carrousel"/>
            </div>
            <div className="carousel_counter">{index + 1} / {props.img.length}</div>
            </>}
        </div>
    )
}
