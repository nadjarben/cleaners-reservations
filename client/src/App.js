import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './containers/Intro.js'; 
import NavBar from './components/NavBar';
import Reservation from './containers/Reservation.js'; 
import Home from './containers/Home.js'; 
import Tarifs from './containers/Tarifs';
import Contacts from './containers/Contacts';
import Admin from './containers/Admin';
import './App.css';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages from './messages';

class App extends Component {

  render() {
    const { lang } = this.props;
    return( 
        <IntlProvider locale={lang} 
        messages={messages[lang]}>
      <div className="App">
        <Router>
          <Route path="/" component={Intro}/>
          <Route path="/home" component={Home}/>
          <Route path="/reservation" component={Reservation}/>
          <Route path="/tarifs" component={Tarifs}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/admin" component={Admin}/>
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