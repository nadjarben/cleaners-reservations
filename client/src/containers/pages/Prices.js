import React from 'react';
import TabPrices from '../../components/prices/TabPrices';
import '../css/Tarifs.css';
import { Helmet } from 'react-helmet';


    const Prices = () => {
        
        return (
            <div>
                <Helmet>
                    <title>מכבסה מחיר || laundry delivery || pressing livraison</title>
                    <meta name='decription' content="למכבסה שלנו באשדוד יש את המחירים הכי זולים || Our laundry has the best prices in ashdod" />
                    <meta name="keywords" cpntent="ניקוי יבש, ניקוי, מחיר, שמיכה, חליפות, חולצות, ניקוי, גיהוץ, שמלה, כביסה, netttoyage a sec, nettoyage, costume, couette, repassage, robe, dress, laundry, cleaning, ironing, dry cleaning, dry, suit, duvet, carpet, shirt " />
                </Helmet>
                <TabPrices />
            </div>
    );
}

export default Prices