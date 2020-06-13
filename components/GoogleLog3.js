//using this
import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Router from 'next/router'
const useStyles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  });
  

class GoogleLog3 extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
      isUserLoggedIn: false
    };
  }

  responseGoogle = response => {
    console.log(response);
    this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
    axios.post('http://dummy.restapiexample.com/api/v1/create',{
      data: response.tokenObj.id_token,
      id:24
    })
    .then((res)=> {
      console.log(res);

    })
    console.log(typeof(response.profileObj.name))//string
    localStorage.setItem('email',response.profileObj.email);
    localStorage.setItem('name',response.profileObj.name);
    console.log(localStorage.getItem('name'));//returns name
    Router.push('/game')
  };
  //{localStorage.getItem('name')}
  

 

  render() {
    const { classes } = this.props;





    return (
      <div className="App">
        {!this.state.isUserLoggedIn && (
          <GoogleLogin
            clientId="1091948986515-evn13uscvig9k6olefvrkdk3q374iumi.apps.googleusercontent.com" 
            render={renderProps => (
                <div className={classes.root}>
                <Button
                variant="contained"
                color="secondary"
                  className="button"
                  onClick={renderProps.onClick}
                  href='/game'
                >
                  Log In with Google
                </Button>

              </div>
            )}
            onSuccess={this.responseGoogle}//isSignedIn ??
            onFailure={this.responseGoogle}//handle later
          />
        )}
      
      </div>
    );
  }
}

export default withStyles(useStyles)(GoogleLog3);