import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ButtonPlusReserv from '../adminHome/ButtonPlusReserv';
import ButtonPlusClient from '../adminHome/ButtonPlusClient';
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
    <BottomNavigation style={{zIndex:'1000'}} value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Client" value="favorites" icon={<ButtonPlusClient/>} />
      <BottomNavigationAction label="Reservation" value="nearby" icon={<ButtonPlusReserv/>} />
    </BottomNavigation>
  );
}