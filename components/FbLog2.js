import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { SocialMediaIconsReact } from 'social-media-icons-react';
//import Router from 'next/dist/next-server/server/router';
import Router from "next/router";
import axios from "axios";
import AnsAlert from "../components/AnsAlert"
import data from '../env.json';

const LoginButton = ({ facebookResponse }) => (

  <FacebookLogin
    appId="1285489205143716"
    autoload={false}
    fields="name,email,picture"
    callback={facebookResponse}
    render={renderProps => (
      <button style={{ backgroundColor: "rgba(0,0,0,0)", border: "none" }} onClick={renderProps.onClick}>
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="inset" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,149,223,1)" iconSize="6" roundness="29%"  size="54" />
      </button>)}



  >
  </FacebookLogin>

);

class FbLog2 extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
      isSignedIn: false,
      access: ""
    };
  }
  componentDidMount() {
    
      
      if(localStorage.getItem("email"))
      {
        if((localStorage.getItem('start') <= Date.now()))
        Router.push("/game");
        else 
        {
          AnsAlert(-1);
        }
      }    
    }
  

  facebookResponse = (response) => {

    localStorage.setItem("email", response.email);
    localStorage.setItem("name", response.name);
    localStorage.setItem("image", response.picture.data.url);
    localStorage.setItem('token', response.accessToken)


    axios
      .post(data.api+"/api/facebooklogin", {
        accesstoken: response.accessToken,
        expiration_time: response.data_access_expiration_time,
        userID: response.userID
      })
      .then((res) => {
        localStorage.setItem('token', res.data.access_token)

        this.setState({ user: response, isSignedIn: true,access: res.data.access_token },()=>{
          if((localStorage.getItem('start') <= Date.now()))
            Router.push("/game");
            else
            AnsAlert(-1);

        })
        
      });

  };

  render() {
    return (
      <div>
        { !this.state.isSignedIn && (
          <div
            style={{ margin: "0 auto", textAlign: "center", paddingTop: "0px" }}
          >
            <LoginButton facebookResponse={this.facebookResponse} ></LoginButton>

          </div>
        )}
        
      </div>
    );
  }
}

export default FbLog2;