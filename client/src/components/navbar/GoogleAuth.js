import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut } from '../../store/actions/googleAuthActions';
import './GoogleAuth.css';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
            .init({
                clientId: '602028173410-oqfbi2j5j0q0td722e7p3avfj3hlafmp.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };
    onSignOutClick = () => {
        this.auth.signOut();
        window.location.reload(); 
    };

 
    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button 
                className="signout"
                onClick={this.onSignOutClick}>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button
                className="signin"
                onClick={this.onSignInClick}>
                    Sign In
                </button>
            )
        }
    }

    render () {
        return (
            <div>
                <p>ALLLOOOOOOOOOOOOOOOOOOOOOOOO</p>
                {this.renderAuthButton()}
            </div>
        )
    }
}

    const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut }
    )(GoogleAuth);