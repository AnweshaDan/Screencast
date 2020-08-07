import React from "react";
import Logo from "../glug.png";
import Logo2 from './scl.png';
function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,0)",
        color: "#eee",
        height: "100px",
        bottom: "0",
        right: "0", left: "0",
        position: "fixed",//changed
        padding: "0",
        marginBottom: "0"

      }}
    >
      <div style={{

        // bottom: "30px", position: "absolute", left: "0", right: "0", textAlign: "center", margin: "0 auto"

      }}>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "50px" }}
        />
        &nbsp;&nbsp;
        <img
          src={Logo2}
          alt="logo"
          style={{ width: "50px", borderRadius: "50px" }}
        />
      </div>
      <h5 style={{ left: "0", right: "0", color: "#eee", }}>HOSTED & CREATED BY GNU/LINUX USERS' GROUP</h5>
    </div>
  );
}

export default Footer;
