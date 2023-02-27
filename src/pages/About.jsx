import Header from "../components/Layout/Header"
import AboutBanner from "../components/About/AboutBanner"
import AboutContent from "../components/About/AboutContent"
import Footer from "../components/Layout/Footer"

export default function About() {
    return(
        <>
            <Header />
                <main>
                    <AboutBanner />
                    <AboutContent />
                </main>
            <Footer />
        </>
    )
}