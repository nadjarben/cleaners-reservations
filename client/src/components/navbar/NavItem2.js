import React from 'react';
import { FormattedMessage } from 'react-intl'; 
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/icons/Menu';
import AdminConnect from './AdminConnect';



const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
      color: 'black',
      float: 'right',
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
}));


export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
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
            <Divider />,
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
        <IconButton edge="start" color="inherit" aria-label="Menu" onClick={toggleDrawer('left', true)} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}