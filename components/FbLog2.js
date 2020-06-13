

import React from 'react';
import FacebookLoginWithButton from 'react-facebook-login';
import Button from '@material-ui/core/Button';
//import Router from 'next/dist/next-server/server/router';
import Router from 'next/router'

import axios from 'axios'
const componentClicked = () => {
  console.log( "Clicked!" )
}

const LoginButton = ({facebookResponse}) => (
  <FacebookLoginWithButton
    appId="330897641228705"
    autoload={false}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={facebookResponse}
    icon="fa-facebook"/>
  )


const UserScreen = ({user}) => (
  <>
    <h1>Welcome {user.name}!</h1>
    <p>{ user.email }</p>
    <img src={user.picture.data.url} height={user.picture.height} width={user.picture.width} alt="avatar"/>
  </>
)

class App extends React.Component {
    constructor()
    {
        super();
        this.state = {
            user:false,
            isSignedIn:false
        };
    }
  
  facebookResponse = (response) => {
       console.log( response ); 
       localStorage.setItem('email',response.email);
       localStorage.setItem('name',response.name);
       console.log(localStorage.getItem('email'))
       
       this.setState( {...this.state, user: response,isSignedIn:true } )
       axios.post('http://dummy.restapiexample.com/api/v1/create',{
        data: this.state.user.accessToken,
        id:24
      })
      .then((res)=> {
        console.log(res);
  
      })
      Router.push('/game');
     }

    

  render() {
   
    
    return (
        <div>
            <div style={{ margin: "auto", textAlign: "center", paddingTop: "2em" }}>
           
            <LoginButton facebookResponse={this.facebookResponse}/>
            
        </div>
        
        
            
        </div>
       
            
    )
  }
}

export default App