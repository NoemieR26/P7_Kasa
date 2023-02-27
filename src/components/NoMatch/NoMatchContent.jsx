import { NavLink } from "react-router-dom";
import"./NoMatchContent.css";

export default function ErrorContent() {
    return(
        <section className="error_page">
            <h1 className="error_page_title">404</h1>
            <h2 className="error_page_subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink title='Accueil' end to="/home" className="error_page_link">Retournez sur la page d'accueil</NavLink>
        </section>
    )
}