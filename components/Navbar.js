import React, {useState,useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Mymenu2 from './Mymenu2'

import styles from './Navbar.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    backgroundColor: "#000033"
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 0,
  },
}));



export default function Navbar(props) {

  const classes = useStyles();
 // console.log(props.sign)//available state of signin

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [isSignedIn,setIsSigned] = useState(false);
  const [name,setName] = useState("");
  const [image, setImage] = useState("")

  useEffect(()=>{
    if(localStorage.getItem('email'))
    {
      setIsSigned(true);
      setName(localStorage.getItem('name'));
      setImage(localStorage.getItem('image'));
    }
  })


  return (
    <div className={classes.root}>
      <AppBar position="static" className={styles.navv}>
        <Toolbar className={styles.navcontent}>
          <IconButton edge="start" className={classes.menuButton} color="white" aria-label="menu">

            <Mymenu2 />

          </IconButton>

          <Typography variant="h6" className={classes.title}>
            SCREENCAST 2020
          </Typography>          
        </Toolbar>
      </AppBar>
      {
        isSignedIn ?
        <div>
        <Avatar alt = {name} src={image} />
        <div>Welcome {name} !</div>
        </div>
        :
        <div></div>
      }
      


    </div>
  );
}
