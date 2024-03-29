import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                {/* <Link to={'/tweets'}>All Tweets</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_tweet'}>Write a Tweet</Link> */}
                <button
                className="logout-button" 
                onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                {/* <Link to={'/signup'}>Signup</Link>
                <Link to={'/'}>Login</Link> */}
            </div>
        );
      }
  }

  render() {
      return (
        <div className="nav-bar">
            {/* <h1>Do My Dishes</h1> */}
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;