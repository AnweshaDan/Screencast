import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Rules() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div style={{ color: "white", width: "370px", color: '#FFFFFF', fontFamily:"'Russo One', sans-serif", fontSize:18 }} onClick={handleClickOpen}>
        Rules
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Rules"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography>
              <ol className="p-3">
                <li>The quiz comprises of 3 levels with 10 questions each.</li>
                <li>Each question carries 10 marks.</li>
                <li>The one who finishes the quiz first is the winner.</li>
                <li>
                  You can go to the next question only after getting the current
                  question correct.
                </li>
                <li>
                  A level can be played only between its start and end timings.
                </li>
              </ol>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Got it !
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
