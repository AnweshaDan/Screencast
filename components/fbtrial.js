import React from 'react';
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
}