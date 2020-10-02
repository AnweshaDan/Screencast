import React from "react";
import Leadertable from "../components/Leadertable";
import Layout from "../components/Layout";

export default function leaderboard() {
  return (
    <Layout>
    <div style={{ textAlign: "center", minHeight: "100vh" }}>

      
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

      
    </div>
    </Layout>
  );
}
