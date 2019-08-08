import React from 'react';
import { Link } from 'react-router-dom'
import NavItem2 from './NavItem2';
import GoogleAuth from '../navbar/GoogleAuth';
import Languages2 from './Languages2';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ModalRegister from '../modal/ModalRegister';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: 'black',
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    marginLeft: '2%'
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
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        <NavItem2 />
          <Typography variant="h6" className={classes.title}>
          <Link className='title-link' to="/home">THE CLEANERS</Link>
          </Typography>
          <Languages2 />
            <div>
            <ModalRegister />
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