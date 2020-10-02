import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        className="btnSubmit"
        variant="contained"
        color="primary"
        elevation={3}
        onClick={props.submit2}
        style={{ backgroundColor: "rgb(32, 32, 177)", border: "0px solid white", height: "40px", width: "100px", borderTopRightRadius: "16px", borderBottomLeftRadius: "16px" }}
      >
        Submit
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
      <Button
        className="btnSubmit"
        aria-describedby={id}
        variant="contained"
        color="secondary"
        elevation={3}
        onClick={handleClick}
        style={{ backgroundColor: "#ff2483", border: "0px solid white", height: "40px", width: "100px", borderTopLeftRadius: "16px", borderBottomRightRadius: "16px" }}
      >
        Hint
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          {props.hint}
        </Typography>
      </Popover>
    </div>
  );
}
