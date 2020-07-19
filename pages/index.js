import React, { useEffect, useState } from "react";

import Head from "next/head";
import Logo from "../glug.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import GoogleLog from "../components/GoogleLog";
import FbLog2 from "../components/FbLog2";
import Timer2 from "../components/Timer2"
import Particles from "react-particles-js";






function index() {
  const [Stop, setStop] = useState(Date.now());
  return (
    <div>
      <style jsx>{`
        div {
          text-align: center;
          content-align: center;
          margin: 0px auto;
        }
      `}</style>

      {/* <Particles
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
      /> */}

      <div>

        <div>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, shrink-to-fit:no"
            />
            <title>Screencast </title>
            <link rel="stylesheet" type="text/css" href="question.css" />
          </Head>
        </div>

        <Navbar />

        <Timer2 />



        <div>
          <div
            className="sign"
            style={{
              marginTop: "40px",
              marginBottom: "20px",
              fontFamily: "'Russo One', sans-serif",
            }}
          >
            <span className="fast-flicker">screen</span>cast{" "}
            <span className="flicker">2020 </span>
          </div>
          <div className="login-head" style={{ marginBottom: "60px" }}>
            <h1>Login to play </h1>
          </div>
        </div>

        <GoogleLog />
        <FbLog2 />
      </div>
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          width: "100%",
          bottom: "25px",
          position: "fixed",
          textAlign: "center",
        }}
      >
        <img
          src={Logo}
          alt="logo"
          style={{
            marginTop: "90px",
            width: "50px"

          }}
        />
      </div>
      <Footer style={{ color: "white" }} />

    </div>

  );
}

export default index;
