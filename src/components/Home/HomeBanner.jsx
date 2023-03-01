import"./Home.css";
import banner from "../../images/banner.png"

export default function HomeBanner() {
    return (
        <section className="banner">
            <img src={banner} alt="banner" className="bannerImg"></img>
            <div className="bannerWrapper"></div>
            <h1 className="bannerText">Chez vous, partout et ailleurs</h1>
        </section>
    );
}
