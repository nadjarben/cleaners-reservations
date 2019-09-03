import React from 'react';
import TabModal from '../../components/modal/TabModal';
import { Helmet } from 'react-helmet';

export default function Reservation() {
  return (
      <div className='container' style={{marginBottom:'12vh'}}>
        <Helmet>
          <title>מכבסה משלוח || laundry price || pressing prix</title>
          <meta name='decription' content="שירות משלוחים באשדוד || delivery service || service livraison" />
          <meta name="keywords" cpntent="שירות משלוחים, משלוחים, אשדוד, שירות מהיר, delivery service, booking, fast service, cleaning service, delivery, livraison, service livraison, livraison " />
        </Helmet>
        <TabModal />
      </div>
  )
}