import React, { Component } from 'react';
import './Home.css';
import NavPrices from '../components/NavPrices';
import NavBar from '../components/NavBar';

class Tarifs extends Component {
    render() {
        return (
            <div>
                <NavBar />
            <div className="container">
            <NavPrices />
            </div>
            </div>
        );
    }
}

export default Tarifs