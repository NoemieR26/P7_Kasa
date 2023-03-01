import banner2 from "../../images/banner2.png"
import "./About.css";

export default function AboutBanner() {
    return (
        <section className="banner2">
            <img src={banner2} alt="banner" className="bannerImg2"></img>
            <div className="bannerWrapper2"></div>
        </section>
    );
}
