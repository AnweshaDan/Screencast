//using this
import React from "react";
import GoogleLogin from "react-google-login";

import axios from "axios";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Router from "next/router";
const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
});

class GoogleLog3 extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
      isUserLoggedIn: false,
      access:""
    };
    this.refresh=this.refresh.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("email")) Router.push("/game");
  }
  
  refresh=(res)=>{
    console.log(res.data.refresh_token)
    localStorage.setItem("token",res.data.access_token);
    console.log(localStorage.getItem("token"));
     const t=setInterval(()=>{
      alert("Refreshing");
      axios.post("http://screencast20.azurewebsites.net/api/refresh",{
        refresh:res.data.refresh_token
      }).then((r)=>{
        console.log(r);
        localStorage.setItem("token",r.data.access);
        console.log(localStorage.getItem("token"));
    
      })
    },50000)
    localStorage.setItem("interval_id",t);
    


  }
  responseGoogle = (response) => {
   
    console.log(response);
    localStorage.setItem('token',response.tokenObj.access_token)
    console.log(localStorage.getItem('token'));
    this.setState({ userDetails: response.profileObj, isUserLoggedIn: true,access:response.tokenObj.access_token });
    axios
      .post("http://screencast20.azurewebsites.net/api/googlelogin", {
        token: response.tokenObj.access_token
       
      })
      .then((res) => {
        
        console.log((res));
        localStorage.setItem('token',res.data.access_token)
        this.setState({access: res.data.access_token})
        this.refresh(res);
        console.log(localStorage.getItem("token"));
      console.log(this.state.access);
      Router.push("/game");
        
      });
      
    console.log(typeof response.profileObj.name); //string
    localStorage.setItem("email", response.profileObj.email);
    localStorage.setItem("name", response.profileObj.name);
    localStorage.setItem("image", response.profileObj.imageUrl);
    
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        {!this.state.isUserLoggedIn && (
          <GoogleLogin
            clientId="1091948986515-evn13uscvig9k6olefvrkdk3q374iumi.apps.googleusercontent.com"
            render={(renderProps) => (
              <div className={classes.root}>
                <Button
                  variant="contained"
                  color="secondary"
                  className="button"
                  onClick={renderProps.onClick}
                  href="/game"
                >
                  LogIn with Google
                </Button>
              </div>
            )}
            onSuccess={this.responseGoogle} //isSignedIn ??
            onFailure={this.responseGoogle} //handle later
            cookiePolicy={"single_host_origin"}
          />
        )}
      </div>
    );
  }
}

export default withStyles(useStyles)(GoogleLog3);