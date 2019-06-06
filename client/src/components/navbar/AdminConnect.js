import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { connect } from 'react-redux';

class AdminConnect extends React.Component {
  
  
  renderAdmin() {
    const {isAdmin} = this.props
    if(isAdmin === true) {
      return (
        <NavItem className="navitem">
          <Link 
          to="/home/admin/reservation" 
          className="navMenu" 
          onClick={this.toggle}>
            Admin
          </Link>
        </NavItem>
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