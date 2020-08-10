import React from 'react'
import LoginPage from './LoginPage'

export default function LandingPage(props) {
    return (
        <div>
          <h1> Landing page </h1>  
          <button onClick={ () => { props.history.push('/login') }
          }>Take me to Login page</button>

        </div>
    )
}
