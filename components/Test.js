import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import Fade from "@material-ui/core/Fade";
import Rules from "./Rules";
import MenuItem from "@material-ui/core/MenuItem";
import { GoogleLogout } from "react-google-login";
import Router from "next/router";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';


const useStyles = makeStyles({
  list: {
    width: 300,
  },

});

export default function TemporaryDrawer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const [Log, setLog] = useState(false);
  const [state, setState] = React.useState({

    left: false

  });
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    console.log("menu mounted");
    setLog(localStorage.getItem("email"));
    console.log(Log);
  }, []);

  const logout = () => {
    //FB.logout();
    clearTimeout(localStorage.getItem("interval_id"));
    localStorage.clear();
    Router.push("/");
  };


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem button key='Home'>
          <Link href='/'>
            <ListItemText primary='Home' />
          </Link>
        </ListItem>

       

        <ListItem button key='Leaderboard'>
          <Link href='/leaderboard'>
            <ListItemText primary='Leaderboard' />
          </Link>
        </ListItem>

        {Log && (
          <div className="userDetails-wrapper">
            <div className="details-wrapper">
              <GoogleLogout
                render={(renderProps) => (
                  <div className={classes.root}>
                    <Link href="/">
                      <MenuItem onClick={logout}>Logout</MenuItem>
                    </Link>
                  </div>
                )}
                onLogoutSuccess={logout}
              />
            </div>
            <div className="bar" />
            <div className="stand" />
          </div>
        ) }
            
          


      </List>
    </div>
  );
  console.log("return b4 menu")
  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{ color: "#fff" }} /></Button>
          <Drawer
            id="fade-menu"
            TransitionComponent={Fade}
            marginThreshold="0px"
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            anchorPosition={{ left: "0", top: "0" }}
            transformOrigin={{ top: "0px", left: "0px" }}
            style={{ fontFamily: "'Barlow', sans-serif", backgroundColor: "rgba(0,0,0,0.5)" }}
            PaperProps={{
              style: {
                top: 0,
                left: 0,
                backgroundColor: "rgb(32, 32, 107)",
                borderRadius: "0px",
                color: "white",
                marginTop: "0",
                paddingTop: ["0px"],
                width: "300px",
                maxHeight: "100%",

              },
            }}
            anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
            <MenuItem onClick={handleClose}>
              <Rules>Rules</Rules>
            </MenuItem>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}


/* <ListItem button key='Home'>
          <Link href='/'>
            <ListItemText primary='Home' />
          </Link>
        </ListItem>*/

        //<ListItemIcon><SportsEsportsIcon/></ListItemIcon>



        /*<ListItem button key='Game'>
              <Link href='/game'>
                
                
              <ListItemText primary='Game' />
              </Link>
            </ListItem>*/