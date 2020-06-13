//using this
import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  });
  

class GoogleLog2 extends React.Component {
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
    localStorage.email = response.profileObj.email;
    localStorage.image = response.profileObj.imageUrl;
    localStorage.name = response.profileObj.name;
  };

  logout = () => {
    this.setState({isUserLoggedIn: false})
  };

 

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
                >
                  Log In with Google
                </Button>

              </div>
            )}
            onSuccess={this.responseGoogle}
            isSignedIn={true}
            onFailure={this.responseGoogle}//handle later
          />
        )}
        {this.state.isUserLoggedIn && (
          <div className="userDetails-wrapper">
            <div className="details-wrapper">
              <GoogleLogout
                render={renderProps => (
                <div className={classes.root}>
                  <Button
                  variant="contained"
                  color="secondary"
                    className="logout-button"
                    onClick={renderProps.onClick}
                  >
                    Log Out
                  </Button>
                  
                  <Button variant="contained" color="secondary" href='/game'>
                    Play
                  </Button>
                </div>
                
                )}
                onLogoutSuccess={this.logout}
              />


              <div className="image">
                <img src={this.state.userDetails.imageUrl} />
              </div>
              <div className="name">
                Welcome {this.state.userDetails.givenName}{" "}
                {this.state.userDetails.familyName}
              </div>
              <div className="email"><i>{this.state.userDetails.email}</i></div>
            </div>
            <div className="bar" />
            <div className="stand" />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(useStyles)(GoogleLog2);