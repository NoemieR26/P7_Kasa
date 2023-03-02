import { BrowserRouter } from "react-router-dom";
import IndexRoutes from "./components/Routes/Routes";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import"./App.css";

export default function App() {
    return(
        <BrowserRouter>
          <Header/>
            <main>
                <IndexRoutes />
            </main>
          <Footer/>
        </BrowserRouter>
    )
}

