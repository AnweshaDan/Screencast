
import React from 'react'
import Router from "next/router";
import Countdown, { zeroPad } from 'react-countdown';
import {
    Typography,
    CardContent,
    CardHeader,
    Card
} from "@material-ui/core";

export default function Timer(props) {
    console.log(props)
    const complete=()=>
    {
        if(localStorage.getItem('email'))
        {
            console.log("DONEEEEEE");
            Router.push('/');
        } 
    }
    const Completionist = () => {
        return (
            <span className="sign">
            <Card style={{ backgroundColor: "rgba(0,0,0,0)", color: "white", padding: "0", margin: "0 auto" }}>
                <CardHeader
                    style={{ textAlign: "center" }}
                    title=" ">
    
                </CardHeader>
                <CardContent>
                    <Typography style={{ textAlign: "center", fontSize: "17px" }}>
                       
                        <h1>
                            Game is live !
                        </h1>
                    </Typography>
                </CardContent>
            </Card>
        </span>
        )
        
    }
    
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <span className="sign">
                    <Card style={{ backgroundColor: "rgba(0,0,0,0)", color: "white", padding: "0", margin: "0 auto" }}>
                        <CardHeader
                            style={{ textAlign: "center" }}
                            title=" ">

                        </CardHeader>
                        <CardContent>
                            <Typography style={{ textAlign: "center", fontSize: "17px" }}>
                                <h1>
                                    {props.message}&nbsp;&nbsp;{zeroPad(days, 2)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
                                </h1>
                                <h1>
                                    Game is not live yet !
                                </h1>
                            </Typography>
                        </CardContent>
                    </Card>
                </span>)

        }
      



    };

  
    



    return (
        
        <Countdown
        date={props.start}
           
            renderer={renderer}
            onComplete={complete}
        />
    )

}