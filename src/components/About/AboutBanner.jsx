import Banner2 from "../../images/Banner2.png"
import "./About.css";

export default function AboutBanner() {
    return (
        <section className="banner2">
            <img src={Banner2} alt="banner" className="bannerImg2"></img>
            <div className="bannerWrapper2"></div>
        </section>
    );
}
