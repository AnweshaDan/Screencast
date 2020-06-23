import React from "react";
import Navbar from "../components/Navbar";
import Leadertable from "../components/Leadertable";
import Footer from "../components/Footer";
import Particles from "react-particles-js";

export default function leaderboard() {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: false,
                value_area: 500,
              },
            },
            color: {
              value: ["#cc0000"],
            },
            line_linked: {
              color: "#aa0044",
              opacity: 1,
            },
          },
        }}
        style={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          position: "fixed",
          index: "-10",
        }}
      />
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
