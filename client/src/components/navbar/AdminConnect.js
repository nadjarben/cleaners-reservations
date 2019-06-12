import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

class AdminConnect extends React.Component {
  
  renderAdmin() {
    const style = {
      color: 'red',
      float: 'right'
    }  
  
    const {isAdmin} = this.props;
    if(isAdmin === true) {
      return (
          <Link style={style} 
          to="/home/admin/" 
          onClick={this.toggle}>
            Admin
          </Link>
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