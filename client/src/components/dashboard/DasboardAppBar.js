import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardMenu from './DashboardMenu';
import DashboardCredit from './DashboardCredit';
import DashboardConfig from './DashboardConfig';
import account from '../../images/account-circle.png';
import money from '../../images/money.png';
import tools from '../../images/tools.png';
import { Link } from 'react-router-dom';
import PrivateRoute from '../private-route/PrivateRoute';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    zIndex: '0'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [open] = React.useState(false);

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <br/>
        <br />
        <br />
        <List>
          {['Compte', 'Messages', 'Credit'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
              {index === 0 && <Link to='/dashboard/menu'><img src={account} width='62%' alt='account laundry' style={{marginLeft:'1px'}}/></Link>}
              {index === 1 && <Link to='/dashboard/credit'><img src={money} width='5.5%' alt='credit laundry'style={{ marginLeft:'1px'}}/></Link>}
              {index === 2 && <Link to='/dashboard/config'><img src={tools} width='5%' alt='account config' style={{ marginLeft:'2px'}}/></Link>}
             </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <PrivateRoute exact path="/dashboard/menu" component={DashboardMenu} />
        <PrivateRoute exact path="/dashboard/credit" component={DashboardCredit} />
        <PrivateRoute exact path="/dashboard/config" component={DashboardConfig} />
      </main>
    </div>
  );
}