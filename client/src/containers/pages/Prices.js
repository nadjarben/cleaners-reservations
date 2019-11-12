import React from 'react';
import TabPrices from '../../components/prices/TabPrices';
import '../css/Tarifs.css';
import { Helmet } from 'react-helmet';


    const Prices = () => {
        
        return (
            <div>
                <Helmet>
                    <title>מחיר ניקוי יבש || dry cleaning prices || tarifs nettoyage a sec</title>
                    <meta name='decription' content="ניקוי יבש אשדוד הזול ביותר || The cheapest dry cleaning in ashdod || Le nettoyage a sec le moins chere d'ashdod" />
                    <meta name="keywords" cpntent="ניקוי יבש, ניקוי, מחיר, שמיכה, חליפות, חולצות, ניקוי, גיהוץ, שמלה, כביסה, netttoyage a sec, nettoyage, costume, couette, repassage, robe, dress, laundry, cleaning, ironing, dry cleaning, dry, suit, duvet, carpet, shirt " />
                </Helmet>
                <TabPrices />
            </div>
    );
}

export default Prices