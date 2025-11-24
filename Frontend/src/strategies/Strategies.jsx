import React from "react";
import Navbar from "../components/Navbar";
import Strategy from "../components/Strategy";
import Footer from "../components/Footer";
function Strategies() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Strategy />
      </div>
      <Footer />
    </>
  );
}

export default Strategies;
