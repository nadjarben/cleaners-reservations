import React from 'react';
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


export default function EngagementsFR() {
    const classes = useStyles();
    return (
        <div>
            <br/>
            <div>
            Fondé sur une expérience forte, notre savoir-faire fait notre réussite mais il vous atteste également d’un gage de qualité et vous garantit un soin optimal pour vos vêtements et vos textiles de la maison.
            Notre démarche se base sur une expertise en plusieurs étapes :
            </div>
            <div style={{marginTop:'5vh'}}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    className={classes.panel}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>LE DIAGNOSTIC MINUTIEUX</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Chaque article que vous nous confiez fait l’objet d’un diagnostic minutieux à sa réception. Vos vêtements ou votre linge de maison sont analysés avec attention, nous évaluons la nature des taches ainsi que les éventuelles retouches à effectuer. Nos experts vous conseillent ensuite sur les traitements adéquats.
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
                    <Typography className={classes.heading}>LE PRÉ-DETACHAGE</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Le nettoyage offre une action globale sur l’ensemble du vêtement. En amont, la phase de détachage permet une action localisée et ciblée. 5àsec a élaboré des produits adaptés aux diverses substances de taches, à la couleur et à la nature spécifique du tissu traité. Ainsi, le pré-détachage permettra au lavage ou au nettoyage d'être le plus efficace possible afin de vous garantir un résultat impeccable.
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
                    <Typography className={classes.heading}>LE NETTOYAGE OU LAVAGE</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Notre département Recherche et Développement a allié innovation et tradition dans l’élaboration de ses différentes techniques et produits de nettoyage afin de convenir au mieux à la nature du textile.
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
                    <Typography className={classes.heading}>LE REPASSAGE</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Nous avons à cœur de vous rendre un article impeccablement repassé, selon une technique qui respecte les fibres et le textile. Nos techniques font l’objet d’améliorations continues sur la qualité de repassage de vos articles comme sur l’ergonomie de travail pour nos équipes.
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
                    <Typography className={classes.heading}>LE CONTRÔLE QUALITÉ</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Après l’ensemble des prestations réalisées, nous évaluons la qualité de nettoyage et de repassage, selon les standards les plus élevés afin de vous restituer des articles impeccables.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </div>
    )
}