import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { setLocale } from '../../store/actions/localeActions';
import { connect } from 'react-redux';
import flaghe from '../../images/flag-he.png';
import flagen from '../../images/flag-en.png';
import flagfr from '../../images/flag-fr.png';


  function Languages2(props) {
  //const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function changeFlag() {
    const lang = props.lang
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

  function test() {
    console.log(props.lang);
  }

  return (
      <div onClick={test}>
                <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {changeFlag()}
              </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose } >
                <div onClick={() => props.setLocale('en')} >
                    <img src={flagen} alt="flagen" width="30px" />
                    English
                </div>
                </MenuItem>
                
                <MenuItem onClick={handleClose} >
                <div onClick={() => props.setLocale('fr')} >
                  <img src={flagfr} alt="flagfr" width="30px" /> 
                  Francais
                </div>
                </MenuItem>
                
                <MenuItem onClick={handleClose} >
                <div onClick={() => props.setLocale('he')} >
                  <img src={flaghe} alt="flaghe" width="30px" />
                   עברית
                </div>
                </MenuItem>
              </Menu>
            
    </div>
  );
}

const mapStateToProps = state => ({
  setLocale: state.locale,
  lang: state.locale.lang
});

export default connect(mapStateToProps, {setLocale})(Languages2)