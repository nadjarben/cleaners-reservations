
import React from 'react';
import CardPiece from './CardPiece';
import CardOthers from './CardOthers'

export default function PricesIroning() {


    return (
      <div style={{backgroundColor:'#0E1521', color:'white'}} >
        <div >
          <div className="row ">
            <div className='col-md-6'>
          <CardPiece />
          </div>
          <div className='col-md-6'>
          <CardOthers />
          </div>
          </div>
        </div>
      </div>
    );
  }