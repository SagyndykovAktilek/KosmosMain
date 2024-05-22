import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="main">
        <Navbar />
        <Home />
				<Footer />
      </div>
    </div>
  );
}

export default App;
