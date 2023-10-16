import React, { Component } from 'react';
import './App.css'

class App extends Component {
  users = []
  constructor() {
    super();
    this.state = {
      users: this.users
    };
  }

  componentDidMount() {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data.users }))
  }

  render() {

    return (
      <div>
        <h1>Dummy data</h1>
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Profile pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((element) => {
              return <tr key={element.id}>
                <td>{element.id}</td>
                <td><img src={element.image} alt="Profile" width="50" height="50" /></td>
                <td>{element.firstName}</td>
                <td>{element.lastName}</td>
                <td>{element.gender}</td>
                <td>{element.email}</td>
                <td>{element.username}</td>
                <td>{element.domain}</td>
                <td>{element.ip}</td>
                <td>{element.university}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
