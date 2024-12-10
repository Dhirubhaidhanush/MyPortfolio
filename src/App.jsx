import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css";
import About from "./Components/about";
import Experience from "./Components/experience";
import Cards from "./Components/cards";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Footer from "./Components/footer";

const App=()=>{
  return(
    <>
     <Navbar/>
     <About/>
     <Skills/>
     <Experience/>
     <Cards/>
     <Contact/>
     <Footer/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

export default App;