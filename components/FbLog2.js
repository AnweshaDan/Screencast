import React from "react";
import FacebookLoginWithButton from "react-facebook-login";

//import Router from 'next/dist/next-server/server/router';
import Router from "next/router";
import axios from "axios";

const LoginButton = ({ facebookResponse }) => (
  <FacebookLoginWithButton
    appId="330897641228705"
    autoload={false}
    fields="name,email,picture"
    callback={facebookResponse}
    cssClass="fbbutton"
  />
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
          <LoginButton facebookResponse={this.facebookResponse} />
        </div>
      </div>
    );
  }
}

export default FbLog2;