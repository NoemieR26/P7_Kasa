import { NavLink } from 'react-router-dom'
import Logo from '../../images/logo.png'
import"./Header.css";

export default function Header() {
    return <nav className="header">
           <NavLink title="Accueil"
            end to="/Home">
                 <img src={Logo} alt="Logo Kasa" className="header_logo"/>
            </NavLink>
            <ul className="navbar">
                <li className="navbar_li">
                    <NavLink title="Accueil"
                    end to="/Home">
                        Accueil
                    </NavLink>
                </li>
                <li className="navbar_li">
                    <NavLink title="Accueil"
                    end to="/About"
                    >
                        A Propos
                    </NavLink>
                </li>
            </ul>
    </nav>;
}
