import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Reservation from './containers/pages/Reservation.js'; 
import HomePage from './containers/pages/HomePage.js';
import HomePage2 from './containers/pages/HomePage2.js'; 
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
import FooterBar from './components/footer/FooterBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey, blue } from '@material-ui/core/colors';
import { Helmet } from 'react-helmet';

//import configureHistory  from './configureHistory';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey['A50']
  }
});

class App extends Component {

  
  privateRoutes() {
    const {isAdmin} = this.props;
      if(isAdmin === true)
      return (
        <div>
        <Route path="/admin" component={Admin} />
        <Route path="/admin/adminhome" component={AdminHome} />
        <Route path="/admin/reservations" component={AdminReservation}/>
        <Route path="/admin/customers" component={AdminCustomer}/>
        <Route path="/admin/contacts" component={AdminContact}/>
        </div>
      )
    }
  render() {
    
  //  const history = configureHistory()
    const { lang } = this.props;
    return( 
        <IntlProvider locale={lang} 
        messages={messages[lang]}>
      <div className="App">
        <Router >
        <Helmet>
        <title>מכבסה אשדוד, שירות מישלוך || The Cleaners || Laundry Pressing Ashdod</title>
        <meta name="description" content="Dry cleaning, laundry, ashdod, pressing, deliveries, מכבסה אשדוד ,ניקוי יבש , גיהוץ, כביסה, שירות מישלוך" />
        <meta name="keywords" content="מכבסה, אשדוד ,ניקוי יבש , גיהוץ, כביסה, שירות מישלוך, pressing, ashdod, laundry, laundries, dry cleaning, blanchisserie ironing, cleaning, nettoyage a sec, repassage, lavage" />
        </Helmet>
        <MuiThemeProvider theme={theme}>
          <NavBar />
          <FooterBar />
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/home" component={HomePage2}/>
          <Route path="/reservation" component={Reservation}/>
          <Route path="/prices" component={Prices}/>
          <Route path="/contacts" component={Contacts}/>
          {this.privateRoutes()}
          </MuiThemeProvider>
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