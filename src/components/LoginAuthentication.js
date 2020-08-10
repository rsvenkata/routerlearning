import React, { Component } from 'react'

class LoginAuthentication extends Component {

  constructor() {
    super()
    this.authenticated = false;
  }

  state = {
    jsonVal: ''
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated(cb) {
    return this.authenticated;
  }

  render() {
    return (
      <div>
        Render Login form
      </div>
    )
  }
}

export default new LoginAuthentication();