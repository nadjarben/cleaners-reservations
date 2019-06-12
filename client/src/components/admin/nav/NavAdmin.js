import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
      backgroundColor: 'lightgrey'
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className={classes.tab}>
        <Link to="/home/admin/home"><Tab label="Home" /></Link>
        <Link  to="/home/admin/reservation"><Tab label="Reservations" /></Link>
        <Link to="/home/admin/customer"><Tab label="Clients" /></Link>
        <Link to="/home/admin/archivate"><Tab label="Archives" /></Link>
        <Link to="/home/admin/contact"><Tab label="Contacts" /></Link>
        </Tabs>
      </AppBar>
    </div>
  );
}