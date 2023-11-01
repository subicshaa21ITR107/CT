
import React from 'react';
import{Link} from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <nav>
      <h1>CareerConnect</h1>
      <ul>
        
        <li><Link to ="/Home">Home</Link></li>
        <li><Link to="/Jobs">Jobs</Link></li>
        <li><Link to="/PostJob">Post-jobs</Link></li>
        <li><Link to="/Savejobs">Saved-Jobs</Link></li>
        <li><Link to="/Signup">SignUp</Link></li>
        <li><Link to="/LoginPage">LogIn</Link></li>
        <li><Link to="/discussion">Comments</Link></li>
      </ul>
    </nav>    
  );
}

export default Header;
