import Header from "../components/Layout/Header";
import HousingPage from "../components/HousingPage/HousingPage";
import Footer from "../components/Layout/Footer"

export default function Housing() {
    return(
        <>
            <Header />
                <main>
                    <HousingPage />
                </main>
            <Footer />
        </>
    )
}
