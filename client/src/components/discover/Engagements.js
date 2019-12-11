import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl'; 
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavDiscover from './NavDiscover';


const useStyles = makeStyles(theme => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    panel: {
        backgroundColor: '#cce0fc'
    }
  }));


export default function EngagementsFR() {
    const classes = useStyles();
    return (
        <div style={{marginBottom: '12vh'}}>
            <Helmet>
                <title>מחויבות המכבסה || the laundry engagement || l'engagement du pressing</title>
                <meta name='decription' content="גלה את התחייבויות הניקוי היבש, המומחה שלך בניקוי ושטיפת המצעים, תחזוקת המצעים, ריטוש בגדים" />
            </Helmet>
            <NavDiscover />
            <br/>
            <div className='container'>
            <FormattedMessage id="discover.eng"/>
            
            <div style={{marginTop:'5vh'}}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    className={classes.panel}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>
                        <FormattedMessage id="discover.eng.title1"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.eng.text1"/>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    className={classes.panel}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>
                        <FormattedMessage id="discover.eng.title2"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.eng.text2"/>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    className={classes.panel}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>
                        <FormattedMessage id="discover.eng.title3"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.eng.text3"/>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    className={classes.panel}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>
                        <FormattedMessage id="discover.eng.title4"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.eng.text4"/>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            </div>
        </div>
    )
}