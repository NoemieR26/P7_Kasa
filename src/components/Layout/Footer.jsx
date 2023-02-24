import logoFooter from '../../images/logo_footer.png'
import"./Footer.css";

export default function Footer() {
    return(
        <footer className='footer'>
            <img src={logoFooter} alt='logo-kasa' className='footer_logo' />
            <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}