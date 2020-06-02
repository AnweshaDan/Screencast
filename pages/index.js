import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Log from '../components/Log'
import Particles from 'react-particles-js';
import Img from 'react-image'
import Logo from '../glug.png'
import GoogleLog from '../components/GoogleLog'

console.log(Logo);

export default function login() {
    return (
        <div>
            <Particles

                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 900,
                            }

                        },
                        color: {
                            value: ['#cc0000']
                        },
                        line_linked: {
                            color: '#aa0044',
                            opacity: 1
                        }
                    },
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    position: "fixed",
                    index: "-10"


                }}
            />
            <div>
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit:no" />
                    <title>Screencast</title>
                    <link rel="stylesheet" type="text/css" href="question.css" />
                </Head>
            </div>
            <div>
                <Navbar />
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
                    <div>
                        <GoogleLog />
                    </div>
                    <style jsx>{`
    div{
        text-align:center;
        content-align:center;
        margin-top:20px;
    }
    
    `}</style>
                </div>
            </div>



        </div>
    )
}