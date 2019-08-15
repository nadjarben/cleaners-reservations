import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="white"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Link to='/admin/adminhome'><Tab label="home"></Tab></Link>
          <Link to='/admin/reservations'><Tab label="Reservations" /></Link>
          <Link to='/admin/customers'><Tab label="Clients" /></Link>
          <Link to='/admin/contacts'><Tab label="Questions" /></Link>
          <Link to='/admin/users'><Tab label="Users" /></Link>
        </Tabs>
      </AppBar>
    </div>
  );
}