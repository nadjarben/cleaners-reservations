import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import whatsapp from '../../images/whatsapp.png';
import facebook from '../../images/facebook-box.png';
import googlemap from '../../images/google-maps.png';
import phone from '../../images/phone.png';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    width: '100%',
    position:'fixed',
    bottom:'0',
    backgroundColor:'black'
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
      <BottomNavigationAction label="Whats App" value="historique" icon={<img src={whatsapp} alt='whatsapp' />} />
      <BottomNavigationAction label="Phone" value="historique" icon={<img src={phone} alt='phone' />} />
      <BottomNavigationAction label="Facebook" value="historique" icon={<img src={facebook} alt='facebook' />} />
      <BottomNavigationAction label="Google Map" value="historique" icon={<img src={googlemap} alt='gmap' />} />
    </BottomNavigation>
  );
}