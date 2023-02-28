import { useState } from "react";
import angleDown from "../../images/angle_down.png";
import angleUp from "../../images/angle_up.png";
import"./Collapse.css";


export default function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen((openTab) => !isOpen); 
    };

    return (
        <>
            <div onClick={openHandler} className="collapse_header">
                <h2 className="collapse_header_title">{props.title}</h2>
                {!isOpen ?  <img className="collapse_header_angle" alt="flèche bas" src={angleDown}/> : <img className="collapse_header_angle" alt="flèche haut" src={angleUp}/>}
            </div>
            {isOpen && 
                <div className="collapse_content">{props.content}</div>
            }
        </>
    )
}