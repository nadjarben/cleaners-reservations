import React, { Component } from 'react'
import { getFromStorage, setInStorage } from '../../config/storage';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            isRegistered: false,
            token: '',
            signUpError: '',
            signInError: '',
            signInEmail: '',
            signInPassword: '',
            signUpFirstName: '',
            signUpLastName: '',
            signUpEmail: '',
            signUpPassword: ''
        };
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
    
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    }
  
    componentDidMount() {
        const obj = getFromStorage('the_cleaners');
        if (obj && obj.token) {
          const { token } = obj;
          // Verify token
          fetch('https://www.thecleanersisrael.com/api/account/verify?token=' + token)
            .then(res => res.json())
            .then(json => {
              if (json.success) {
                this.setState({
                  token,
                  isLoading: false
                });
              } else {
                this.setState({
                  isLoading: false,
                });
              }
            });
        } else {
          this.setState({
            isLoading: false,
          });
        }
      }

      onTextboxChangeSignInEmail(e) {
          this.setState({
              signInEmail: e.target.value,
          })
      }
      onTextboxChangeSignInPassword(e) {
        this.setState({
            signInPassword: e.target.value,
        })
    }
    onTextboxChangeSignUpEmail(e) {
        this.setState({
            signUpEmail: e.target.value,
        })
    }
    onTextboxChangeSignUpPassword(e) {
        this.setState({
            signUpPassword: e.target.value,
        })
    }
    onTextboxChangeSignUpFirstName(e) {
        this.setState({
            signUpFirstName: e.target.value,
        })
    }
    onTextboxChangeSignUpLastName(e) {
        this.setState({
            signUpLastName: e.target.value,
        })
    }

    register() {
        this.setState(prevState => ({
            isRegistered: !prevState.isRegistered
          }));
    }

    onSignIn() {
        // Grab state
        const {
          signInEmail,
          signInPassword,
        } = this.state;
        this.setState({
          isLoading: true,
        });
        // Post request to backend
        fetch('https://www.thecleanersisrael.com/api/account/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: signInEmail,
            password: signInPassword,
          }),
        }).then(res => res.json())
          .then(json => {
            console.log('json', json);
            if (json.success) {
              setInStorage('the_cleaners', { token: json.token, firstName: json.firstName });
              this.setState({
                signInError: json.message,
                isLoading: false,
                signInPassword: '',
                signInEmail: '',
                token: json.token,
              });
            } else {
              this.setState({
                signInError: json.message,
                isLoading: false,
              });
            }
          });
      }

    onSignUp() {
        // Grab state
        const {
          signUpEmail,
          signUpPassword,
          signUpFirstName,
          signUpLastName
        } = this.state;
        this.setState({
          isLoading: true,
        });
        // Post request to backend
        fetch('https://www.thecleanersisrael.com/api/account/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: signUpEmail,
            password: signUpPassword,
            firstName: signUpFirstName,
            lastName: signUpLastName
          }),
        }).then(res => res.json())
          .then(json => {
            console.log('json', json);
            if (json.success) {
              this.setState({
                signUpError: json.message,
                isLoading: false,
                signUpEmail: '',
                signUpPassword: '',
                signUpFirstName: '',
                signUpLastName: ''
              });
            } else {
              this.setState({
                signUpError: json.message,
                isLoading: false,
              });
            }
          });
      }
      
    logout() {
        this.setState({
          isLoading: true,
        });
        const obj = getFromStorage('the_cleaners');
        if (obj && obj.token) {
          const { token } = obj;
          // Verify token
          fetch('https://www.thecleanersisrael.com/api/account/logout?token=' + token)
            .then(res => res.json())
            .then(json => {
              if (json.success) {
                this.setState({
                  token: '',
                  isLoading: false
                });
                setInStorage('the_cleaners', { token: '' });
              } else {
                this.setState({
                  isLoading: false,
                });
              }
            });
        } else {
          this.setState({
            isLoading: false,
          });
        }
      }
      

    render() {
        const { isLoading, token, isRegistered, signInError, signUpError, signInEmail, signInPassword,
        signUpFirstName, signUpLastName, signUpPassword, signUpEmail } = this.state

        if(isLoading) {
            return <div><p>Loading ...</p></div>
        }

        if(!token && isRegistered === false) {
            return (
                    <div>
                        {
                            (signInError) ? (
                                <p>{signInError}</p>
                            ) : (null)
                        }
                        <p className='text-center' style={{color:'red', fontWeight:'bold'}}>Sign In</p>
                        <div className='row justify-content-center'>
                        <TextField autoComplete='email' type='email' placeholder='Email' value={signInEmail} onChange={this.onTextboxChangeSignInEmail} />
                        </div>
                        <div className='row justify-content-center' style={{marginTop:'15px'}}>
                        <TextField type='password' placeholder='Password' value={signInPassword} onChange={this.onTextboxChangeSignInPassword} />
                        </div>
                        <div className='row justify-content-center' style={{marginTop:'25px'}}>
                        <Button style={{backgroundColor:'#0E1521', color:'white'}} variant='contained' onClick={this.onSignIn}>Sign In</Button>
                        </div>
                        <p onClick={this.register} className='text-center' style={{marginTop:'5%', cursor:'pointer', color: 'skyblue'}}>
                            Not registered yet ?
                        </p>
                    </div>
            )
        }
        if(!token && isRegistered == true) {
            return (
                <div>    
                    {
                            (signUpError) ? (
                                <p>{signUpError}</p>
                            ) : (null)
                        }
                    <form>
                        <p className='text-center' style={{color:'red', fontWeight:'bold'}}>Sign Up</p>
                        <div className='row justify-content-center'>
                        <TextField autoComplete='family-name' type='text' placeholder='First Name' value={signUpFirstName} onChange={this.onTextboxChangeSignUpFirstName} />
                        </div>
                        <div className='row justify-content-center' style={{marginTop:'15px'}}>
                        <TextField autoComplete='given-name' type='text' placeholder="Last Name" value={signUpLastName} onChange={this.onTextboxChangeSignUpLastName} />
                        </div>
                        <div className='row justify-content-center' style={{marginTop:'15px'}}>
                        <TextField type='email' placeholder='Email' value={signUpEmail} onChange={this.onTextboxChangeSignUpEmail} />
                        </div>
                        <div className='row justify-content-center' style={{marginTop:'15px'}}>
                        <TextField type='password' placeholder='Password' value={signUpPassword} onChange={this.onTextboxChangeSignUpPassword} />
                        </div>
                        <div className='row justify-content-center' style={{marginTop:'25px'}}>
                        <Button style={{backgroundColor:'#0E1521', color:'white'}} variant='contained' onClick={this.onSignUp}>Sign Up</Button>
                        </div>
                    </form>
                    <p onClick={this.register} className='text-center' style={{marginTop:'5%', cursor:'pointer', color: 'skyblue'}}>
                            Already registered ?
                    </p>
                </div>
            )
        }

        return (
            <div className='text-center'>
                <p>My Account</p>
                <Button variant='contained' style={{backgroundColor:'red', marginTop: '5%', color:'white'}} className='text-center' onClick={this.logout}>Logout</Button>
            </div>
        )
    }
}
