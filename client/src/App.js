import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider, connect } from "react-redux";
import Reservation from './containers/pages/Reservation.js'; 
import HomePage from './containers/pages/HomePage.js';
import HomePage2 from './containers/pages/HomePage2.js'; 
import Prices from './containers/pages/Prices';
import Contacts from './containers/pages/Contacts';
import AdminReservation from './containers/pages/AdminReservation';
import AdminCustomer from './containers/pages/AdminCustomer';
import AdminContact from './containers/pages/AdminContact';
import AdminUsers from './components/admin/adminUsers/adminUsers';
import AdminHome from './containers/pages/AdminHome';
import Admin from './containers/nav/Admin';
import Login from './components/navbar/Login';
import Register from './components/navbar/Register';
import Landing from './components/navbar/Landing';
import propTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import messages from './config/messages';
import NavBar from './components/navbar/NavBar2';
import FooterBar from './components/footer/FooterBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey, blue } from '@material-ui/core/colors';
import { Helmet } from 'react-helmet';
import jwt_decode from "jwt-decode";
import setAuthToken from "./config/setAuthToken";
import { setCurrentUser, logoutUser } from "./store/actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import AdminRoute from './components/private-route/AdminRoute';
import DashboardAppBar from "./components/dashboard/DasboardAppBar";
import Discover from './containers/pages/Discover';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey['A50']
  }
});

class App extends Component {
  
  render() {

    
  //  const history = configureHistory()
    const { lang } = this.props;

    return( 
        <IntlProvider locale={lang} 
        messages={messages[lang]}>
      <div className="App">
      <Provider store={store}>
        <Router >
          <NavBar />
          <FooterBar />
          <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/home" component={HomePage2}/>
          <Route exact path="/index.html" component={HomePage}/>
          <Route path="/reservation" component={Reservation}/>
          <Route path="/prices" component={Prices}/>
          <Route path="/contacts" component={Contacts}/>
        <Route path="/landing" component={Landing}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/discover" component={Discover}/>
              <PrivateRoute path="/dashboard" component={DashboardAppBar} />
            <AdminRoute path='/admin' component={Admin} />
            <AdminRoute exact path='/admin/adminhome' component={AdminHome} />
            <AdminRoute exact path='/admin/reservations' component={AdminReservation} />
            <AdminRoute exact path='/admin/customers' component={AdminCustomer} />
            <AdminRoute exact path='/admin/contacts' component={AdminContact} />
            <AdminRoute exact path='/admin/users' component={AdminUsers} />
            </Switch>
        </Router>
        </Provider>
      </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  lang: propTypes.string.isRequired
}

const mapStateToProps = state =>  ({
  lang: state.locale.lang,
});

export default connect(mapStateToProps)(App)