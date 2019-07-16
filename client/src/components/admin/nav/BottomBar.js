import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ButtonPlusReserv from '../adminHome/ButtonPlusReserv';
import ButtonPlusClient from '../adminHome/ButtonPlusClient';
import notifIcon from '../../../images/bell-ring.svg';
import historiqueIcon from '../../../images/truck.svg';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    width: '100%',
    position:'fixed',
    bottom:'0'

  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <Link to='/admin/adminhome'><BottomNavigationAction label="Notifications" value="recents" icon={<img src={notifIcon} alt='notif' />} /></Link>
      <BottomNavigationAction label="Client" value="favorites" icon={<ButtonPlusClient/>} />
      <BottomNavigationAction label="Reservation" value="nearby" icon={<ButtonPlusReserv/>} />
      <BottomNavigationAction label="Historique" value="historique" icon={<img src={historiqueIcon} alt='historique' />} />
    </BottomNavigation>
  );
}