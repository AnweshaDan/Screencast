
import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
});

class Answer extends Component{

  constructor(props)
  {
    super(props);
        
    
    
  }
  

  render()
  {
    const {classes} = this.props;
    return (
      <div>
      <form className="ans-div" noValidate autoComplete="off">

         <TextField id="filled-basic" label="Type your answer here." variant="filled" onChange={this.props.change} onKeyDown={this.props.submit} />
         <Button className="btnSubmit" variant="contained" color="primary"  disableElevation onClick={this.props.submit2}>
          Submit
        </Button>
      </form>
     
    </div>
    );
  }
}
export default withStyles(useStyles)(Answer)