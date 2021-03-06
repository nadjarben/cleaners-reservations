import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ModalInfos from './Modalnfos';
import ModalOrders from './ModalOrders';
import ModalOptions from './ModalOptions';
import ModalOrder from './ModalOrder';
import whatsapp from '../../../../images/whatsapp-sw.png';
import plus from '../../../../images/plus-box.png';
import { ModalFooter } from 'reactstrap';

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
}));

export default function SimpleTabs(props) {
  const {customer} = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Infos" {...a11yProps(0)} />
          <Tab label="Commandes" {...a11yProps(1)} />
          <Tab label="Options" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ModalInfos customer={customer} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ModalOrders customer={customer} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ModalOptions customer={customer} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ModalOrder customer={customer} />
      </TabPanel>
      <ModalFooter>
        <a href={`https://api.whatsapp.com/send?phone=${customer.phone}&text=La commande 1111 est prete`} >
          <img src={whatsapp} alt='wa' />
        </a>
          <img onClick={() => setValue(3)} src={plus} alt='plus' />
      </ModalFooter>
    </div>
  );
}