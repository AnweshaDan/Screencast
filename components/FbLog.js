import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import React from 'react'
import Head from 'next/head'

class FbLog extends React.Component {
    render()
    {
        return (
            <div>
                
                <FacebookLogin
                    appId="1860867024050477"
                    autoLoad
                    callback={responseFacebook}
                    render={renderProps => (
                    <button onClick={renderProps.onClick}>This is my custom FB button</button>
                    )}
                />
            </div>
        )
    }
    
}

export default FbLog
