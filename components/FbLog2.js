import React from "react";
import FacebookLoginWithButton from "react-facebook-login";
import Button from "@material-ui/core/Button";
import Router from "next/dist/next-server/server/router";
import axios from "axios";
const componentClicked = () => {
  console.log("Clicked!");
};

const LoginButton = ({ facebookResponse }) => (
  <FacebookLoginWithButton
    appId="330897641228705"
    variant="contained"
    fields="name,email,picture"
    onClick={componentClicked}
    callback={facebookResponse}
    cssClass="fbbutton"
  />
);

const UserScreen = ({ user }) => (
  <>
    <h1>Welcome {user.name}!</h1>
    <p>{user.email}</p>
    <img
      src={user.picture.data.url}
      height={user.picture.height}
      width={user.picture.width}
      alt="avatar"
    />
  </>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
      isSignedIn: false,
    };
  }

  facebookResponse = (response) => {
    console.log(response);

    localStorage.email = result.email;
    localStorage.name = result.name;

    this.setState({ ...this.state, user: response, isSignedIn: true });
    axios
      .post("http://dummy.restapiexample.com/api/v1/create", {
        data: this.state.user.accessToken,
        id: 24,
      })
      .then((res) => {
        console.log(res);
      });
  };

  logout = () => {
    console.log("yo");
    FB.logout();
  };

  render() {
    return (
      <div>
        <div style={{ margin: "auto", textAlign: "center", paddingTop: "5px" }}>
          {this.state.user ? (
            <div>
              <UserScreen user={this.state.user} />
              <Button
                variant="contained"
                color="secondary"
                onClick={this.logout}
                href="/"
              >
                Log Out
              </Button>

              <Button variant="contained" color="secondary" href="/game">
                Play
              </Button>
            </div>
          ) : (
            <LoginButton facebookResponse={this.facebookResponse} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
