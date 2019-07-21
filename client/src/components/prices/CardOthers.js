import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ironingdresses from '../../images/ironingdresses.jpg';
import { FormattedMessage } from 'react-intl'; 


const useStyles = makeStyles({
  card: {
    backgroundColor: '#0E1521',
    color: 'white',
    textAlign: 'center',
    borderStyle: 'solid',
    position: 'relative',
  },
  media: {
    height: 200,
  },
  text: {
      color: 'white',
      maxHeight: 50
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ironingdresses}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <FormattedMessage id='ironing.title2' />
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            <FormattedMessage id='ironing.text.piece.robe' /><br/>
            <FormattedMessage id='ironing.text.piece.veste' /><br/>
            <FormattedMessage id='ironing.text.piece.manteau' />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}