import React, { Component, useState } from "react";
 
class Login extends Component { 
  
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.password}`)
  }
  render() {
    return (
      <div className="login">
        <h2>Login To Your Account</h2>
        <form onSubmit={this.handleSubmit}>
          <p><label>Username:</label>
          <input type="text"
          required
          value={this.state.username} onChange={this.handleUsernameChange}/></p>
          <p><label>Password:</label>
          <input type="text"
          value={this.state.password} onChange={this.handlePasswordChange}
          required /></p>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
export default Login;