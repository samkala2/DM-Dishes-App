import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import back2 from '../back3.jpg'
import kitchen from './splash.jpg'
import './login.css'
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Home page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-splash-page">
        <img className="kitchen"  src={kitchen}/>
        <div className="form-cont">
          <form 
          className="Modal"
          onSubmit={this.handleSubmit}>
            <div className="form-inputs">
              {/* <h2> Sign In </h2> */}
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
              <br/>
              <input id="submit" type="submit" value="Login" />

              {this.renderErrors()}
            </div>
          </form>
              <span>Or</span> <Link to="/signup"> Signup </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);