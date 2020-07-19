import React from "react";
import Logo from "../glug.png";
import Logo2 from './scl.png';
function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        bottom: "0",
        color: "#eee",
        height: "100%"
      }}
    >
      <div style={{

        bottom: "30px", position: "absolute", left: "0", right: "0", textAlign: "center", margin: "0 auto"

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
      <h5 style={{ bottom: "0", position: "absolute", left: "0", right: "0", color: "#eee", }}>HOSTED & CREATED BY GNU/LINUX USERS' GROUP</h5>
    </div>
  );
}

export default Footer;
