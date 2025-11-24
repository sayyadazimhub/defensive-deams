import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="md:py-40 pt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Defence Techniques About us{" "}
            <span className="text-pink-500"> Here!</span>
          </h1>
          <p className="mt-12">
          Defensive DEAMS (Digital Emergency Alert & Management System) is a proactive platform designed to empower individuals with real-time strategies, alerts, and tools for self-protection and emergency response. Whether it's personal safety, cyber threats, or natural disasters, Defensive DEAMS equips you with the knowledge and resources you need right when you need them.
          <br />Our mission is to build a safer digital and physical environment by merging technology with preparedness. From curated safety tips and situational awareness to instant reporting features, we're redefining how you respond to danger with confidence and clarity.
          </p>
        </div>
      </div>   
      <Footer />
    </>
  );
}

export default About;
