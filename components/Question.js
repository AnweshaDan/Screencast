import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <div className="head">
        <div className="container neon-box">
          <div class="glitch1" data-text="ROUND 1">ROUND 1</div>
        </div>
      </div>


      <CardContent className="question">
        <Typography className={classes.title} color="white" gutterBottom>
          Question 1
                </Typography>

        <Typography className={classes.pos} color="#f0f0f0">
          {props.qs}
                </Typography>

      </CardContent>



    </div>
  );
}

