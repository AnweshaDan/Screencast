import React from "react";
import Logo from "../glug.png";
import Logo2 from './scl.png';
function Footer() {
  return (
    <div>
       

      <div
        className="footer"
          style={{
            margin:"auto",//changed
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0)",
            color: "#eee",
            height: "100px",
            bottom: "0",
            right: "0", left: "0",
            position: "absolute",//changed
            padding: "0",
            marginTop: "100px",
            width:"100%"

          }}
        >
                <div style={{

                  // bottom: "30px", position: "absolute", left: "0", right: "0", textAlign: "center", margin: "0 auto"

                }}>
                  <a href="https://nitdgplug.org/">
                  <img
                    src={Logo}
                    alt="logo"
                    style={{ width: "50px" }}
                  />
                  </a>
                  
                  &nbsp;&nbsp;
                  <a href={Logo2}>
                  <img
                    src={Logo2}
                    alt="logo"
                    style={{ width: "50px", borderRadius: "50px" }}
                  />
                  </a>
                  
                </div>
                <h5 style={{ left: "0", right: "0", color: "#eee", }}>HOSTED & CREATED BY GNU/LINUX USERS' GROUP</h5>
        </div>

    </div>
    
  );
}

export default Footer;
