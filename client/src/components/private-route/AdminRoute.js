import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const AdminRoute = ({ component: Component, isAdmin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAdmin === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAdmin: state.auth.user.isAdmin
});
export default connect(mapStateToProps)(AdminRoute);