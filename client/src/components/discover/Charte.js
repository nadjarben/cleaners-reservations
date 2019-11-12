import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl'; 
import { makeStyles } from '@material-ui/core/styles';
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


export default function EngagementsFR(props) {
    const classes = useStyles();
    return (
        <div>
            <Helmet>
                <title>אמנת המכבסה || the laundry charte || la charte du pressing</title>
                <meta name='decription' content="המכבסה שלכם פיתחה מדיניות שאפתנית של פיתוח בר-קיימא על ידי הצעת ניקוי יבש לתחזוקת כביסה" />
            </Helmet>
            <br/>
            <div>
                <FormattedMessage id="discover.cha1"/>
            <br/>
                <FormattedMessage id="discover.cha2"/>
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
                        <FormattedMessage id="discover.cha.title1"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.cha.text1"/>
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
                        <FormattedMessage id="discover.cha.title2"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.cha.text2"/>
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
                        <FormattedMessage id="discover.cha.title3"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.cha.text3"/>
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
                        <FormattedMessage id="discover.cha.title4"/>
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        <FormattedMessage id="discover.cha.text4"/>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </div>
    )
}