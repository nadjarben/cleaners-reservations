import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut } from '../../store/actions/googleAuthActions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
            .init({
                clientId: '162564132974-al7mv7822j2b88bqka4ps7q29vn4quk3.apps.googleusercontent.com',
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
        const style= {
            signout: {
                color: 'red',
            },
        }
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <div 
                style={style.signout}
                onClick={this.onSignOutClick}>
                    Sign Out
                </div>
            )
        } else {
            return (
                <button
                onClick={this.onSignInClick}>
                    Sign In
                </button>
            )
        }
    }

    render () {
        return (
            <div>
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