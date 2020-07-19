import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
});

class Answer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.ansdiv} noValidate autoComplete="off">
          <TextField
            id="filled-basic"
            label="Type your answer here."
            variant="filled"
            onChange={this.props.change}
            onKeyDown={this.props.submit}
            value={this.props.answer}
            className={classes.anstype}
            style={{ maxWidth: "600px", width: "80%", }}
          />
          <br />
          <br />

        </form>
      </div>
    );
  }
}
export default withStyles(useStyles)(Answer);
