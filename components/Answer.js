import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import TextField from "@material-ui/core/TextField";

const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "10px",
    },
    anstype: {
      width: "600px"
    },
    ansdiv: {
      width: "600px"
    }

  },
  ans:{
    width:"85%",
    maxWidth: "400px",
    height: "50px",
    outline: "none",
    border: "none",
    borderTopRightRadius: "30px",
    borderBottomLeftRadius: "30px",
    backgroundColor: "#ff2483",
    boxShadow: "5px 5px 7px rgba(10, 10, 10, 0.9)",
    margin:"10px auto",
    textAlign: "center",
    fontSize:"17px",
    color:"white",
    '&::placeholder':{
      color:"#eee"
    }
  }
});

class Answer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.ansdiv} noValidate autoComplete="off" onSubmit={this.props.submit}>
          {/* <TextField
            id="filled-basic"
            label="Type your answer here."
            variant="filled"
            onChange={this.props.change}
            
            value={this.props.answer}
            className={classes.anstype}
            style={{ maxWidth: "600px", width: "80%", }}
          /> */}
          <input className={classes.ans} placeholder="Answer" onChange={this.props.change}
            
            value={this.props.answer}/>
          <br />
          <br />

        </form>
      </div>
    );
  }
}
export default withStyles(useStyles)(Answer);
