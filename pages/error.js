import React from "react";
import Layout from "../components/Layout";

function error() {
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
          <span className="flicker">Deadend!</span>
          <br />
          <br />
          <span className="flicker">We are extremely sorry,<br /> seems like some error has occured!</span>
          <br />
          <span className="flicker"></span>
        </div>
      </div>
    </Layout>
  );
}

export default error;
