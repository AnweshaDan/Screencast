import React from "react";
import GoogleLog2 from '../components/GoogleLog2'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Logo from '../glug.png'
import FbLog from '../components/FbLog'




function trial2() {
    return (
        <div>
        <div>
            <div>
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit:no" />
                    <title>Screencast</title>
                    <link rel="stylesheet" type="text/css" href="question.css" />
                </Head>
            </div>
            
                    
                
            
            <Navbar/>
            <div style={{
                    marginRight: "auto", marginLeft: "auto", textAlign: "center", marginTop: "100px"
                }}>
                    <img src={Logo} alt="logo" style={{ position: "relative", float: "bottom", height: "120px", width: "auto" }} />

                </div>

                <div>
                    <div className="sign">
                        <span className="fast-flicker">screen</span>cast <span className="flicker">2020 </span>
                    </div>
                    <div className="login-head">
                        <h1>Login to play</h1>
                    </div>
                </div>
            <GoogleLog2/>
            
        </div>
         <style jsx>{`
         div{
             text-align:center;
             content-align:center;
             margin-top:20px;
         }
         
         `}</style>
         </div>
    )
}

export default trial2