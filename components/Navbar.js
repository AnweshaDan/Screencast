import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Test from "./Test"
import MyMenu from "./MyMenu";
import Rules from './Rules';
import logo from './scl.png';

import styles from "./Navbar.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    backgroundColor: "#000066",
    width: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 0,
  },
  ava: {
    flexGrow: 0,
    marginLeft: "auto",
  },
}));

export default function Navbar(props) {

  const classes = useStyles();


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  //to display avatar in logged in state
  const [isSignedIn, setIsSigned] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {

    if (localStorage.getItem("email")) {
      setIsSigned(true);
      setName(localStorage.getItem("name"));
      setImage(localStorage.getItem("image"));
    }
  });

  return (
    <div className={classes.root}>
      <AppBar position="static" className={styles.navv}>
        <Toolbar className={styles.navcontent}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="white"
            aria-label="menu"
          >
            <Test />
          </IconButton>
          <img src={logo} alt="." style={{ width: "45px", borderRadius: "50px", boxShadow: "1px 1px 2px #000" }} />
          <Typography
            variant="h6"
            className={classes.title}
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >

            &nbsp;&nbsp;&nbsp;SCREENCAST 2020
          </Typography>

          <div className={classes.ava}>
            {isSignedIn ? (
              <div>

                <Avatar
                  position="right"
                  alt={name}
                  src={image}
                  className={styles.ava}
                  style={{
                    textAlign: "right",
                  }}
                />
                {/* <div
              style={{
                display: "flex",
                position: "relative",
                marginLeft: "10px",
                marginTop: "25px",
                color: "rgb(255, 200, 240)",
              }}
            >
              WELCOME, {name} !
            </div> */}

                {/* <div
            style={{
              textAlign: "center",
              margin: "10px auto",
              color: "rgb(255, 200, 240)",
            }}
          >
            WELCOME, {name} !
          </div> */}
              </div>
            ) : (
                <div></div>
              )}
          </div>

        </Toolbar>

      </AppBar>
      <div>

      </div>


    </div>
  );
}
