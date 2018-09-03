import React from "react";
import ReactDOM from "react-dom";
import './index.css';

import Hero from "./Components/Hero/Hero";
import Info from "./Components/Info/Info";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ToTop from "./Components/ToTop/ToTop";


function App() {
  return (
    <div className="App">
      <Hero />
      <Info />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
