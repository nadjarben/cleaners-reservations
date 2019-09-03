import React from 'react';
import search from '../../../images/search.png';
import timersand from '../../../images/timer-sand.png';
import nature from '../../../images/nature.png';
import medal from '../../../images/medal.png';
import currencyusdoff from '../../../images/currency-usd-off.png';


export default function Who() {
    return (
        <div>
            <br/>
            <div className='justify-content-center'>
            Nous vous proposons un concept innovant et évolutif, soutenu par une politique R&D ambitieuse, un positionnement différenciant et un large panel de services et de produits pour les particuliers et les professionnels.
            <br/>
            L’excellence, c’est une expérience client unique à la fois dans notre réseau physique et via notre offre digitalisée pour profiter du meilleur du pressing.
            </div>
            <div style={{marginTop:'5vh', backgroundColor:'lightgrey'}}>
            <h1 className='text-center title2'>Nos Engagements :</h1>
            <br/>
            <div className='row justify-content-center'>
                <div className='col-xl-2 col-md-6  pic'>
                    <img src={search} width='100%' alt='search' />
                    <p>Un diagnostique adapté</p>
                </div>
                <div className='col-xl-2 col-md-6 pic'>
                    <img src={timersand} width='100%' alt='time' />
                    <p>Des délais respectés</p>
                </div>
                <div className='col-xl-2 col-md-6 pic'>
                    <img src={medal} width='100%' alt='medal' />
                    <p>La qualité garantie</p>
                </div>
                <div className='col-xl-2 col-md-6 pic'>
                    <img src={currencyusdoff} width='100%' alt='currency' />
                    <p>Des prix transparents</p>
                </div>
                <div className='col-xl-2 col-md-6 pic'>
                    <img src={nature} width='100%' alt='nature' />
                    <p>Le respect de la planète</p>
                </div>
            </div>
            </div>
        </div>
    )
}