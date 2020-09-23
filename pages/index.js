import React, { useEffect, useState } from "react";



import Head from "next/head";

import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoogleLog from "../components/GoogleLog";
import FbLog2 from "../components/FbLog2";
import Timer2 from "../components/Timer2"
import Router from "next/router";
import data from '../env.json';

function index() {

  const [end, setEnd] = useState(Date.now());
  const [start, setStart] = useState(Date.now());
  const [day, setDay] = useState(0);

  useEffect(() => {
    
    axios
      .get(data.api+"/api/status")
      .then((response) => {
        console.log(response);

        var temp=new Date(response.data.start_time);
        setStart(temp.getTime() + (temp.getTimezoneOffset() * 60000));        
        let temp2 = new Date(response.data.end_time);
        setEnd(temp2.getTime() + (temp2.getTimezoneOffset() * 60000));
        setDay(response.data.current_day)

        localStorage.setItem("start", start);
        localStorage.setItem("end", end);
        localStorage.setItem("day",day);

        if(localStorage.getItem('day')==3 && (localStorage.getItem('end') < Date.now()))
              Router.push('/game_finale')
        
        
        if (localStorage.getItem('email') && (localStorage.getItem('start') < Date.now()))
        {
          //console.log(Date.now()+"    "+localStorage.getItem('start'))
          //Router.push('/game')
        }
       
         

        //if(localStorage.getItem('end') < Date.now()) Router.push('/finale2');
      });
  })

  return (




    <div style={{ textAlign: "center", minHeight: "100vh" }}>

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

      <Timer2 start={start} />

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

      <div className='rowC' style={{ margin: "0 auto", marginBottom: '100px', textAlign: "center", width: "100%", justifyContent: "center" }}>
        <GoogleLog />
        <FbLog2 />
      </div>
    
      <div>
        <Footer />
      </div>

    </div>





  );
}

export default index;
