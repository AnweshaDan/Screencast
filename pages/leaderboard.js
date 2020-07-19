import React from "react";
import Navbar from "../components/Navbar";
import Leadertable from "../components/Leadertable";
import Footer from "../components/Footer";
import Particles from "react-particles-js";

export default function leaderboard() {
  return (
    <div>

      <Navbar />
      <div className="head">
        <div
          className="container neon-box"
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "'Russo One', sans-serif",
          }}
        >
          <span className="flicker">LEADERBOARD</span>
        </div>
      </div>

      <Leadertable />

      <Footer />
    </div>
  );
}
