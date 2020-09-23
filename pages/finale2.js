import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from '../env.json';
import Router from "next/router";
function finale() {
 /* useEffect()
  {
    axios
      .get(data.api+"/api/status")
      .then((response) => {
        if(!(  ((new Date(response.data.end_time)).getTime() < Date.now() )))
              {
                
                Router.push('/game')
              }
      })
  }*/
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
          <span className="flicker">Times up !</span>
          <br />
          <span className="flicker">This round is over !</span>
          <br />
          <span className="flicker">Wait for more exciting ones.</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default finale;
