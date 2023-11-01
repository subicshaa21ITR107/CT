import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import your CSS file for styling
import Header from "./Header";
class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here
    console.log('Login data:', this.state);
  };

  render() {
    <Header />
    return (
    
      <div className="login-container">
        <h2 className="login-heading">Log In</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">
              Log In
            </button>
          </div>
        </form>
        <p className="login-info">
          Don't have an account? <Link to="/signup">Sign up here</Link>.
        </p>
      </div>
    );
  }
}

export default LoginPage;
