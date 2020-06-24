import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>RULES</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
       
          <ol className="p-3">
              <li>The quiz comprises of 3 levels with 10 questions each.</li>
              <li>Each question carries 10 marks.</li>
              <li>The one who finishes the quiz first is the winner.</li>
              <li>You can go to the next question only after getting the current question correct.</li>
              <li>Answers should be in lowercase and without spaces.</li>
              <li>A level can be played only between its start and end timings.</li>
            </ol>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
   
    
    </div>
  );
}
