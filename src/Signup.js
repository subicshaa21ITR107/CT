// import React, { Component } from 'react';

// class SignupPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: '',
//       email: '',
//       password: '',
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div>
//         <h2>Sign Up</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={this.state.username}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <button type="submit">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SignupPage;

import React, { Component } from 'react';
import './SignupPage.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';


class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      registered: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // You can perform form validation and submit data to the server here
    console.log(this.state);
    setTimeout(() => {
      this.setState({ registered: true });
    }, 1000);
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
  
    try {
      const response = await fetch('http://localhost:3001/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      if (response.status === 201) {
        // Registration was successful
        this.setState({ registered: true });
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };
  

  render() {
    const { registered } = this.state;
    return (
      <div className="signup-container">
        <h2 className="signup-heading">Create an Account</h2>
        {registered ? (
          <div className="success-message">Registered Successfully!</div>
        ) : (
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
              className="input-field"
            />
          </div>
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
            <label htmlFor="password"> Set Password:</label>
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
            <label htmlFor="password1">Password:</label>
            <input
              type="password"
              id="password1"
              name="password1"
              value={this.state.password1}
              onChange={this.handleInputChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </div>
        </form>
        )}
        <p className="signup-info">
          Already have an account? <Link to="/LoginPage">Log in here</Link>.
        </p>
      </div>
    );
  }
}

export default SignupPage;

