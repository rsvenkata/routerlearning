import React, { Component } from "react";

export default class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      jsonValue: "",
      authenticated: false
    };
  }
 
  myFun = (event) => {
    event.preventDefault();
    
    //axios call to backend
    //if login is succesful then we need to store JSON and set authenticated is true in state object

    this.setState({ 
        jsonValue: event.target.name,
        authenticated: true
    });
  };
  
  render() {
    return (
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <p>
            <input
              type="text"
              placeholder="First name"
              name={this.state.firstname}
              onChange={this.myFun}
            />
          </p>
          <p>
            <button onClick= { () => {
                //if condition 
                console.log(this.state.authenticated);
                if(this.state.authenticated === true)
                this.props.history.push('/app')
                else
                this.props.history.push('/')
                
          }}>Log me in</button>
          </p>
        </form>

      </div>
    );
  }
}
