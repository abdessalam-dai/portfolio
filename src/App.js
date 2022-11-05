import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Navigation from "./components/Navigation";

const Main = () => {
    return (
        <div className="text-white">
            <Navbar/>
            <Links/>
            <Navigation/>
            <div className={"px-6 lg:px-36"}>
                <About/>
                <Projects/>
                <Skills/>
                <Education/>
                <Certifications/>
                {/*<Awards/>*/}
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <Main/>
        </div>
    );
}

export default App;
