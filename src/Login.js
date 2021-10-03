import React, { Component, useState } from "react";
 
class Login extends Component { 
  //Create constructor and declare events to log changes made to SignUp/Login Form
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      username: '',
      password: '',
      subscribedDate: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
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

  handleSubscribedDateChange = (event) => {
    this.setState({
      subscribedDate: event.target.value
    })
  }

//submit changes show updates
  handleSubmit = event => {
    alert(`${this.state.username} has been added to our mailing list!`)
  }
  render() {
    return (
      <div className="login">
        <h2>Login To Your Account</h2>
        <form onSubmit={this.handleSubmit}>
        <p><label>Name</label>
          <input type="text"
          value={this.state.name} onChange={this.handleNameChange}
          required /></p>
          <p><label>Username:</label>
          <input type="text"
          required
          value={this.state.username} onChange={this.handleUsernameChange}/></p>
          <p><label>Password:</label>
          <input type="password"
          value={this.state.password} onChange={this.handlePasswordChange}
          required /></p>
          <p><label>Subscribed Date:</label>
          <input type="text"
          value={this.state.subscribedDate} onChange={this.handleSubscribedDateChange}
          required /></p>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
export default Login;