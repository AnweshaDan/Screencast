

import React from 'react';
import FacebookLoginWithButton from 'react-facebook-login';

//import Router from 'next/dist/next-server/server/router';
import Router from 'next/router'
import axios from 'axios'


const LoginButton = ({facebookResponse}) => (
  <FacebookLoginWithButton
    appId="330897641228705"
    autoload={false}
    fields="name,email,picture"
    
    callback={facebookResponse}
    icon="fa-facebook"/>
  )

class FbLog2 extends React.Component {
    constructor()
    {
        super();
        this.state = {
            user:false,
            isSignedIn:false
        };
    }
    componentDidMount(){
      if(localStorage.getItem('email'))
        Router.push('/game');
    }
  
  facebookResponse = (response) => {
       console.log( response ); 
       localStorage.setItem('email',response.email);
       localStorage.setItem('name',response.name);
       localStorage.setItem('image',response.picture.data.url);

       console.log(localStorage.getItem('image'))
       
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

export default FbLog2