import React from 'react';
import '../css/Intro.css';
import logo from '../../images/logo-min.png';

class Intro extends React.Component{
    

  render(){
      return(
        <div className="introd">
        <div className="Intro">
        <div className="fickr">
             <img className="imgHome" width="56%" height="75%" align="center" src={logo} alt="logo"/>
        </div>
        </div>
        </div>
      )
  }
}

export default Intro;