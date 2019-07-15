import React from 'react';
import { Link } from 'react-router-dom'
import NavItem2 from './NavItem2';
import GoogleAuth from '../navbar/GoogleAuth';
import Languages2 from './Languages2';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: 'black'
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    marginLeft: '3%'
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <NavItem2 />
          <Typography variant="h6" className={classes.title}>
          <Link className={classes.link} to="/home">THE CLEANERS</Link>
          </Typography>
          <Languages2 />
            <div>
              <a style={{marginRight:'6px'}} href="https://api.whatsapp.com/send?phone=33667974254">
                <img width="25px" style={{marginLeft:'10px'}} className="img-icon ccw-analytics" id="style-3" data-ccw="style-3" src="https://www.siteinternet-vtc.fr/wp-content/plugins/click-to-chat-for-whatsapp/./assets/img/whatsapp-logo.png" alt="WhatsApp chat" />
              </a>
              <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
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
                <MenuItem onClick={handleClose}><GoogleAuth /></MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}