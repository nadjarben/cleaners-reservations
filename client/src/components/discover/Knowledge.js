import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl'; 
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        <div>
            <Helmet>
                <title>ידע המכבסה || the laundry knowledge || savoir faire du pressing</title>
                <meta name='decription' content="המומחיות של המכבסה שלך מבטיחה לך טיפול מיטבי במצעים: ניקוי ושטיפה, תחזוקת המצעים, הבגדים, ..." />
            </Helmet>
            <br/>
            <div>
                <FormattedMessage id="discover.know"/>
            </div>
            <div style={{marginTop:'5vh'}}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    className={classes.panel}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>
                        <FormattedMessage id="discover.know.title1"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.know.text1"/>
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
                        <FormattedMessage id="discover.know.title2"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.know.text2"/>
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
                        <FormattedMessage id="discover.know.title3"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.know.text3"/>
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
                        <FormattedMessage id="discover.know.title4"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.know.text4"/>
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
                        <FormattedMessage id="discover.know.title5"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.know.text5"/>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </div>
    )
}