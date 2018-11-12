import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';

class App extends Component {
  state = {users: []}
  
  componentDidMount(){
    /*
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
    */
  }
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div>{user.username}</div>
        )}
      </div>
      </div>
    );
  }
}

export default App;
