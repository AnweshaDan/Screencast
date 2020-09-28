import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from '../env.json';
import Router from "next/router";
import Button from "@material-ui/core/Button";
function finale() {

    /*axios
      .get(data.api+"/api/status")
      .then((response) => {
        console.log(response);
        var temp=new Date(response.data.start_time);
        if((temp.getTime() + (temp.getTimezoneOffset() * 60000))<=Date.now())
        Router.push('/');
         
        
      })*/
   const goback=()=>
   {
     localStorage.clear();
     Router.push('/');
   }
  
  
  
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
          <span className="flicker">Congratulations!</span>
          <br />
          <span className="flicker">You have completed all Questions.</span>
          <br />
          <span className="flicker">Wait for more exciting ones.</span>
        </div>
        <div style={{paddingLeft:'180px'}}>
            <Button
            className="btnSubmit"
            variant="contained"
            color="primary"
            elevation={3}
            onClick={goback}
            style={{ backgroundColor: '#522d80', border: "3px solid white", height: "40px", width: "100px", borderRadius: "7px" }}
          >
            Logout
              </Button>
        </div>
      </div>
      <div style={{paddingTop:'210px'}}>
      <Footer />
      </div>
      
    </div>
  );
}

export default finale;
