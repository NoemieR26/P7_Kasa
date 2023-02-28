import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import Footer from "./components/Layout/Footer";

export default function App() {
    return(
        <BrowserRouter>
          <Header/>
            <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route exact path="/home" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/housing/:id" element={<Housing />} />
                  <Route path="*" element={<NoMatch />} />
              </Routes>
            </main>
          <Footer/>
        </BrowserRouter>
    )
}
