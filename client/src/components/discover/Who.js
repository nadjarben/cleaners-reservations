import React from 'react';
import { FormattedMessage } from 'react-intl'; 
import { Helmet } from 'react-helmet';
import NavDiscover from './NavDiscover';
import search from '../../images/search.png';
import timersand from '../../images/timer-sand.png';
import nature from '../../images/nature.png';
import medal from '../../images/medal.png';
import currencyusdoff from '../../images/currency-usd-off.png';


export default function Who() {
    return (
        <div style={{marginBottom: '12vh'}}>
            <Helmet>
                <title>גלה את המכבסה שלנו || discover our laundry || decouvrez notre pressing</title>
                <meta name='decription' content="המכבסה שלכם מציעה שירותי תחזוקת כביסה, כביסה, ניקיון וכביסה נגישים לכל. גלה את ההיסטוריה שלה" />
            </Helmet>
            <NavDiscover />
            <br/>
            <div className='container'>
            <div className='justify-content-center'>
            <FormattedMessage id="discover.who.1"/>            
            <br/>
            <FormattedMessage id="discover.who.2"/>
            </div>
            <div style={{marginTop:'5vh', backgroundColor:'lightgrey'}}>
            <h1 className='text-center title2'><FormattedMessage id="discover.who.3"/></h1>
            <br/>
            <div className='row justify-content-center'>
                <div className='col-xl-2 col-md-6  pic'>
                    <img src={search} width='100%' alt='search' />
                    <p><FormattedMessage id="discover.who.4"/></p>
                </div>
                <div className='col-xl-2 col-md-6 pic'>
                    <img src={timersand} width='100%' alt='time' />
                    <p><FormattedMessage id="discover.who.5"/></p>
                </div>
                <div className='col-xl-2 col-md-6 pic'>
                    <img src={medal} width='100%' alt='medal' />
                    <p><FormattedMessage id="discover.who.6"/></p>
                </div>
                <div className='col-xl-2 col-md-6 pic'>
                    <img src={currencyusdoff} width='100%' alt='currency' />
                    <p><FormattedMessage id="discover.who.7"/></p>
                </div>
                <div className='col-xl-2 col-md-6 pic'>
                    <img src={nature} width='100%' alt='nature' />
                    <p><FormattedMessage id="discover.who.8"/></p>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}