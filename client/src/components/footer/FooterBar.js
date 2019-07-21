import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import whatsapp from '../../images/whatsapp.png';
import facebook from '../../images/facebook-box.png';
import googlemap from '../../images/google-maps.png';
import phone from '../../images/phone.png';

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
      <BottomNavigationAction label="Whats App" value="historique" icon={<a href='https://api.whatsapp.com/send?phone=33667974254' ><img src={whatsapp} alt='whatsapp' /></a>} />
      <BottomNavigationAction label="Phone" value="historique" icon={<a href='tel:+33667974254'><img src={phone} alt='phone' /></a>} />
      <BottomNavigationAction label="Facebook" value="historique" icon={<a href='https://www.facebook.com/pages/The-Cleaners/1356200531133580'><img src={facebook} alt='facebook' /></a>} />
      <BottomNavigationAction label="Google Map" value="historique" icon={<a href='https://www.google.com/maps/place/Pressing+The+Cleaners/@31.7885499,34.6422172,19.18z/data=!4m12!1m6!3m5!1s0x1502a3122478a447:0xa8bfdbf2a15e8b43!2sPressing+The+Cleaners!8m2!3d31.7889614!4d34.6426781!3m4!1s0x1502a3122478a447:0xa8bfdbf2a15e8b43!8m2!3d31.7889614!4d34.6426781'><img src={googlemap} alt='gmap' /></a>} />
    </BottomNavigation>
  );
}