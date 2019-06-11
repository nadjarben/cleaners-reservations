import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './containers/pages/Intro.js'; 
import Reservation from './containers/pages/Reservation.js'; 
import HomePage from './containers/pages/HomePage.js'; 
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
          <Route exact path="/" component={Intro}/>
          <Route path="/home" component={Home}/>
          <Route path="/home/homepage" component={HomePage}/>
          <Route path="/home/reservation" component={Reservation}/>
          <Route path="/home/prices" component={Prices}/>
          <Route path="/home/contacts" component={Contacts}/>
          <Route path="/home/admin" component={Admin} />
          <Route path="/home/admin/adminhome" component={AdminHome} />
          <Route path="/home/admin/reservation" component={AdminReservation}/>
          <Route path="/home/admin/customer" component={AdminCustomer}/>
          <Route path="/home/admin/contact" component={AdminContact}/>

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