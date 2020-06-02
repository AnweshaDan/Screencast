import React from 'react'
import Button from '@material-ui/core/Button';
import Head from 'next/head'

class GoogleLog extends React.Component {
    constructor(props){
        super(props)

        this.state={
            isSignedIn:true
        }
    } 


    componentDidMount()
    {
        console.log('Loading');

        window.gapi.load('auth2',()=>{
            window.gapi.auth2.init({
                client_id:'1091948986515-evn13uscvig9k6olefvrkdk3q374iumi.apps.googleusercontent.com'

            }).then(()=> {
                const isSignedIn= window.gapi.auth2.
                getAuthInstance().isSignedIn.get()
                this.setState({isSignedIn})
            })
            console.log('Api inited');

            window.gapi.load('signin2',() => {
                const params={
                    onsuccess:()=>{
                        console.log('User has finished signing in')
                    }
                }
                window.gapi.signin2.render('loginButton',params)
            })
        })

    }
    render(){
        return (
            <div>
                <Head>
                <script src="https://apis.google.com/js/platform.js" async defer></script>
                
                </Head>
                <div id="loginButton">
                <Button  variant="contained" color="secondary">
                    Login with Google
                </Button>
                </div>
            </div>
        );
    }
    
}

export default GoogleLog
