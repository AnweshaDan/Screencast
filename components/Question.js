import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import AudioHint from "./AudioHint";

const muiTheme = createMuiTheme({});

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxwidth: 345,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 21,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
    width: "auto",
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <div className="head">
        <div
          className="container neon-box"
          style={{
            textAlign: "center",
            fontSize: "29px",
            fontFamily: "'Russo One', sans-serif",
          }}
        >
          <span className="flicker">ROUND 1</span>
        </div>
      </div>

      <CardContent className="question">
        <Typography
          className={classes.title}
          style={{ fontFamily: "'Barlow', sans-serif" }}
          color="white"
          gutterBottom
        >
          Question {props.qsNo}
        </Typography>

        <Typography
          className={classes.pos}
          color="#f0f0f0"
          style={{ fontSize: "17px", fontFamily: "'Barlow', sans-serif" }}

        >
          {props.qs}
        </Typography>
        {props.image ? (
          <CardMedia
            className={classes.media}
            style={{ textAlign: "center", margin: "0 auto" }}
            image={"https://screencast2020.herokuapp.com" + props.image}
            title="Image Hint"
          />
        ) : (
            <div></div>
          )}

        <br />
        {props.audio ? (
          <div style={{ textAlign: "center", margin: "0 auto" }}>
            <AudioHint
              style={{ textAlign: "center", margin: "0 auto" }}
              audio={"https://screencast2020.herokuapp.com" + props.audio}
            />
          </div>
        ) : (
            <div></div>
          )}
      </CardContent>
    </div>
  );
}
