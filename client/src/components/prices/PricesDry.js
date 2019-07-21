import React from 'react';
import CardShirt  from './CardShirt';
import CardSuit from './CardSuit';
import CardDress from './CardDress';
import CardCoat from './CardCoat';
import { FormattedMessage } from 'react-intl'; 

export default function PricesWashing() {


    return (
      <div style={{backgroundColor:'#0E1521', color:'white', zIndex:'2', marginBottom:'9vh'}} >
        <div >
            <div className='text-center' style={{backgroundColor:'red', marginBottom:'1vh'}}>
                <FormattedMessage id='washing.express' />
            </div>
          <div className="row ">
            <div className='col-md-6'>
                <CardShirt />
            </div>
            <div className='col-md-6'>
                <CardSuit />
            </div>
          </div>
          <div className="row">
            <div className='col-md-6'>
                <CardDress />
            </div>
            <div className='col-md-6'>
                <CardCoat />
            </div>
          </div>
        </div>
      </div>
    );
  }