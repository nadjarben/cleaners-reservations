import React from 'react';
import '../css/HomePage.css';
import logo from '../../images/logo-min.png';
import pressing from '../../images/logo1.png';
import ModalReserv from '../../components/modal/ModalReserv';
import { FormattedMessage } from 'react-intl';
import { zoomInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Intro from './Intro';

const styles = {
    bounce: {
      animation: 'x 4s',
      animationName: Radium.keyframes(zoomInRight, 'bounce')
    }
  }

     class HomePage extends React.Component{
         

        constructor(props) {
            super(props);
            this.state = { imageStatus: "loading" };
          }

        componentDidMount(){
            setTimeout(() => { 
                this.setState({
                    imageStatus: 'loaded'
                })
        }, 2500)
      }

        handleImageLoaded() {
            this.setState({ imageStatus: "loaded" });
          }

          displayContent() {
              if(this.state.imageStatus === 'loading')
                return <Intro />
              if(this.state.imageStatus === 'loaded')
                return (
<div className='homepage' style={{ backgroundColor:'#0E1521', marginTop:'-2vh'}}>
                        <div className='container'>
                            <div className='text-center'>
                                <img className='logo-cleaners' src={logo}  alt="logoCleaners"></img>
                            </div>
                            <div className='text-center'>
                                <img className='logo-pressing' src={pressing}  alt="pressing" />
                            </div>
                            <br />
                        <div className='row justify-content'>
                            <div className='text-center'>
                                <p className="lead text-center text-intro"><FormattedMessage id="home.intro" defaultMessage=""/></p>
                            </div>
                        </div>  
                        <br/>
                        <StyleRoot>
                        <div style={styles.bounce}> 
                        <div className='text-center'>
                            <ModalReserv />
                        </div>
                        </div>
                        </StyleRoot>
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