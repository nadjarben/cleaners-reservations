import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AdminHome from '../../../containers/pages/AdminHome';
import AdminContact from '../../../containers/pages/AdminContact';
import AdminCustomer from '../../../containers/pages/AdminCustomer';
import AdminReservation from '../../../containers/pages/AdminReservation';

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
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Home" />
          <Tab label="Reservations" />
          <Tab label="Clients" />
          <Tab label="Questions" />
          <Tab label="Archives" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><AdminHome /></TabContainer>}
      {value === 1 && <TabContainer><AdminReservation /></TabContainer>}
      {value === 2 && <TabContainer><AdminCustomer /></TabContainer>}
      {value === 3 && <TabContainer><AdminContact /></TabContainer>}
      {value === 4 && <TabContainer>Archive</TabContainer>}
    </div>
  );
}