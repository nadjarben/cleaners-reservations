import React from 'react';
import { Helmet } from 'react-helmet';
import FormContact from '../../components/contact/FormContact';

const Contacts = () => {
    
        return (
          <div>
            <Helmet>
                <title>צרו קשר עם המכבסה זה קלינרס || contact the cleaners laundry || contactez le pressing the cleaners</title>
                <meta name='decription' content="צרו קשר באמצעות הטופס לכל השאלות שלכם" />
            </Helmet>
            <FormContact />    
          </div>
        );
}

export default Contacts