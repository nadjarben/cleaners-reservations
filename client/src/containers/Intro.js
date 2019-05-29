import React from 'react';
import logo from '../images/logo-min.png';
import './Intro.css'
class Intro extends React.Component{
    
        componentWillMount(){
            setTimeout(() => { 
                this.props.history.push('/home');
        }, 2500)
        }
  render(){
      return(
        <div className="introd">
        <div className="Intro">
        <div className="fickr">
             <img className="imgHome" width="76%" height="75%" align="center" src={logo} alt="logo"/>
        </div>
        </div>
        </div>
      )
  }
}

export default Intro;