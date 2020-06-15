import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';

import Link from 'next/link'
import Router from 'next/router';

import { GoogleLogout } from "react-google-login";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


export default function Mymenu2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  
  const [Log, setLog]= useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(()=>{
    setLog(localStorage.getItem('email'));
    console.log(Log);
  },[])
  
  const logout = () => {
    localStorage.clear();
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    console.log(localStorage.getItem('email'));
    //FB.logout();
    Router.push('/')
    
  };


  return (
    <div>
      <Button aria-controls="fade-menu" style={{ color: 'white' }} aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu

        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        marginThreshold='0px'
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        anchorPosition={{ left: "0", top: "0" }}
        transformOrigin={{ top: "0px", left: "0px" }}

        PaperProps={{
          style: {
            top: 0,
            left: 0,
            backgroundColor: '#cc0044',
            borderRadius: '6px',
            color: 'white',
            marginTop: '0',
            paddingTop: ['0px'],
            width: '400px',
            maxHeight: '100%'
          },
        }}
      >


        <Link href="/"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
       
        <Link href="/leaderboard"><MenuItem onClick={handleClose}>Leaderboard</MenuItem></Link>
         {Log ?
         <div className="userDetails-wrapper">
            <div className="details-wrapper">
            <GoogleLogout
                render={renderProps => (
                <div className={classes.root}>
                
                <Link href="/"><MenuItem onClick={logout}>Logout</MenuItem></Link>
                
                </div>
                
                )}
                onLogoutSuccess={logout}
            />
            </div>
            <div className="bar" />
            <div className="stand" />
         </div>
         :
         <Link href="/game"><MenuItem onClick={handleClick}>Game</MenuItem></Link>
         }     

      </Menu>
      <style jsx>{`
      margin:0;
      padding:0;

      `}</style>
    </div >
  );
}
