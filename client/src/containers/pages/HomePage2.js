import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/HomePage.css';
import logo from '../../images/logo-min.png';
import pressing from '../../images/logo1.png';
import { FormattedMessage } from 'react-intl'; 
import ModalReserv from '../../components/modal/ModalReserv';

     class HomePage extends React.Component{

        constructor(props) {
            super(props);
            this.state = { imageStatus: "loading" };
          }


        handleImageLoaded() {
            this.setState({ imageStatus: "loaded" });
          }

          displayContent() {
                return (
                    <div className='homepage' style={{ backgroundColor:'#0E1521', marginTop:'-2vh'}}>
                        <Helmet>
                            <title>מכבסת זה קלירס - מכבסה באשדוד</title>
                            <meta name='decription' content="השירותים במכבסת זה קלירס - שרותי ניקוי וילונות, ניקוי יבש, שירותי כביסה וגיהוץ מקצועי במקום. מתמחים בניקוי וילונות, משלוח חינם בבית" />
                            <meta name="keywords" cpntent="ניקוי יבש, ניקוי, מחיר, שמיכה, חליפות, חולצות, ניקוי, גיהוץ, שמלה, כביסה, netttoyage a sec, nettoyage, costume, couette, repassage, robe, dress, laundry, cleaning, ironing, dry cleaning, dry, suit, duvet, carpet, shirt " />
                        </Helmet>
                        <div className='container'>
                            <div className='text-center'>
                                <img className='logo-cleaners' src={logo} width='60%' alt="logoCleaners"></img>
                            </div>
                            <div className='text-center'>
                                <img className='logo-pressing' src={pressing} width='80%' alt="pressing" />
                            </div>
                            <br />
                        <div className='row justify-content'>
                            <div className='text-center'>
                                <p  className="lead text-center"><FormattedMessage id="home.intro" defaultMessage=""/></p>
                            </div>
                        </div>  
                        <br/>
                        <div className='text-center'>
                            <ModalReserv />
                        </div>
                    </div>
                </div>
                )
          }

         render() {
            return (
                <div>
                    {this.displayContent()}
                </div>
            )
    }
}

export default HomePage