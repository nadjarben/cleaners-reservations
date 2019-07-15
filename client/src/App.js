import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Reservation from './containers/pages/Reservation.js'; 
import HomePage from './containers/pages/HomePage.js';
import HomePage2 from './containers/pages/HomePage2.js'; 
import Home from './containers/nav/Home';
import Prices from './containers/pages/Prices';
import Contacts from './containers/pages/Contacts';
import AdminReservation from './containers/pages/AdminReservation';
import AdminCustomer from './containers/pages/AdminCustomer';
import AdminContact from './containers/pages/AdminContact';
import AdminHome from './containers/pages/AdminHome';
import Admin from './containers/nav/Admin';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages from './config/messages';
import NavBar from './components/navbar/NavBar2';
import { Navbar } from 'react-bootstrap';
//import configureHistory  from './configureHistory';


class App extends Component {
  

  render() {
    
  //  const history = configureHistory()
    const { lang } = this.props;
    return( 
        <IntlProvider locale={lang} 
        messages={messages[lang]}>
      <div className="App">
        <Router >
          <NavBar />
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/home" component={HomePage2}/>
          <Route path="/reservation" component={Reservation}/>
          <Route path="/prices" component={Prices}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/admin" component={Admin} />
          <Route path="/admin/adminhome" component={AdminHome} />
          <Route path="/admin/reservation" component={AdminReservation}/>
          <Route path="/admin/customer" component={AdminCustomer}/>
          <Route path="/admin/contact" component={AdminContact}/>

        </Router>
      </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  lang: propTypes.string.isRequired
}

const mapStateToProps = state =>  ({
  lang: state.locale.lang
});

export default connect(mapStateToProps)(App)