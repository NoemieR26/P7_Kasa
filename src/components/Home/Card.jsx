import { NavLink } from 'react-router-dom'
import"./Home.css";

export default function Card ({ id, title, cover }) {
    return(
        <li key={id} className="housing">
            <NavLink title="Housing" end to={"/housing/" + id}>
                <div className="housing_card">
                    <img src={cover} alt={title}  className="housing_card_cover"/>
                    <div className="housing_card_content">
                        <h2 className="housing_card_content_title">{title}</h2>
                    </div>
                </div>
            </NavLink>
        </li>
    )
}
