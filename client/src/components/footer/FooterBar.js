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
      <BottomNavigationAction label="Google Map" value="historique" icon={<a href='https://www.google.com/maps/place/HaAtsmaut+93,+Ashdod/@31.7892578,34.6396247,17z/data=!4m13!1m7!3m6!1s0x1502a2f8baeab13d:0xc8142a22d1ba932d!2sHaAtsmaut+93,+Ashdod!3b1!8m2!3d31.7892578!4d34.6418134!3m4!1s0x1502a2f8baeab13d:0xc8142a22d1ba932d!8m2!3d31.7892578!4d34.6418134'><img src={googlemap} alt='gmap' /></a>} />
    </BottomNavigation>
  );
}