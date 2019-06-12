import React from 'react';
import { FormattedMessage } from 'react-intl'; 
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AdminConnect from './AdminConnect';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    backgroundColor: 'white'
  },
  link: {
      color: 'black',
      float: 'right',
  },
  menuButton: {
    color: 'white',
    marginLeft: '-20%'
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
            
        {[  <Link to="/home/homepage" className={classes.link}>
                <FormattedMessage id="nav.homepage"  />
            </Link>,
            <Link to="/home/reservation" className={classes.link}>
                <FormattedMessage id="nav.reservation"  />
            </Link>,
            <Link to="/home/prices" className={classes.link}>
                <FormattedMessage id="nav.prices"/>
            </Link>,
            <Link to="/home/contacts" className={classes.link}>
                <FormattedMessage id="nav.contacts"/>
            </Link>].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[<AdminConnect />].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
        <Button onClick={toggleDrawer('left', true)} className={classes.menuButton}>
          <MenuIcon onClick={toggleDrawer('left', true)} className={classes.menuButton} />
        </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}