import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import nature from '../../../images/nature.jpg';

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
            <br/>
            <img src={nature} alt="nature" className='nature'/>
            <div>
            <br/>
            Offrir un service et des prestations de qualité à nos clients tout en ayant une croissance durable est possible.
            Nous avons une responsabilité d'adopter et promouvoir des pratiques durables.
            <br/>
            Nous nous engageons pour:
            </div>
            <div style={{marginTop:'5vh'}}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    className={classes.panel}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>L'INNOVATION</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Notre équipe R&D travaille activement sur l'amélioration continue de nos procédés et sur l'innovation afin d'évoluer en adéquation avec les attentes de nos clients.
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
                    <Typography className={classes.heading}>NOS ÉQUIPES</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Assurer la sécurité, le bien-être et l'épanouissement de nos équipes est une de nos priorités. Pour cela nous avons mis en place différents programmes de formation adaptés à chaque collaborateur.
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
                    <Typography className={classes.heading}>L'ENVIRONNEMENT</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Afin de réduire notre impact environnemental, nous avons mis en place plusieurs initiatives au sein de notre réseau de magasins. Parmi elles, la récupération des cintres ou encore le système de cintre consigné qui permet de réduire notre consommation de cintres et de les recycler.
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
                    <Typography className={classes.heading}>UNE GAMME DE PRIX TRANSPARENTE</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Une offre et une gamme de prix adaptées à vos besoins.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </div>
    )
}