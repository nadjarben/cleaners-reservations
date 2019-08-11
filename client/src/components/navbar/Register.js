import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { registerUser } from "../../store/actions/authActions";
import classnames from "classnames";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      phone: "",
      address: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      surname: this.state.surname,
      phone: this.state.phone,
      address: this.state.address,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history); 

  };
  
render() {
    const { errors } = this.state;
return (
  <div style={{marginTop:'9vh'}}>
            <Link to="/landing" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back
            </Link>
      <div className="container" style={{marginTop:'2%'}}>
        <div className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b style={{color:'red', marginTop:'5%'}}>Register</b>
              </h4>
              <p className="grey-text text-darken-1" style={{marginTop:'4%'}}>
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <TextField
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  autoComplete="family-name"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                  label="Name"
                />
                <span className="red-text">{errors.name}</span>
              </div>

              <div className="input-field col s12" style={{marginTop:'3%'}}>
                <TextField
                  onChange={this.onChange}
                  value={this.state.surname}
                  error={errors.surname}
                  id="surname"
                  type="text"
                  autoComplete='given-name'
                  className={classnames("", {
                    invalid: errors.surname
                  })}
                  label='Surname'
                />
                <span className="red-text">{errors.surname}</span>
              </div>

              <div className="input-field col s12" style={{marginTop:'3%'}}>
                <TextField
                  onChange={this.onChange}
                  value={this.state.phone}
                  error={errors.phone}
                  id="phone"
                  type="text"
                  className={classnames("", {
                    invalid: errors.phone
                  })}
                  label="Phone"
                />
                <span className="red-text">{errors.phone}</span>
              </div>

              <div className="input-field col s12" style={{marginTop:'3%'}}>
                <TextField
                  onChange={this.onChange}
                  value={this.state.address}
                  error={errors.address}
                  id="address"
                  type="text"
                  className={classnames("", {
                    invalid: errors.address
                  })}
                  label="Address"
                />
                <span className="red-text">{errors.address}</span>
              </div>
              
              <div className="input-field col s12" style={{marginTop:'3%'}}>
                <TextField
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                  label="Email"
                />
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12" style={{marginTop:'3%'}}>
                <TextField
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                  label='Password'
                />
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12" style={{marginTop:'3%'}}>
                <TextField
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                  label='Confirm Password'
                />
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px", marginTop: '3%',marginBottom:'20%' }}>
              <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));