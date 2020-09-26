import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from '../env.json';
import Router from "next/router";
function finale() {


  return (
    <div>
      <Navbar />

      <div>
        <div
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontFamily: "'Russo One', sans-serif",
            margin: "190px auto",
          }}
        >
          <span className="flicker">Game is over!</span>
          <br />
          <span className="flicker">Thanks for participating !</span>
          <br />
          <span className="flicker">Results will be up soon !</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default finale;
