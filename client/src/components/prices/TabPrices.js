import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FormattedMessage } from 'react-intl'; 
import PricesIroning from './PricesIroning';
import PricesWashing from './PricesWashing';
import PricesDry from './PricesDry';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  panel: {
    backgroundColor: '#0E1521'
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const label1 = <FormattedMessage id="prices.title1" />
  const label2 = <FormattedMessage id="prices.title2" />
  const label3 = <FormattedMessage id="prices.title3" />

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
      
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#0E1521'}}>
        <Tabs value={value} onChange={handleChange} >         
          <Tab label={label1} {...a11yProps(0)} />
          <Tab label={label2} {...a11yProps(1)} />
          <Tab label={label3} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.panel} value={value} index={0}>
        <PricesIroning />
      </TabPanel>
      <TabPanel className={classes.panel} value={value} index={1}>
      <PricesWashing />
      </TabPanel>
      <TabPanel className={classes.panel} value={value} index={2}>
      <PricesDry />
      </TabPanel>
    </div>
  );
}