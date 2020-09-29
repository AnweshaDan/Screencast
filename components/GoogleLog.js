import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { SocialMediaIconsReact } from 'social-media-icons-react';
import Router from "next/router";
import AnsAlert from "../components/AnsAlert"
import data from '../env.json';


const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
});

class GoogleLog extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
      isUserLoggedIn: false,
      access: "",
      result:false
    };
    //this.refresh=this.refresh.bind(this);
  }

  componentDidMount() {
    console.log('Google mounted')
    //this.responseGoogle(this.state.result)
    if(localStorage.getItem('day')==3 && localStorage.getItem('end')<Date.now()) Router.push('/game_finale')
    else{
      if(localStorage.getItem("email"))
      {
        //this.responseGoogle(this.state.result)
        this.setState({isUserLoggedIn:true},()=>{


        })
        
        
        
            
        
      }    

    }
    
  
    
    
    /*if (localStorage.getItem("email") && ((localStorage.getItem('start') <= Date.now()))) {
      //this.refresh(localStorage.getItem('token'),localStorage.getItem('ref_token'))
      console.log("email yes timer yes")
      //Router.push("/game");
    }
    else
    {
      console.log("timer no");
      //Router.push('/');  
    }*/
    
    
    
  }


  /*refresh=(a,r)=>{
    console.log(r)
    localStorage.setItem("token",a);
    console.log(localStorage.getItem("token"));
     const t=setInterval(()=>{
      
      axios.post("https://https://screencast2020.herokuapp.com/api/refresh",{
        refresh:r
      }).then((re)=>{
        
        console.log(re);
        localStorage.setItem("token",re.data.access);
        this.setState({access:re.data.access})
        console.log(localStorage.getItem("token"));
    
      })
    },50000)
    localStorage.setItem("interval_id",t);
    
  }*/
  responseGoogle = (response) => {
      console.log(response);
      
    //localStorage.setItem('token', response.tokenObj.access_token)
    axios
      .post(data.api+"/api/googlelogin", {
        token: response.tokenObj.access_token

      })
      .then((res) => {
        console.log(res);
       
        console.log("jajajaj")
        localStorage.setItem('token', res.data.access_token)
        //localStorage.setItem('ref_token', res.data.refresh_token)
        localStorage.setItem("email", response.profileObj.email);
        localStorage.setItem("name", response.profileObj.name);
        localStorage.setItem("image", response.profileObj.imageUrl);
        
        this.setState({ result:res.data.quiz_finished, access: res.data.access_token,userDetails: response.profileObj, isUserLoggedIn: true }, ()=>{
          console.log("mountain"+this.state.result)
          if((localStorage.getItem('start') <= Date.now()))
          {
            if(!(res.data.quiz_finished) && localStorage.getItem('end')>Date.now()) Router.push('/game')
            else if(res.data.quiz_finished && localStorage.getItem('end')>Date.now())
            {  
              console.log("seaaa")
              Router.push('/finale')
            }
            else{}
          } 
            
          else
            Router.reload();
           

        })
        
        //this.refresh(res.data.access_token,res.data.refresh_token);
        /* if ((localStorage.getItem('start') <= Date.now()))
          Router.push("/game");*/
      });

 };


  render() {
    console.log("render of google")
    const { classes } = this.props;

    return (
      <div>
        <div>
          <Head>

          </Head>
        </div>
        <div>
          {!this.state.isUserLoggedIn && (
            <GoogleLogin
              clientId="1091948986515-evn13uscvig9k6olefvrkdk3q374iumi.apps.googleusercontent.com"
              render={(renderProps) => (
                <div className={classes.root}  >

                  <Button
                    style={{ backgroundColor: "rgba(0,0,0,0)", padding: "0" }}
                    variant="contained"
                    color="secondary"
                    className="button"
                    onClick={renderProps.onClick}

                  >
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="4" borderStyle="inset" icon="googleplus" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(223,48,28,1)" iconSize="7" roundness="29%" size="53" />
                  </Button>
                </div>
              )}
              onSuccess={this.responseGoogle} //isSignedIn ??
              onFailure={this.responseGoogle} //handle later
              
              cookiePolicy={"single_host_origin"}
            />
          )}
        </div>
      </div>

    );
  }
}

export default withStyles(useStyles)(GoogleLog);
