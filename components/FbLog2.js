import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {SocialMediaIconsReact} from 'social-media-icons-react';
//import Router from 'next/dist/next-server/server/router';
import Router from "next/router";
import axios from "axios";

const LoginButton = ({ facebookResponse }) => (
  
  <FacebookLogin
    appId="330897641228705"
    autoload={false}
    fields="name,email,picture"
    callback={facebookResponse}
    render={renderProps => (
      <button style={{backgroundColor:"rgba(0,0,0,0)",border:"none"}} onClick={renderProps.onClick}>
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="inset" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,149,223,1)" iconSize="5" roundness="29%" url="http://localhost:3000/game" size="45" />
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
      access:""
    };
  }
  componentDidMount() {
    if (localStorage.getItem("email")) Router.push("/game");
  }

  facebookResponse = (response) => {
    console.log(response);
    localStorage.setItem("email", response.email);
    localStorage.setItem("name", response.name);
    localStorage.setItem("image", response.picture.data.url);
    localStorage.setItem('token',response.accessToken)
    console.log(localStorage.getItem('email'));

    

    this.setState({ user: response, isSignedIn: true,access:response.accessToken });
    axios
      .post("https://screencast2020.herokuapp.com/api/facebooklogin", {
       accesstoken:response.accessToken,
       expiration_time:response.data_access_expiration_time,
       userID:response.userID
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem('token',res.data.access_token)
        
        this.setState({access: res.data.access_token})
        
        console.log(localStorage.getItem("token"));
      console.log(this.state.access);
      
      Router.push("/game");
      });
      
  };

  render() {
    return (
      <div>
        <div
          style={{ margin: "auto", textAlign: "center", paddingTop: "10px" }}
        >
          <LoginButton facebookResponse={this.facebookResponse} ></LoginButton>
          
        </div>
      </div>
    );
  }
}

export default FbLog2;