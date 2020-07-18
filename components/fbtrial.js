/*import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import Router from "next/router";

export default class FacebookSignIn extends React.Component {
    constructor(props) {
        super(props)
    }
    
    setData(res) {
        localStorage.email = res.email;
        localStorage.image = res.picture.data.url;
        localStorage.name = res.name;
        Router.push("/game")
    }

    render() {
        return <FacebookLogin
            appId="330897641228705"
            autoLoad={false}
            fields="name,email,picture"
            callback={(res) => { this.setData(res) }}
            className="p-3 float-right"
            render={renderProps => (
                <button onClick={renderProps.onClick} className="m-2 align-middle loginBtn loginBtn--facebook">Facebook</button>
            )} />
    }
}*/



/*import React from "react";
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

    console.log(localStorage.getItem("image"));

    this.setState({ ...this.state, user: response, isSignedIn: true });
    axios
      .post("http://dummy.restapiexample.com/api/v1/create", {
        data: this.state.user.accessToken,
        id: 24,
      })
      .then((res) => {
        console.log(res);
      });
    Router.push("/game");
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
*/