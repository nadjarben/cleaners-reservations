import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import NavItem2 from './NavItem2';
import GoogleAuth from '../navbar/GoogleAuth';
import Languages2 from './Languages2';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: 'black',
    zIndex: 3
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    marginLeft: '2%'
  }
}));

function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  function isAuthenticated() {
    const isAuthenticated =  props.auth.isAuthenticated
    console.log(isAuthenticated)
    if(isAuthenticated === true)
    return (
      <Link to='/dashboard'>
              <IconButton
            aria-label="Account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
        >
            <AccountCircle style={{color:'white'}} />
        </IconButton>
        </Link>
    )
  else
   return (
    <Link to='/landing'>
              <IconButton
            aria-label="Account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
        >
            <AccountCircle style={{color:'white'}} />
        </IconButton>
        </Link>
  )
   }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        <NavItem2 />
          <Typography variant="h6" className={classes.title}>
          <Link className='title-link' to="/home">THE CLEANERS</Link>
          </Typography>
          <Languages2 />
            <div>
              {isAuthenticated()}
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
                <MenuItem onClick={handleClose}><GoogleAuth /></MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
NavBar.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(NavBar)