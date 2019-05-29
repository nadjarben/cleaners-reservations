import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './containers/Intro.js'; 
import Reservation from './containers/Reservation.js'; 
import Home from './containers/Home.js'; 
import Tarifs from './containers/Tarifs';
import Contacts from './containers/Contacts';
import AdminReservation from './containers/AdminReservation';
import AdminCustomer from './containers/AdminCustomer';
import './App.css';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages from './messages';
//import configureHistory  from './configureHistory';


class App extends Component {
  

  render() {
    
  //  const history = configureHistory()
    const { lang } = this.props;
    const { isAdmin }  = this.props;
    
    const adminRoute = () => {
      if (isAdmin === true)
        return <Route exact path="/" component={AdminReservation}/>
      else
        return <Route exact path="/" component={Intro}/>

    }

    return( 
        <IntlProvider locale={lang} 
        messages={messages[lang]}>
      <div className="App">
        <Router >
          {adminRoute()}
          <Route path="/home" component={Home}/>
          <Route path="/reservation" component={Reservation}/>
          <Route path="/tarifs" component={Tarifs}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/adminreservation" component={AdminReservation}/>
          <Route path="/admincustomer" component={AdminCustomer}/>
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
  lang: state.locale.lang,
  isAdmin: state.auth.isAdmin
});

export default connect(mapStateToProps)(App)