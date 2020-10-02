import React from "react";
import Layout from "../components/Layout";

function finale() {
  return (
    <Layout>
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
      <div style={{paddingTop:'220px'}}>
      
      </div>
      
    </Layout>
  );
}

export default finale;
