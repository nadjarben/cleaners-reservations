import React from 'react';
import '../css/HomePage.css';
import logo from '../../images/logo-min.png';
import pressing from '../../images/logo1.png';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl'; 
import banner from '../../images/banner.png'

     class HomePage extends React.Component{
         render() {
            return (
                <div className='homepage' style={{backgroundImage:`url(${banner}`, width:'100%', position:'absolute'}}>
                    <div className='container'>
                        <div className='row justify-content'>
                            <div className='text-center'>
                                <img src={logo} width='50%' alt="logoCleaners"></img>
                            </div>
                            <div className='text-center'>
                                <img src={pressing} width='80%' alt="pressing"/>
                            </div>
                            <div className='text-center' style={{color:'white', marginTop:'-10%'}}>
                                <p className="lead text-center"><FormattedMessage id="home.intro" defaultMessage=""/></p>
                            </div>
                            <div className= 'col'>
                                <div className='text-center' style={{marginTop: '-10%'}}>
                                    <button className="bouton18">
                                        <Link><p className="text-button"><FormattedMessage id="home.button" defaultMessage="BOOK A DELIVERY"/></p></Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
        );
    }
}

export default HomePage