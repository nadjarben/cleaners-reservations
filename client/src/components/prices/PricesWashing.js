import React from 'react';
import CardWashing from './CardWashing';
import CardDuvet from './CardDuvet';
import CardCurtain from './CardCurtain';
import CardCarpet from './CardCarpet';
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
                <CardWashing />
            </div>
            <div className='col-md-6'>
                <CardDuvet />
            </div>
          </div>
          <div className="row">
            <div className='col-md-6'>
                <CardCurtain />
            </div>
            <div className='col-md-6'>
                <CardCarpet />
            </div>
          </div>
        </div>
      </div>
    );
  }