import React from 'react';
import flaghe from '../../images/flag-he.png';
import flagen from '../../images/flag-en.png';
import flagfr from '../../images/flag-fr.png'; 
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
 import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocale } from '../../store/actions/localeActions';

class Languages extends React.Component {
  
  constructor(props) {
    super(props);
    this.toggleDrop = this.toggleDrop.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  
  changeFlag() {
    const lang = this.props.lang
    if(lang === 'he') {
      return (
        <img src={flaghe} alt="flag" width="25px" />
      )
    }
      if(lang === 'en') {
        return (
          <img src={flagen} alt="flag" width="25px" />
        )
      }
        if(lang === 'fr') {
          return (
            <img src={flagfr} alt="flag" width="25px" />
        )
    }
  }
  
  toggleDrop() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }  

  render() {
    return (
      <div>
            <Dropdown className="dropdown" 
            isOpen={this.state.dropdownOpen} 
            toggle={this.toggleDrop}>
            <DropdownToggle caret className="droptoggle">
              {this.changeFlag()}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <div className="flag" 
                onClick={() => this.props.setLocale('en')} >
                    <img src={flagen} alt="flagen" width="30px" />
                    English
                </div>
              </DropdownItem>
              <DropdownItem>
                <div className="flag" 
                onClick={() => this.props.setLocale('fr')} >
                  <img src={flagfr} alt="flagfr" width="30px" /> 
                  Francais
                </div>
              </DropdownItem>
              <DropdownItem>
                <div className="flag" 
                onClick={() => this.props.setLocale('he')} >
                  <img src={flaghe} alt="flaghe" width="30px" />
                   עברית
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
      </div>
    );
  }
}

Languages.propTypes = {
  lang: propTypes.string.isRequired
}

const mapStateToProps = state => ({
  setLocale: state.locale,
  lang: state.locale.lang
});

export default connect(mapStateToProps, {setLocale})(Languages)