import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import coat from '../../images/coat.jpg';
import { FormattedMessage } from 'react-intl'; 


const useStyles = makeStyles({
  card: {
    backgroundColor: '#0E1521',
    color: 'white',
    textAlign: 'center',
    borderStyle: 'solid',
  },
  media: {
    height: 200,
  },
  text: {
      color: 'white',
      height: 40
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}  
          title="coat"
        >
          <img src={coat} width='100%' height='100%' alt='coat' />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <FormattedMessage id='dry.title4' />
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            <FormattedMessage id='dry.text.coat.1' />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}