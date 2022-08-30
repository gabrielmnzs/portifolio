import React from "react";

import "./styles/global.scss";

import Intro from "./pages/Intro";
import About from "./pages/About";
import Work from "./pages/Work";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Intro />
      {/* <About />
      <Work />      
      <Portfolio />
      <Contact />
      <Footer></Footer> */}
    </main>
  );
}

export default App;
