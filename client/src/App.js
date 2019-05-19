import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Reservation from './containers/Reservation.js'; 
import Home from './containers/Home.js'; 
import Tarifs from './containers/Tarifs';
import Contacts from './containers/Contacts';
import Admin from './containers/Admin';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return( 
      <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/reservation" component={Reservation}/>
          <Route exact path="/tarifs" component={Tarifs}/>
          <Route exact path="/contacts" component={Contacts}/>
          <Route exact path="/admin" component={Admin}/>
        </Router>
      </div>
      </Provider>
    );
  }
}



export default App