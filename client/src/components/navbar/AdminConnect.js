import React from 'react';
import { connect } from 'react-redux';

class AdminConnect extends React.Component {
  
  renderAdmin() {
  
    const {isAdmin} = this.props;
    if(isAdmin === true) {
      return (
          <div
          onClick={this.toggle}>
            Admin
          </div>
      )
    }
  }
  
  render() {
    return (
      <div>
        {this.renderAdmin()}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  userId: state.auth.userId,
  isAdmin: state.auth.isAdmin
});

export default connect(mapStateToProps)(AdminConnect)