import React from 'react';
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
                    <div className='homepage' style={{ backgroundColor:'#0E1521', width:'100%', position:'absolute'}}>
                    <div className='container'>
                        <div className='row justify-content'>
                            <div className='text-center'>
                                <img src={logo} width='50%' alt="logoCleaners"></img>
                            </div>
                            <div className='text-center'>
                                <img src={pressing} width='80%' alt="pressing" style={{marginTop:'-25%'}}/>
                            </div>
                            <div className='text-center' style={{color:'white'}}>
                                <p className="lead text-center"><FormattedMessage id="home.intro" defaultMessage=""/></p>
                            </div>
                            <div className= 'col'>
                                <div className='text-center'>
                                    <ModalReserv />
                                </div>
                            </div>
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