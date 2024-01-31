import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
