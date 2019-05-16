import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Reservation from './containers/Reservation.js'; 
import Home from './containers/Home.js'; 
import Tarifs from './containers/Tarifs';
import Contacts from './containers/Contacts';
import './App.css'
class App extends Component {
  render() {
    return( 
      <div className="App">
        <Router>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/reservation" component={Reservation}/>
          <Route exact path="/tarifs" component={Tarifs}/>
          <Route exact path="/contacts" component={Contacts}/>
        </Router>
      </div>
    );
  }
}



export default App