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
          
        <div className="Home">
        <div className="fickr">
             <img className="imgHome" width="75%" height="75%" align="center" src={logo} alt="yfo"/>
        </div>
        </div>
      )
  }
}

export default Intro;