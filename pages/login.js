import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Log from '../components/Log'
export default function login() {
    return (
        <div>
            <div>
                <Head>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit:no"/>
                    <title>Screencast</title>
                    <link rel = "stylesheet" type="text/css" href="question.css"/>
                </Head>
            </div>
            <div>
                <Navbar />
            
           <div>
               <Log/>
           </div>
            </div>
        </div>
    )
}

