import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FormattedMessage } from 'react-intl'; 
import AdminConnect from './AdminConnect';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function NavBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[<Link to='/home'><div style={{color:'black'}}><FormattedMessage id="nav.homepage"/></div></Link>, <Link to='/reservation'><div style={{color:'black'}}><FormattedMessage id="nav.reservation"  /></div></Link>, 
        <Link to='/prices'><div style={{color:'black'}}><FormattedMessage id="nav.prices"/></div></Link>, 
        <Link to='/contacts'><div style={{color:'black'}}><FormattedMessage id="nav.contacts"/></div></Link>,
        <Link to='/discover/who'><div style={{color:'black'}}><FormattedMessage id="nav.discover"/></div></Link>,
        <Link to='/admin/adminhome'><div style={{color:'red'}}><AdminConnect/></div></Link> 
      ].map((text, index) => (
          <ListItem button key={text}>
           
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer('top', true)}>Open Top</IconButton>
      
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >
        {fullList('top')}
      </SwipeableDrawer>
    </div>
  );
}

const mapStateToProps = state =>  ({
  lang: state.locale.lang,
});

export default connect(mapStateToProps)(NavBar)